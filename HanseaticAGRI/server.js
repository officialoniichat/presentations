const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = 3000;

// Claude API Key from environment variable
const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.static('.'));

// Claude API Proxy Endpoint
app.post('/api/claude', async (req, res) => {
    try {
        console.log('Received request to Claude API proxy');
        
        const response = await axios.post('https://api.anthropic.com/v1/messages', req.body, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': CLAUDE_API_KEY,
                'anthropic-version': '2023-06-01'
            }
        });

        console.log('Claude API response received');
        res.json(response.data);
    } catch (error) {
        console.error('Error calling Claude API:', error.response?.data || error.message);
        res.status(error.response?.status || 500).json({
            error: error.response?.data || { message: error.message }
        });
    }
});

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Open this URL in your browser to access the presentation');
});
