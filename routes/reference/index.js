const express = require('express');
const router = express.Router();

router.get('/', require('../../controllers/reference/index').index);

module.exports = router;