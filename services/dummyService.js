const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/dummy', async (req, res) => {
    let result = await axios({url: 'https://reqres.in/api/users/2',method: 'GET',headers: {},data: {}});
    res.send({
        data: result.data
    })
});

module.exports = router;