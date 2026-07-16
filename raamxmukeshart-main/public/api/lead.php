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

// Email the lead
$subject = 'New website lead - ' . $name;
$lines = [];
foreach (['name', 'phone', 'company', 'role', 'interest', 'message', 'source', 'at'] as $k) {
    if ($lead[$k] !== '') {
        $lines[] = strtoupper($k) . ': ' . $lead[$k];
    }
}
$body = implode("\n", $lines)
    . "\n\nReply on WhatsApp: https://wa.me/91" . $lead['phone'] . "\n";
$headers = "From: Mukesh Art Website <info@mukeshart.in>\r\n"
    . "Reply-To: info@mukeshart.in\r\n"
    . "X-Mailer: PHP";
@mail('info@mukeshart.in', $subject, $body, $headers);

echo json_encode(['ok' => true]);
