const express = require('express')
const router = express.Router();
const controller = require('../controllers/category')
router.get('/', controller.getCategory)
router.get('/:id', controller.getCategories)
router.post('/', controller.postCategory)
router.delete('/:id', controller.deleteCategory)
router.patch('/:id', controller.patchCategory)

module.exports = router