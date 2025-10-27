export default async function handler(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WMD API Server</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #0070C9 0%, #002F6C 100%);
            color: white;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            background: linear-gradient(to right, #fff, #00AEEF);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .status {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(0, 255, 0, 0.2);
            padding: 8px 16px;
            border-radius: 20px;
            margin-bottom: 24px;
            font-weight: 500;
        }
        .status::before {
            content: "●";
            color: #00ff00;
            font-size: 1.2rem;
        }
        p {
            line-height: 1.6;
            margin-bottom: 16px;
            opacity: 0.9;
        }
        .endpoint {
            background: rgba(0, 0, 0, 0.3);
            padding: 16px;
            border-radius: 8px;
            margin: 20px 0;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            border-left: 4px solid #00AEEF;
        }
        .link {
            display: inline-block;
            margin-top: 24px;
            padding: 12px 24px;
            background: linear-gradient(135deg, #00AEEF 0%, #0070C9 100%);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            transition: transform 0.2s;
        }
        .link:hover {
            transform: translateY(-2px);
        }
        .info {
            margin-top: 24px;
            padding-top: 24px;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            font-size: 0.9rem;
            opacity: 0.7;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 WMD API Server</h1>
        <div class="status">API Active</div>

        <p>Acesta este serverul API pentru <strong>Web Media Design</strong>.</p>

        <p>Site-ul principal se află la:</p>
        <a href="https://webmediadesign.ro" class="link">
            → Vizitează webmediadesign.ro
        </a>

        <div class="info">
            <strong>📡 API Endpoint:</strong>
            <div class="endpoint">
                POST /api/submit-application
            </div>

            <p><strong>Status:</strong> ✅ Funcțional</p>
            <p><strong>Hosting:</strong> Vercel Serverless</p>
            <p><strong>Email:</strong> contact@webmediadesign.ro</p>
        </div>
    </div>
</body>
</html>
  `);
}
