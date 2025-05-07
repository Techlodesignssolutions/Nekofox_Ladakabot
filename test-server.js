const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Serve a test page with more options
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Widget Test</title>
    </head>
    <body>
      <h1>Testing Widget</h1>
      <p>The widget should appear in the bottom-right corner.</p>
      
      <h2>Test Local Version</h2>
      <button onclick="loadDirect()">Test Direct Version (Local)</button>
      <button onclick="loadShadow()">Test Shadow DOM Version (Local)</button>
      
      <h2>Test Vercel Version</h2>
      <button onclick="loadVercelDirect()">Test Direct Version (Vercel)</button>
      <button onclick="loadVercelShadow()">Test Shadow DOM Version (Vercel)</button>
      
      <script>
        function loadDirect() {
          const script = document.createElement('script');
          script.src = '/widget-direct.js';
          document.body.appendChild(script);
        }
        
        function loadShadow() {
          const script = document.createElement('script');
          script.src = '/widget-shadow.js';
          document.body.appendChild(script);
        }
        
        function loadVercelDirect() {
          const script = document.createElement('script');
          script.src = 'https://nekofox-ladakabot.vercel.app/widget-direct.js';
          document.body.appendChild(script);
        }
        
        function loadVercelShadow() {
          const script = document.createElement('script');
          script.src = 'https://nekofox-ladakabot.vercel.app/widget-shadow.js';
          document.body.appendChild(script);
        }
      </script>
    </body>
    </html>
  `);
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Test server running at http://localhost:${PORT}`);
}); 