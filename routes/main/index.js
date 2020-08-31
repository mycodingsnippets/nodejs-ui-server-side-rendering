const express = require('express');
const router = express.Router();

const indexController = require('../../controllers/main/index');

router.get('/', indexController);

module.exports = router;