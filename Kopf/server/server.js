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

// Start server with error handling
const server = app.listen(PORT, () => {
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

// Error handling for port conflicts
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`
        ╔═══════════════════════════════════════════╗
        ║           ⚠️  PORT KONFLIKT  ⚠️            ║
        ║                                           ║
        ║     Port ${PORT} ist bereits belegt!          ║
        ║                                           ║
        ║     Lösungsmöglichkeiten:                 ║
        ║                                           ║
        ║     1. Beenden Sie den anderen Prozess:   ║
        ║        lsof -i :${PORT}                       ║
        ║        kill <PID>                         ║
        ║                                           ║
        ║     2. Verwenden Sie einen anderen Port:  ║
        ║        PORT=3001 npm start                ║
        ║                                           ║
        ╚═══════════════════════════════════════════╝
        `);
        process.exit(1);
    } else {
        console.error('Server error:', err);
        process.exit(1);
    }
});