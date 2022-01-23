const express = require('express');
const router = express.Router();

router.get('/temperatura', (req, res) => {
    res.sendFile(__dirname + 'views/temperatura');
});

module.exports = router;