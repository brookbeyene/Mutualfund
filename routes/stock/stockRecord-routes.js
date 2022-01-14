const express = require('express');
// const router = express.Router();
const axios = require('axios');
const db = require('../../models');
const router = require('express').Router();
const stockRecordController = require('../../controllers/stock/stockRecordController');
const fetch = require('node-fetch');

router.get('/', (req, res)=>{
    
    res.send("Hello Stock Record")
})

router.post('/new/', stockRecordController.stockRecordInput)
router.get('/all', stockRecordController.getAllStockRecordPost)

router.patch('/single', stockRecordController.patchSingleStockRecord)
// router.post('/new/:userid/:thesymbol/:theday/:stockId', stockRecordController.stockRecordInput)


module.exports = router;