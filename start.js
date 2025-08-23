const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Serve index.html for all routes (for client-side routing)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the frontend server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Frontend server running on http://localhost:${PORT}`);
});
