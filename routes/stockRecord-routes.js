const express = require('express');
// const router = express.Router();
const axios = require('axios');
const db = require('../models');
const router = require('express').Router();
const stockRecordController = require('../controllers/stockRecordController');
const fetch = require('node-fetch');

router.get('/', (req, res)=>{
    
    res.send("Hello Stock Record")
})
// router.post('/new/:userid/:thesymbol/:theday/:stockId', stockRecordController.stockRecordInput)
// const findStockIDFromSymbol = async (req, res, next) =>{
// // ${req.body.thesymbol}

//     const fetched = fetch(`http://localhost:3000/api/stocks/get/AAPL`)
//     fetched.then((response) =>{
//         console.log("Response from findStockIDForm", response)
//         req.body.stockId = response['id']
//     })
//     // const response = await axios.get(urlInHouse).then().catch(error =>console.log(err))
//     // console.log("Response from findStockIDForm", response)
//     // req.body.stockId = response['id']
//     next();    
    
// }

router.post('/new/', stockRecordController.stockRecordInput)
router.get('/all', stockRecordController.getAllStockRecordPost)

router.patch('/single', stockRecordController.patchSingleStockRecord)

module.exports = router;