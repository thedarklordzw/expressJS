const express = require('express');
const sendDataController = require('../controller/api');

const router = express.Router();

router.use('/api', sendDataController.sendData);

module.exports = router;
