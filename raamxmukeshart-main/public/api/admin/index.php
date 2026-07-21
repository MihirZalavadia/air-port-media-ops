<?php
// Mukesh Art site admin — edits content JSON + photos via GitHub API
// commits (each save auto-deploys in ~3-4 min), plus a leads viewer.
//
// Secrets live OUTSIDE the webroot in /domains/mukeshart.in/admin_config.php,
// provisioned by the deploy workflow from GitHub Actions secrets. Without
// that file this endpoint plays dead (404) — including on any host that
// serves the repo statically.

declare(strict_types=1);

header('X-Robots-Tag: noindex, nofollow');

$configPath = dirname(__DIR__, 3) . '/admin_config.php';
if (!is_file($configPath)) {
    http_response_code(404);
    exit('Not found.');
}
$config = require $configPath;

$REPO    = $config['github_repo'];
$BRANCH  = $config['github_branch'] ?? 'main';
$TOKEN   = $config['github_token'];
$SITE    = 'https://mukeshart.in';
$PREFIX  = 'raamxmukeshart-main/'; // repo path prefix for site files

// image/video dirs the photo manager may touch (repo-relative, no prefix)
$MEDIA_DIRS = [
    'public/images/inventory/updated',
    'public/images/clients',
    'public/images/home',
    'public/images/team',
    'public/images/gallery',
    'public/videos',
];
$MEDIA_EXT = ['webp', 'png', 'jpg', 'jpeg', 'svg', 'mp4'];

session_set_cookie_params([
    'httponly' => true,
    'secure'   => true,
    'samesite' => 'Lax',
]);
session_start();

// ---------- helpers ----------

function throttle_key(string $tag): string {
    return sys_get_temp_dir() . '/mukeshart_admin_' . md5($tag . ($_SERVER['REMOTE_ADDR'] ?? '') . date('YmdH'));
}

function gh_request(string $method, string $url, ?array $body, string $token): array {
    $ch = curl_init($url);
    $headers = [
        'Authorization: Bearer ' . $token,
        'Accept: application/vnd.github+json',
        'User-Agent: mukeshart-admin',
        'X-GitHub-Api-Version: 2022-11-28',
    ];
    curl_setopt_array($ch, [
        CURLOPT_CUSTOMREQUEST  => $method,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT        => 60,
        CURLOPT_HTTPHEADER     => $headers,
    ]);
    if ($body !== null) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body));
    }
    $raw  = curl_exec($ch);
    $code = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    curl_close($ch);
    return [$code, is_string($raw) ? (json_decode($raw, true) ?? []) : []];
}

function gh_get_file(string $repoPath): array { // [content, sha] or [null, null]
    global $REPO, $BRANCH, $TOKEN;
    [$code, $data] = gh_request('GET',
        "https://api.github.com/repos/$REPO/contents/" . rawurlencode_path($repoPath) . "?ref=$BRANCH",
        null, $TOKEN);
    if ($code !== 200 || !isset($data['sha'])) return [null, null];
    $content = null;
    if (($data['encoding'] ?? '') === 'base64' && isset($data['content'])) {
        $content = base64_decode($data['content']);
    }
    return [$content, $data['sha']];
}

function gh_put_file(string $repoPath, string $binary, ?string $sha, string $message): array {
    global $REPO, $BRANCH, $TOKEN;
    $body = [
        'message' => $message,
        'content' => base64_encode($binary),
        'branch'  => $BRANCH,
    ];
    if ($sha) $body['sha'] = $sha;
    return gh_request('PUT',
        "https://api.github.com/repos/$REPO/contents/" . rawurlencode_path($repoPath),
        $body, $TOKEN);
}

function rawurlencode_path(string $p): string {
    return implode('/', array_map('rawurlencode', explode('/', $p)));
}

function e(?string $s): string {
    return htmlspecialchars((string) $s, ENT_QUOTES, 'UTF-8');
}

function csrf_field(): string {
    return '<input type="hidden" name="csrf" value="' . e($_SESSION['csrf'] ?? '') . '">';
}

function flash(string $msg, string $kind = 'ok'): void {
    $_SESSION['flash'] = [$msg, $kind];
}

// ---------- auth ----------

if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: ./');
    exit;
}

$authed = !empty($_SESSION['authed']);

if (!$authed && ($_SERVER['REQUEST_METHOD'] === 'POST') && isset($_POST['password'])) {
    $tk = throttle_key('login');
    $fails = (int) @file_get_contents($tk);
    if ($fails >= 5) {
        $error = 'Too many attempts — try again in an hour.';
    } elseif (password_verify((string) $_POST['password'], $config['password_hash'])) {
        session_regenerate_id(true);
        $_SESSION['authed'] = true;
        $_SESSION['csrf']   = bin2hex(random_bytes(24));
        header('Location: ./');
        exit;
    } else {
        @file_put_contents($tk, (string) ($fails + 1));
        $error = 'Wrong password.';
    }
}

if (!$authed) {
    http_response_code(isset($error) ? 401 : 200);
    ?><!doctype html><html lang="en"><head><meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow"><title>Admin · Mukesh Art</title>
    <style>
    body{font-family:system-ui,Segoe UI,Roboto,sans-serif;background:#0b0e14;color:#e8ebf2;display:grid;place-items:center;min-height:100vh;margin:0}
    form{background:#141926;padding:36px 32px;border-radius:14px;border:1px solid #232a3d;width:min(90vw,360px)}
    h1{font-size:18px;margin:0 0 4px}p{color:#8a93a8;font-size:13px;margin:0 0 20px}
    input{width:100%;box-sizing:border-box;padding:11px 12px;border-radius:8px;border:1px solid #2c3550;background:#0e1220;color:#fff;font-size:15px}
    button{width:100%;margin-top:12px;padding:11px;border:0;border-radius:8px;background:#e32019;color:#fff;font-weight:700;font-size:14px;cursor:pointer}
    .err{color:#ff7a73;font-size:13px;margin-top:10px}
    </style></head><body>
    <form method="post" autocomplete="off">
        <h1>Mukesh Art · Admin</h1>
        <p>Site content &amp; leads console</p>
        <input type="password" name="password" placeholder="Password" autofocus required>
        <button>Sign in</button>
        <?php if (isset($error)) echo '<div class="err">' . e($error) . '</div>'; ?>
    </form></body></html><?php
    exit;
}

// ---------- authed: CSRF gate for all POSTs ----------

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!hash_equals($_SESSION['csrf'] ?? '', (string) ($_POST['csrf'] ?? ''))) {
        http_response_code(403);
        exit('Bad token — go back, reload, retry.');
    }
}

$tab = $_GET['tab'] ?? 'texts';

// ---------- actions ----------

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
    $action = $_POST['action'];

    if ($action === 'save_texts') {
        $path = $PREFIX . 'content/site_copy.json';
        [$cur, $sha] = gh_get_file($path);
        $json = $cur ? json_decode($cur, true) : null;
        if (!$json) { flash('Could not load site_copy.json from GitHub.', 'err'); header('Location: ?tab=texts'); exit; }
        foreach (['hero', 'clients', 'contact'] as $sec) {
            foreach ($_POST[$sec] ?? [] as $k => $v) {
                if ($k === 'stats') continue;
                if (array_key_exists($k, $json[$sec])) $json[$sec][$k] = trim((string) $v);
            }
        }
        // hero stats: value|label per line
        if (isset($_POST['hero_stats'])) {
            $stats = [];
            foreach (preg_split('/\r?\n/', (string) $_POST['hero_stats']) as $line) {
                $bits = array_map('trim', explode('|', $line));
                if (count($bits) === 2 && $bits[0] !== '') $stats[] = ['value' => $bits[0], 'label' => $bits[1]];
            }
            if ($stats) $json['hero']['stats'] = $stats;
        }
        [$code] = gh_put_file($path, json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . "\n", $sha, 'Admin: update site texts');
        flash($code < 300 ? 'Texts saved — deploying, live in ~3-4 min.' : "GitHub error (HTTP $code).", $code < 300 ? 'ok' : 'err');
        header('Location: ?tab=texts'); exit;
    }

    if ($action === 'save_facts') {
        $path = $PREFIX . 'content/inventory.json';
        [$cur, $sha] = gh_get_file($path);
        $json = $cur ? json_decode($cur, true) : null;
        if (!$json) { flash('Could not load inventory.json.', 'err'); header('Location: ?tab=inventory'); exit; }
        $facts = [];
        foreach (preg_split('/\r?\n/', (string) ($_POST['facts'] ?? '')) as $line) {
            $bits = array_map('trim', explode('|', $line));
            if (count($bits) === 2 && $bits[0] !== '') $facts[] = ['value' => $bits[0], 'label' => $bits[1]];
        }
        if ($facts) $json['airportFacts'] = $facts;
        [$code] = gh_put_file($path, json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . "\n", $sha, 'Admin: update airport facts');
        flash($code < 300 ? 'Facts saved — live in ~3-4 min.' : "GitHub error (HTTP $code).", $code < 300 ? 'ok' : 'err');
        header('Location: ?tab=inventory'); exit;
    }

    if ($action === 'save_category') {
        $slug = (string) ($_POST['slug'] ?? '');
        $path = $PREFIX . 'content/inventory.json';
        [$cur, $sha] = gh_get_file($path);
        $json = $cur ? json_decode($cur, true) : null;
        if (!$json) { flash('Could not load inventory.json.', 'err'); header('Location: ?tab=inventory'); exit; }
        foreach ($json['categories'] as &$cat) {
            if ($cat['slug'] !== $slug) continue;
            foreach (['title', 'tagline', 'summary', 'cardText', 'leadLine', 'units', 'priceLine'] as $f) {
                if (isset($_POST[$f])) $cat[$f] = trim((string) $_POST[$f]);
            }
            $cat['pdfReady'] = !empty($_POST['pdfReady']);
            // plans: name | detail | price per line
            $plans = [];
            foreach (preg_split('/\r?\n/', (string) ($_POST['plans'] ?? '')) as $line) {
                $bits = array_map('trim', explode('|', $line));
                if (count($bits) === 3 && $bits[0] !== '') $plans[] = ['name' => $bits[0], 'detail' => $bits[1], 'price' => $bits[2]];
            }
            if ($plans) $cat['plans'] = $plans;
            // why points: one per line
            $why = array_values(array_filter(array_map('trim', preg_split('/\r?\n/', (string) ($_POST['whyPoints'] ?? '')))));
            if ($why) $cat['whyPoints'] = $why;
            // unit groups: blocks split by a line of ---
            // block = heading line, note line (may be empty), then rows "code | spec | location"
            if (trim((string) ($_POST['unitGroups'] ?? '')) !== '') {
                $groups = [];
                foreach (preg_split('/^\s*---\s*$/m', (string) $_POST['unitGroups']) as $block) {
                    $lines = array_values(array_filter(array_map('trim', preg_split('/\r?\n/', $block)), fn($l) => $l !== ''));
                    if (count($lines) < 2) continue;
                    $g = ['heading' => array_shift($lines)];
                    if (strpos($lines[0], '|') === false) $g['note'] = array_shift($lines);
                    $g['rows'] = [];
                    foreach ($lines as $line) {
                        $bits = array_map('trim', explode('|', $line));
                        if (count($bits) === 3) $g['rows'][] = ['code' => $bits[0], 'spec' => $bits[1], 'location' => $bits[2]];
                    }
                    if ($g['rows']) $groups[] = $g;
                }
                if ($groups) $cat['unitGroups'] = $groups;
            }
        }
        unset($cat);
        [$code] = gh_put_file($path, json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . "\n", $sha, "Admin: update inventory ($slug)");
        flash($code < 300 ? 'Category saved — live in ~3-4 min.' : "GitHub error (HTTP $code).", $code < 300 ? 'ok' : 'err');
        header('Location: ?tab=inventory&slug=' . urlencode($slug)); exit;
    }

    if ($action === 'upload_media') {
        $dir     = (string) ($_POST['dir'] ?? '');
        $replace = (string) ($_POST['replace'] ?? ''); // repo path when replacing
        if (!in_array($dir, $MEDIA_DIRS, true) && $replace === '') {
            flash('Bad target folder.', 'err'); header('Location: ?tab=photos'); exit;
        }
        if (empty($_FILES['file']['tmp_name']) || !is_uploaded_file($_FILES['file']['tmp_name'])) {
            flash('No file received (too big? server upload limit).', 'err'); header('Location: ?tab=photos'); exit;
        }
        if ($replace !== '') {
            // jail replacements to the media dirs — never arbitrary repo paths
            $okPrefix = false;
            foreach ($MEDIA_DIRS as $md) {
                if (strpos($replace, $md . '/') === 0) { $okPrefix = true; break; }
            }
            if (!$okPrefix || strpos($replace, '..') !== false) {
                flash('Bad path.', 'err'); header('Location: ?tab=photos'); exit;
            }
        }
        $name = strtolower(basename($replace !== '' ? $replace : $_FILES['file']['name']));
        $ext  = pathinfo($name, PATHINFO_EXTENSION);
        if (!in_array($ext, $MEDIA_EXT, true)) {
            flash("File type .$ext not allowed.", 'err'); header('Location: ?tab=photos'); exit;
        }
        $name = preg_replace('/[^a-z0-9._-]/', '_', $name);
        $repoPath = $replace !== ''
            ? $PREFIX . $replace
            : $PREFIX . $dir . '/' . $name;
        $binary = file_get_contents($_FILES['file']['tmp_name']);
        $sha = null;
        if ($replace !== '') {
            [, $sha] = gh_get_file($PREFIX . $replace);
            if (!$sha) { flash('Original file not found in repo.', 'err'); header('Location: ?tab=photos'); exit; }
        }
        [$code, $resp] = gh_put_file($repoPath, $binary, $sha, ($replace !== '' ? 'Admin: replace ' : 'Admin: upload ') . $name);
        if ($code < 300) {
            flash(($replace !== '' ? 'Replaced — ' : 'Uploaded — ') . 'live in ~3-4 min.' . ($replace === '' ? ' New files still need wiring into the page — tell Claude the filename.' : ''), 'ok');
        } else {
            flash('GitHub error (HTTP ' . $code . '): ' . e((string) ($resp['message'] ?? '')), 'err');
        }
        header('Location: ?tab=photos&dir=' . urlencode($dir ?: dirname($replace))); exit;
    }
}

// ---------- data for views ----------

$flashOut = $_SESSION['flash'] ?? null;
unset($_SESSION['flash']);

$viewData = [];
if ($tab === 'texts') {
    [$cur] = gh_get_file($PREFIX . 'content/site_copy.json');
    $viewData['copy'] = $cur ? json_decode($cur, true) : null;
} elseif ($tab === 'inventory') {
    [$cur] = gh_get_file($PREFIX . 'content/inventory.json');
    $viewData['inv'] = $cur ? json_decode($cur, true) : null;
} elseif ($tab === 'photos') {
    $dir = (string) ($_GET['dir'] ?? $MEDIA_DIRS[0]);
    if (!in_array($dir, $MEDIA_DIRS, true)) $dir = $MEDIA_DIRS[0];
    [$code, $data] = gh_request('GET',
        "https://api.github.com/repos/$REPO/contents/" . rawurlencode_path($PREFIX . $dir) . "?ref=$BRANCH",
        null, $TOKEN);
    $viewData['dir']   = $dir;
    $viewData['files'] = $code === 200 && is_array($data)
        ? array_values(array_filter($data, fn($f) => ($f['type'] ?? '') === 'file'))
        : [];
} elseif ($tab === 'leads') {
    $leadsFile = dirname(__DIR__, 3) . '/leads/leads.jsonl';
    $rows = [];
    if (is_file($leadsFile)) {
        foreach (file($leadsFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
            $r = json_decode($line, true);
            if (is_array($r)) $rows[] = $r;
        }
    }
    $rows = array_reverse($rows);
    if (isset($_GET['csv'])) {
        header('Content-Type: text/csv; charset=utf-8');
        header('Content-Disposition: attachment; filename=leads.csv');
        $outS = fopen('php://output', 'w');
        fputcsv($outS, ['at', 'name', 'phone', 'company', 'role', 'interest', 'message', 'source']);
        foreach ($rows as $r) {
            fputcsv($outS, [$r['at'] ?? '', $r['name'] ?? '', $r['phone'] ?? '', $r['company'] ?? '', $r['role'] ?? '', $r['interest'] ?? '', $r['message'] ?? '', $r['source'] ?? '']);
        }
        exit;
    }
    $viewData['leads'] = $rows;
}

// ---------- layout ----------
?><!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow"><title>Admin · Mukesh Art</title>
<style>
:root{--bg:#0b0e14;--panel:#141926;--line:#232a3d;--ink:#e8ebf2;--mut:#8a93a8;--acc:#e32019}
*{box-sizing:border-box}body{font-family:system-ui,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--ink);margin:0}
header{display:flex;align-items:center;gap:18px;padding:14px 22px;border-bottom:1px solid var(--line);position:sticky;top:0;background:var(--bg);z-index:5}
header b{font-size:15px}header nav{display:flex;gap:4px;flex:1}
header nav a{color:var(--mut);text-decoration:none;font-size:13px;font-weight:600;padding:7px 12px;border-radius:8px}
header nav a.on{background:var(--panel);color:var(--ink)}header nav a:hover{color:var(--ink)}
.out{color:var(--mut);font-size:12px;text-decoration:none}
main{max-width:1080px;margin:0 auto;padding:26px 20px 80px}
.flash{padding:11px 14px;border-radius:9px;margin-bottom:18px;font-size:14px}
.flash.ok{background:#12321c;color:#7ce09a}.flash.err{background:#3a1512;color:#ff9a93}
fieldset{border:1px solid var(--line);border-radius:12px;background:var(--panel);padding:18px 18px 14px;margin:0 0 18px}
legend{padding:0 8px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--mut)}
label{display:block;font-size:12px;color:var(--mut);margin:10px 0 4px}
input[type=text],textarea,select{width:100%;padding:9px 11px;border-radius:8px;border:1px solid #2c3550;background:#0e1220;color:var(--ink);font-size:14px;font-family:inherit}
textarea{min-height:80px;line-height:1.5}textarea.tall{min-height:150px}
button{padding:10px 20px;border:0;border-radius:8px;background:var(--acc);color:#fff;font-weight:700;font-size:14px;cursor:pointer}
button:hover{filter:brightness(1.08)}
.hint{font-size:12px;color:var(--mut);margin:4px 0 0;line-height:1.5}
table{width:100%;border-collapse:collapse;font-size:13px}
th,td{text-align:left;padding:9px 10px;border-bottom:1px solid var(--line);vertical-align:top}
th{color:var(--mut);font-size:11px;letter-spacing:.06em;text-transform:uppercase}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:14px}
.card{background:var(--panel);border:1px solid var(--line);border-radius:10px;overflow:hidden}
.card img,.card video{width:100%;height:110px;object-fit:cover;display:block;background:#fff}
.card .m{padding:8px 10px;font-size:11px;color:var(--mut);word-break:break-all}
.card form{padding:0 10px 10px}
.card input[type=file]{font-size:11px;width:100%;color:var(--mut)}
.card button{padding:6px 10px;font-size:11px;margin-top:6px}
.pill{display:inline-block;background:#0e1220;border:1px solid var(--line);border-radius:99px;padding:4px 12px;font-size:12px;color:var(--mut);text-decoration:none;margin:0 6px 8px 0}
.pill.on{color:var(--ink);border-color:var(--acc)}
a.btn{display:inline-block;background:var(--panel);border:1px solid var(--line);color:var(--ink);border-radius:8px;padding:8px 14px;font-size:13px;text-decoration:none}
h2{font-size:17px;margin:0 0 14px}
</style></head><body>
<header>
    <b>Mukesh Art · Admin</b>
    <nav>
        <?php foreach (['texts' => 'Site Texts', 'inventory' => 'Inventory', 'photos' => 'Photos & Videos', 'leads' => 'Leads'] as $k => $label): ?>
        <a class="<?= $tab === $k ? 'on' : '' ?>" href="?tab=<?= $k ?>"><?= $label ?></a>
        <?php endforeach; ?>
    </nav>
    <a class="out" href="<?= e($SITE) ?>" target="_blank">view site ↗</a>
    <a class="out" href="?logout=1">sign out</a>
</header>
<main>
<?php if ($flashOut): ?><div class="flash <?= e($flashOut[1]) ?>"><?= e($flashOut[0]) ?></div><?php endif; ?>

<?php if ($tab === 'texts'): $c = $viewData['copy'] ?? null; if (!$c): ?>
    <div class="flash err">Could not load site_copy.json from GitHub — check the token secret.</div>
<?php else: ?>
    <h2>Site texts <span class="hint" style="display:inline">— every save publishes to the live site in ~3–4 minutes</span></h2>
    <form method="post">
        <?= csrf_field() ?><input type="hidden" name="action" value="save_texts">
        <fieldset><legend>Hero (airport home)</legend>
            <label>Badge line</label><input type="text" name="hero[badge]" value="<?= e($c['hero']['badge']) ?>">
            <label>Headline — normal part</label><input type="text" name="hero[titlePre]" value="<?= e($c['hero']['titlePre']) ?>">
            <label>Headline — red italic part</label><input type="text" name="hero[titleEm]" value="<?= e($c['hero']['titleEm']) ?>">
            <label>Sub line</label><textarea name="hero[sub]"><?= e($c['hero']['sub']) ?></textarea>
            <label>Stats — one per line, format: value | label</label>
            <textarea name="hero_stats"><?php foreach ($c['hero']['stats'] as $s) echo e($s['value'] . ' | ' . $s['label']) . "\n"; ?></textarea>
        </fieldset>
        <fieldset><legend>Clients section</legend>
            <label>Eyebrow</label><input type="text" name="clients[eyebrow]" value="<?= e($c['clients']['eyebrow']) ?>">
            <label>Heading — normal part</label><input type="text" name="clients[titlePre]" value="<?= e($c['clients']['titlePre']) ?>">
            <label>Heading — red italic part</label><input type="text" name="clients[titleEm]" value="<?= e($c['clients']['titleEm']) ?>">
            <label>Heading — second line</label><input type="text" name="clients[titlePost]" value="<?= e($c['clients']['titlePost']) ?>">
            <label>Paragraph</label><textarea name="clients[sub]"><?= e($c['clients']['sub']) ?></textarea>
            <label>Button label</label><input type="text" name="clients[cta]" value="<?= e($c['clients']['cta']) ?>">
        </fieldset>
        <fieldset><legend>Contact section</legend>
            <label>Eyebrow</label><input type="text" name="contact[eyebrow]" value="<?= e($c['contact']['eyebrow']) ?>">
            <label>Heading — normal part</label><input type="text" name="contact[titlePre]" value="<?= e($c['contact']['titlePre']) ?>">
            <label>Heading — red italic part</label><input type="text" name="contact[titleEm]" value="<?= e($c['contact']['titleEm']) ?>">
            <label>Paragraph</label><textarea name="contact[sub]"><?= e($c['contact']['sub']) ?></textarea>
            <label>Address</label><textarea name="contact[address]"><?= e($c['contact']['address']) ?></textarea>
            <label>Email</label><input type="text" name="contact[email]" value="<?= e($c['contact']['email']) ?>">
            <label>WhatsApp number (91XXXXXXXXXX)</label><input type="text" name="contact[whatsappNumber]" value="<?= e($c['contact']['whatsappNumber']) ?>">
            <label>Response line</label><input type="text" name="contact[response]" value="<?= e($c['contact']['response']) ?>">
        </fieldset>
        <button>Save &amp; publish texts</button>
    </form>
<?php endif; endif; ?>

<?php if ($tab === 'inventory'): $inv = $viewData['inv'] ?? null; if (!$inv): ?>
    <div class="flash err">Could not load inventory.json from GitHub — check the token secret.</div>
<?php else: $slug = $_GET['slug'] ?? ''; $cat = null;
    foreach ($inv['categories'] as $cc) if ($cc['slug'] === $slug) $cat = $cc;
    if (!$cat): ?>
    <h2>Inventory</h2>
    <?php foreach ($inv['categories'] as $cc): ?>
        <a class="pill" href="?tab=inventory&amp;slug=<?= e($cc['slug']) ?>"><?= e($cc['title']) ?> · <?= e($cc['units']) ?></a>
    <?php endforeach; ?>
    <form method="post" style="margin-top:22px">
        <?= csrf_field() ?><input type="hidden" name="action" value="save_facts">
        <fieldset><legend>Airport facts (shown on every inventory page)</legend>
            <label>One per line, format: value | label</label>
            <textarea name="facts"><?php foreach ($inv['airportFacts'] as $f) echo e($f['value'] . ' | ' . $f['label']) . "\n"; ?></textarea>
        </fieldset>
        <button>Save &amp; publish facts</button>
    </form>
    <?php else: ?>
    <h2><a class="btn" href="?tab=inventory">←</a> &nbsp;<?= e($cat['title']) ?></h2>
    <form method="post">
        <?= csrf_field() ?><input type="hidden" name="action" value="save_category">
        <input type="hidden" name="slug" value="<?= e($cat['slug']) ?>">
        <fieldset><legend>Basics</legend>
            <label>Title</label><input type="text" name="title" value="<?= e($cat['title']) ?>">
            <label>Tagline (detail page, under the title)</label><textarea name="tagline"><?= e($cat['tagline']) ?></textarea>
            <label>Summary (homepage modal)</label><textarea name="summary"><?= e($cat['summary']) ?></textarea>
            <label>Card text (homepage card)</label><textarea name="cardText"><?= e($cat['cardText']) ?></textarea>
            <label>"Best for" line</label><textarea name="leadLine"><?= e($cat['leadLine']) ?></textarea>
            <label>Units chip (e.g. "39 LED Screens")</label><input type="text" name="units" value="<?= e($cat['units']) ?>">
            <label>Price teaser (e.g. "Starting ₹2 Lac/mo")</label><input type="text" name="priceLine" value="<?= e($cat['priceLine']) ?>">
            <label><input type="checkbox" name="pdfReady" <?= $cat['pdfReady'] ? 'checked' : '' ?> style="width:auto"> Plan PDF is uploaded &amp; ready for download</label>
        </fieldset>
        <fieldset><legend>Plans / packages — one per line: name | detail | price</legend>
            <textarea class="tall" name="plans"><?php foreach ($cat['plans'] as $p) echo e($p['name'] . ' | ' . $p['detail'] . ' | ' . $p['price']) . "\n"; ?></textarea>
            <p class="hint">Add a line to add a plan; delete a line to remove it.</p>
        </fieldset>
        <fieldset><legend>Why this works — one point per line</legend>
            <textarea class="tall" name="whyPoints"><?= e(implode("\n", $cat['whyPoints'])) ?></textarea>
        </fieldset>
        <fieldset><legend>Unit tables — blocks separated by a line with only ---</legend>
            <textarea class="tall" name="unitGroups"><?php
                $blocks = [];
                foreach ($cat['unitGroups'] as $g) {
                    $b = $g['heading'] . "\n" . ($g['note'] ?? '');
                    foreach ($g['rows'] as $r) $b .= "\n" . $r['code'] . ' | ' . $r['spec'] . ' | ' . $r['location'];
                    $blocks[] = $b;
                }
                echo e(implode("\n---\n", $blocks));
            ?></textarea>
            <p class="hint">Each block: first line = heading, second line = note (optional), then rows as code | spec | location.</p>
        </fieldset>
        <button>Save &amp; publish category</button>
    </form>
    <?php endif; endif; endif; ?>

<?php if ($tab === 'photos'): ?>
    <h2>Photos &amp; videos</h2>
    <?php foreach ($MEDIA_DIRS as $d): ?>
        <a class="pill <?= ($viewData['dir'] ?? '') === $d ? 'on' : '' ?>" href="?tab=photos&amp;dir=<?= e(urlencode($d)) ?>"><?= e(str_replace('public/', '', $d)) ?></a>
    <?php endforeach; ?>
    <form method="post" enctype="multipart/form-data" style="margin:14px 0 22px">
        <?= csrf_field() ?><input type="hidden" name="action" value="upload_media">
        <input type="hidden" name="dir" value="<?= e($viewData['dir']) ?>">
        <fieldset><legend>Upload a new file to <?= e(str_replace('public/', '', $viewData['dir'])) ?></legend>
            <input type="file" name="file" accept=".webp,.png,.jpg,.jpeg,.svg,.mp4" required>
            <p class="hint">Replacing an existing photo (same name) goes live automatically. A brand-new
            filename also needs wiring into the page — after uploading, tell Claude the filename and where it should appear.</p>
            <button>Upload &amp; publish</button>
        </fieldset>
    </form>
    <div class="grid">
    <?php foreach ($viewData['files'] as $f):
        $isVideo = str_ends_with(strtolower($f['name']), '.mp4');
        $liveUrl = $SITE . '/' . str_replace('public/', '', $viewData['dir']) . '/' . rawurlencode($f['name']);
    ?>
        <div class="card">
            <?php if ($isVideo): ?><video src="<?= e($liveUrl) ?>" muted preload="metadata"></video>
            <?php else: ?><img src="<?= e($liveUrl) ?>" alt="" loading="lazy"><?php endif; ?>
            <div class="m"><?= e($f['name']) ?> · <?= number_format(($f['size'] ?? 0) / 1024) ?> KB</div>
            <form method="post" enctype="multipart/form-data">
                <?= csrf_field() ?><input type="hidden" name="action" value="upload_media">
                <input type="hidden" name="replace" value="<?= e($viewData['dir'] . '/' . $f['name']) ?>">
                <input type="file" name="file" accept=".webp,.png,.jpg,.jpeg,.svg,.mp4" required>
                <button>Replace</button>
            </form>
        </div>
    <?php endforeach; ?>
    </div>
<?php endif; ?>

<?php if ($tab === 'leads'): $rows = $viewData['leads'] ?? []; ?>
    <h2>Leads (<?= count($rows) ?>) &nbsp;<a class="btn" href="?tab=leads&amp;csv=1">Download CSV</a></h2>
    <?php if (!$rows): ?><p class="hint">No leads logged yet — they appear here the moment someone submits the site form.</p><?php endif; ?>
    <table><tr><th>When</th><th>Name</th><th>Phone</th><th>Company</th><th>Interest</th><th>Message</th><th>Source</th><th></th></tr>
    <?php foreach ($rows as $r): ?>
        <tr>
            <td><?= e(substr((string) ($r['at'] ?? ''), 0, 16)) ?></td>
            <td><b><?= e($r['name'] ?? '') ?></b></td>
            <td><?= e($r['phone'] ?? '') ?></td>
            <td><?= e($r['company'] ?? '') ?></td>
            <td><?= e($r['interest'] ?? '') ?></td>
            <td><?= e(mb_substr((string) ($r['message'] ?? ''), 0, 140)) ?></td>
            <td><?= e($r['source'] ?? '') ?></td>
            <td><a class="btn" target="_blank" rel="noopener" href="https://wa.me/91<?= e($r['phone'] ?? '') ?>">WhatsApp</a></td>
        </tr>
    <?php endforeach; ?>
    </table>
<?php endif; ?>
</main></body></html>
