'use strict';

const express = require('express');
const router = express.Router();
const tempController = require('../controllers/temperatureController');

router.get('/temperatura', tempController.get);
router.post('/temperatura', tempController.post);

module.exports = router;
