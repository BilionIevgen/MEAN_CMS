const express = require('express')
const router = express.Router();
const controller = require('../controllers/analytics')
router.get('/overview', controller.overview)
router.get('/analitics', controller.analitics)

module.exports = router
