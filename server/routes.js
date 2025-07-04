 // Routes for Fixorium server

const express = require('express');
const router = express.Router();

// Route for homepage
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/../public/index.html');
});

// Route for token data
router.get('/token-data', (req, res) => {
    // Code to retrieve token data
    res.json(tokenData);
});

module.exports = router;
