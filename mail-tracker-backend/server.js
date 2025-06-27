const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

// Allow CORS requests
app.use(require('cors')());

// Track Route
app.get('/track', (req, res) => {
  const id = req.query.id || 'unknown';
  const timestamp = new Date().toISOString();

  // Log to terminal
  console.log(`📩 Email Opened | ID: ${id} | Time: ${timestamp}`);

  // Append to file
  fs.appendFileSync('opens.log', `ID: ${id} at ${timestamp}\n`);

  // Send 1x1 image
  const pixelPath = path.join(__dirname, 'tracker.png');
  res.sendFile(pixelPath);
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
