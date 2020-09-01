const express = require('express');
const router = express.Router();

router.get('/dummy', (req, res) => {
    res.json({
        name: 'Aditya'
    });
});

module.exports = router;