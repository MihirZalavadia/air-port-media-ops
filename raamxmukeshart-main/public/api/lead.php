<?php
// Lead capture endpoint — Mukesh Art website.
// Ships with the static build (public/api/lead.php) so every deploy
// carries it. Emails info@mukeshart.in and appends a JSONL log OUTSIDE
// the webroot: /domains/mukeshart.in/leads/leads.jsonl

header('Content-Type: application/json');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

$get = function ($k) use ($data) {
    return isset($data[$k]) ? trim(strip_tags((string) $data[$k])) : '';
};

// Honeypot: humans never see this field; bots fill it. Pretend success.
if ($get('website') !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

// Server-side validation (client-side is UX only)
$name = mb_substr($get('name'), 0, 120);
$digits = preg_replace('/\D/', '', $get('phone'));
if (strlen($digits) === 12 && strpos($digits, '91') === 0) {
    $digits = substr($digits, 2);
}
if (strlen($digits) === 11 && $digits[0] === '0') {
    $digits = substr($digits, 1);
}

if ($name === '' || !preg_match('/^[6-9][0-9]{9}$/', $digits)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'validation']);
    exit;
}

$lead = [
    'at'       => date('c'),
    'name'     => $name,
    'phone'    => $digits,
    'company'  => mb_substr($get('company'), 0, 160),
    'role'     => mb_substr($get('designation'), 0, 120),
    'interest' => mb_substr($get('interest'), 0, 160),
    'message'  => mb_substr($get('message'), 0, 1000),
    'source'   => mb_substr($get('source'), 0, 160),
    'ip'       => $_SERVER['REMOTE_ADDR'] ?? '',
];

// Light per-IP throttle: max 10 submissions per hour
$tmpKey = sys_get_temp_dir() . '/mukeshart_lead_' . md5($lead['ip'] . date('YmdH'));
$count = (int) @file_get_contents($tmpKey);
if ($count >= 10) {
    echo json_encode(['ok' => true]);
    exit;
}
@file_put_contents($tmpKey, (string) ($count + 1));

// Permanent log outside the webroot (deploy-proof, not web-accessible)
$logDir = dirname(__DIR__, 2) . '/leads';
if (!is_dir($logDir)) {
    @mkdir($logDir, 0755, true);
}
@file_put_contents(
    $logDir . '/leads.jsonl',
    json_encode($lead, JSON_UNESCAPED_UNICODE) . "\n",
    FILE_APPEND | LOCK_EX
);

// Email the lead. Hostinger's PHP mail() silently drops messages
// (proven 2026-08-29: QA lead returned ok but never arrived, while the
// info@ mailbox itself accepts SMTP fine) — so send via authenticated
// SMTP through the mailbox. Credentials live OUTSIDE the webroot in
// mail_config.php (provisioned by the deploy workflow from the
// MAIL_PASSWORD GitHub secret). Missing config → legacy mail() try.
$subject = 'New website lead - ' . $name;
$lines = [];
foreach (['name', 'phone', 'company', 'role', 'interest', 'message', 'source', 'at'] as $k) {
    if ($lead[$k] !== '') {
        $lines[] = strtoupper($k) . ': ' . $lead[$k];
    }
}
$body = implode("\n", $lines)
    . "\n\nReply on WhatsApp: https://wa.me/91" . $lead['phone'] . "\n";

$mailConfigPath = dirname(__DIR__, 2) . '/mail_config.php';
$mailSent = false;
if (is_file($mailConfigPath)) {
    $mailConfig = require $mailConfigPath;
    if (!empty($mailConfig['smtp_password'])) {
        require_once __DIR__ . '/lib/Exception.php';
        require_once __DIR__ . '/lib/PHPMailer.php';
        require_once __DIR__ . '/lib/SMTP.php';
        try {
            $mailer = new PHPMailer\PHPMailer\PHPMailer(true);
            $mailer->isSMTP();
            $mailer->Host       = $mailConfig['smtp_host'] ?? 'smtp.hostinger.com';
            $mailer->Port       = (int) ($mailConfig['smtp_port'] ?? 465);
            $mailer->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
            $mailer->SMTPAuth   = true;
            $mailer->Username   = $mailConfig['smtp_user'] ?? 'info@mukeshart.in';
            $mailer->Password   = $mailConfig['smtp_password'];
            $mailer->Timeout    = 10;
            $mailer->CharSet    = 'UTF-8';
            $mailer->setFrom('info@mukeshart.in', 'Mukesh Art Website');
            $mailer->addAddress('info@mukeshart.in');
            $mailer->Subject = $subject;
            $mailer->Body    = $body;
            $mailSent = $mailer->send();
        } catch (Throwable $e) {
            // fall through — JSONL log + Sheet remain the safety net
        }
    }
}
if (!$mailSent) {
    @mail('info@mukeshart.in', $subject, $body,
        "From: Mukesh Art Website <info@mukeshart.in>\r\nReply-To: info@mukeshart.in\r\nX-Mailer: PHP");
}

// Forward to the shared Google Sheet via Apps Script webhook.
// URL + secret live OUTSIDE the webroot in lead_config.php (provisioned
// by the deploy workflow from GitHub secrets). Missing config or a slow
// webhook must never break the lead response.
$leadConfigPath = dirname(__DIR__, 2) . '/lead_config.php';
if (is_file($leadConfigPath)) {
    $leadConfig = require $leadConfigPath;
    if (!empty($leadConfig['sheets_webhook_url'])) {
        $ch = curl_init($leadConfig['sheets_webhook_url']);
        curl_setopt_array($ch, [
            CURLOPT_POST           => true,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true, // Apps Script replies via 302
            CURLOPT_TIMEOUT        => 8,
            CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
            CURLOPT_POSTFIELDS     => json_encode(
                ['token' => $leadConfig['sheets_token'] ?? ''] + $lead,
                JSON_UNESCAPED_UNICODE
            ),
        ]);
        @curl_exec($ch);
        curl_close($ch);
    }
}

echo json_encode(['ok' => true]);
