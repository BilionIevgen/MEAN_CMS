const express = require('express')
const router = express.Router();
const controller = require('../controllers/position')
router.get('/:category', controller.getPosition)
router.post('/', controller.postPosition)
router.delete('/:id', controller.deletePosition)
router.patch('/:id', controller.patchPosition)

module.exports = router