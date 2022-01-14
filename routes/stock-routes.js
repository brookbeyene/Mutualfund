const express = require('express');
const router = express.Router();
const db = require('../models');
const stockController = require('../controllers/stockController')

// router.post('/new', stockController.stockPost)
router.post('/load', stockController.loadStockPost)
router.get('/all', stockController.getAllStockPost)
router.get('/get/:symbol', stockController.getSingleStockIDbySymbol)
router.delete('/delete', stockController.deleteStockPost)


module.exports = router;