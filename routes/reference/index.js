const express = require('express');
const router = express.Router();

router.get('/bulma', require('../../controllers/reference/index').bulma);

router.get('/semantic', require('../../controllers/reference/index').semantic);

module.exports = router;