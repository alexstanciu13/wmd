<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get JSON data
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate required fields
$required = ['name', 'email', 'phone', 'company', 'budget', 'projectType', 'timeline', 'description'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing required fields']);
        exit();
    }
}

// Sanitize inputs
function sanitize($input) {
    return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, 'UTF-8');
}

$name = sanitize($data['name']);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = sanitize($data['phone']);
$company = sanitize($data['company']);
$website = !empty($data['website']) ? sanitize($data['website']) : 'N/A';
$budget = sanitize($data['budget']);
$projectType = sanitize($data['projectType']);
$timeline = sanitize($data['timeline']);
$description = sanitize($data['description']);

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit();
}

// Validate budget is numeric
if (!is_numeric($budget) || $budget <= 0) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid budget value']);
    exit();
}

// Format budget
$formattedBudget = number_format($budget, 0, ',', '.') . ' €';

// Format project type
$projectTypes = [
    'web-design' => 'Design Web',
    'ecommerce' => 'E-Commerce',
    'marketing' => 'Marketing Digital',
    'branding' => 'Branding',
    'ai-automation' => 'Automatizare AI',
    'comprehensive' => 'Pachet Complet',
];
$projectTypeLabel = $projectTypes[$projectType] ?? $projectType;

// Format timeline
$timelines = [
    'asap' => 'Cât mai curând (În 1 lună)',
    '1-3' => '1-3 luni',
    '3-6' => '3-6 luni',
    '6+' => '6+ luni',
];
$timelineLabel = $timelines[$timeline] ?? $timeline;

// Create email content
$emailContent = "Ai primit o cerere nouă de colaborare:

Nume:        $name
Email:       $email
Telefon:     $phone
Companie:    $company
Website:     $website
Buget:       $formattedBudget
Tip Proiect: $projectTypeLabel
Cronologie:  $timelineLabel

Mesaj:
$description

--
Formular Aplica Acum
Web Media Design
contact@webmediadesign.ro";

// Email headers
$to = 'contact@webmediadesign.ro';
$subject = 'Nouă cerere de colaborare — Web Media Design';
$headers = [
    'From: Web Media Design <contact@webmediadesign.ro>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8'
];

// Send email
$success = mail($to, $subject, $emailContent, implode("\r\n", $headers));

if ($success) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Application submitted successfully'
    ]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?>
