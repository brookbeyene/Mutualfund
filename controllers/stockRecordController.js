const db = require('../models/index')
const axios = require('axios');
const { Op } = require("sequelize");
require('dotenv/config')

let Record = db.StockRecord;
let Stock = db.Stock;





const stockRecordInput = async (req, res) => {
    
    const theDay= req.body.theday;
    const theSymbol = req.body.thesymbol;
    const userID = req.body.userId;
    // console.log("this is the one", stockID)
    const url = `https://api.marketstack.com/v1/eod/${theDay}?access_key=${process.env.PARAMS}&symbols=${theSymbol}`
    
    

    const response = await axios.get(url)
    const data = response.data['data']

    let result = await Stock.findOne({
        where: {symbol: theSymbol}
    })
    const stockID = result["id"]
    console.log("this is stockID", stockID)
  
    const stocks = [];
    if(!data || data.length==0) return stocks;
    data.forEach(item =>{
        
        let input_data = {
            database: item["database"],
            userId: userID,
            stock: item["stock"],
            open: item["open"], 
            high: item["high"],
            low: item["low"],
            close: item["close"],
            volume: item["volume"],
            adj_high: item["adj_high"],
            adj_low: item["adj_low"],
            adj_close: item["adj_close"],
            adj_open: item["adj_open"],
            adj_volume: item["adj_volume"],
            split_factor: item["split_factor"],
            dividend: item["dividend"],
            symbol: item["symbol"],
            exchange: item["exchange"],
            date: item["date"],
            stockId: stockID
           
         }
         stocks.push(input_data)

    })
     // using the builtin 'create' function on StockApi Model
     const stockRecording = await Record.bulkCreate(stocks)
     
     // send a 200 response with the imported stock
     res.status(200).json(stockRecording)
}


let getAllStockRecordPost = async (req, res) => {

    // using the builtin 'findAll' function on StockApi Model
    let stockRecords = await Record.findAll({})
    res.status(200).json(stockRecords)
}

let patchSingleStockRecord = async(req, res) =>{
    let userId = req.body.userId;
    let symbol_to_update = req.body.symbol;
    let stockId = req.body.stockId;
    let date = req.body.date;

    // let findTheOne = await Record.findOne({where: {userId: userId, symbol: symbol_to_update}})
    let findTheOne = await Record.findAll({
        where: {
            [Op.and]: [
            {userId: userId}, 
            {symbol: symbol_to_update},
            {date: date}
            ]
        }
    })
    let input_data = {
            database: findTheOne["database"],
            userId: userId,
            stock: findTheOne["stock"],
            open: findTheOne["open"], 
            high: findTheOne["high"],
            low: findTheOne["low"],
            close: findTheOne["close"],
            volume: findTheOne["volume"],
            adj_high: findTheOne["adj_high"],
            adj_low: findTheOne["adj_low"],
            adj_close: findTheOne["adj_close"],
            adj_open: findTheOne["adj_open"],
            adj_volume: findTheOne["adj_volume"],
            split_factor: findTheOne["split_factor"],
            dividend: findTheOne["dividend"],
            symbol: findTheOne["symbol"],
            exchange: findTheOne["exchange"],
            date: findTheOne["date"],
            stockId: stockId
           
         }
    const stockUpdate = await Record.update(input_data, {
        where: {
            [Op.and]: [
            {userId: userId}, 
            {symbol: symbol_to_update},
            {date: date}
            ]
        }
    })
    res.status(200).send(stockUpdate)
}

module.exports = {
    stockRecordInput,
    getAllStockRecordPost,
    patchSingleStockRecord
}