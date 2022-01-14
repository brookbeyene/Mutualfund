const express = require('express');
const router = express.Router();
const db = require('../../models');
const etfController = require('../../controllers/etf/etfController')

// router.post('/new', stockController.stockPost)
router.post('/load', etfController.loadEtfPost)
router.delete('/delete/all', etfController.deleteAllEtfPost)
router.delete('/delete/:id', etfController.deleteEtfPost)
router.get('/all', etfController.getAllEtfPost)
// router.get('/get/:symbol', etfController.getSingleStockIDbySymbol)


module.exports = router;