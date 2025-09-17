const express = require('express');
const path = require('path');
const open = require('open');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the project root
app.use(express.static(path.join(__dirname, '..')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/presentations/presentation.html'));
});

app.get('/presentation', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/presentations/presentation.html'));
});

app.get('/konzept', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/dashboards/konzept.html'));
});

app.get('/beispiel', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/dashboards/beispiel.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`
    ╔═══════════════════════════════════════════╗
    ║                                           ║
    ║     GEV Präsentation Server gestartet     ║
    ║                                           ║
    ║     Öffnen Sie Ihren Browser unter:      ║
    ║     http://localhost:${PORT}                 ║
    ║                                           ║
    ║     Verfügbare Routen:                    ║
    ║     /presentation - Hauptpräsentation     ║
    ║     /konzept - GEV Dashboard              ║
    ║     /beispiel - Referenz-Dashboard        ║
    ║                                           ║
    ║     Zum Beenden: Ctrl+C                  ║
    ║                                           ║
    ╚═══════════════════════════════════════════╝
    `);

    // Automatically open browser
    open(`http://localhost:${PORT}`);
});