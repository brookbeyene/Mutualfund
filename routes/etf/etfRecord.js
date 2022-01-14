const express = require('express');
const router = express.Router();
const db = require('../../models');
const etfRecordController = require('../../controllers/etf/etfRecordController')

// router.post('/new', stockController.stockPost)
router.post('/load', etfRecordController.loadEtfRecordPost)
router.get('/all', etfRecordController.getAllEtfRecordPost)
router.delete('/delete/all', etfRecordController.deleteAllEtRecordfPost)
// router.delete('/delete/:id', etfController.deleteEtfPost)
// router.get('/get/:symbol', etfController.getSingleStockIDbySymbol)


module.exports = router;