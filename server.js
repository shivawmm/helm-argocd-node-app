const express = require('express');

const app = express();

const PORT = 3000;

const quotes = [
  "GitOps is the future of Kubernetes deployments.",
  "ArgoCD provides declarative GitOps workflows.",
  "Helm simplifies Kubernetes application packaging.",
  "Containers made modern deployments consistent.",
  "Automation improves reliability and scalability."
];

app.get('/api/quote', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  res.json({
    quote: randomQuote
  });
});

app.get('/', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const html = `
    <html>
      <head>
        <title>Helm + ArgoCD Demo</title>

        <style>
          body {
            background-color: #0f172a;
            color: white;
            font-family: Arial;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .card {
            background-color: #1e293b;
            padding: 40px;
            border-radius: 12px;
            width: 600px;
            text-align: center;
          }

          h1 {
            color: #38bdf8;
          }

          .quote {
            margin: 30px 0;
            font-size: 22px;
            color: #38bdf8;
          }

          button {
            padding: 12px 20px;
            border: none;
            border-radius: 8px;
            background-color: #38bdf8;
            color: black;
            font-weight: bold;
            cursor: pointer;
          }
        </style>
      </head>

      <body>
        <div class="card">
          <h1>🚀 Helm + ArgoCD Demo</h1>

          <div class="quote">
            "${randomQuote}"
          </div>

          <p><strong>Environment:</strong> Development</p>
          <p><strong>Version:</strong> v1</p>
          <p><strong>Platform:</strong> Helm + ArgoCD</p>

          <br />

          <button onclick="window.location.reload()">
            Generate Quote
          </button>
        </div>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});