const db = require('../models/index')
const axios = require('axios')
require('dotenv/config')



// get the stockApi model
const StockApi = db.StockApis



// main work
const importApi = async (req, res) => {
    let input_data = {
        database: req.body.database,
        id: Date.now(),
        user_ID: req.body.user_ID,
        stock: req.body.stock,
        open: req.body.open, 
        high: req.body.high,
        low: req.body.low,
        close: req.body.close,
        volume: req.body.volume,
        adj_high: req.body.adj_high,
        adj_low: req.body.adj_low,
        adj_close: req.body.adj_close,
        adj_open: req.body.adj_open,
        adj_volume: req.body.adj_volume,
        split_factor: req.body.split_factor,
        dividend: req.body.dividend,
        symbol: req.body.symbol,
        exchange: req.body.exchange,
        date: req.body.date,
       
     }
     // using the builtin 'create' function on StockApi Model
     const stockApi = await StockApi.create(input_data)
     
     // send a 200 response with the created entry
     res.status(200).send(stockApi)
}
const addImportApi = async (req, res) => {
    
    const theDay= req.params.theday;
    const theSymbol = req.params.thesymbol;
    const userID = req.params.userid;
    const url = `https://api.marketstack.com/v1/eod/?access_key=${process.env.PARAMS}&symbols=AAPL`

    const response = await axios.get(url)
    const data = response.data['data'][0]
    console.log("getAllData",data[0])
    
        
   
    let input_data = {
        database: data["database"],
        id: Date.now(),
        user_ID: userID,
        stock: data["stock"],
        open: data["open"], 
        high: data["high"],
        low: data["low"],
        close: data["close"],
        volume: data["volume"],
        adj_high: data["adj_high"],
        adj_low: data["adj_low"],
        adj_close: data["adj_close"],
        adj_open: data["adj_open"],
        adj_volume: data["adj_volume"],
        split_factor: data["split_factor"],
        dividend: data["dividend"],
        symbol: data["symbol"],
        exchange: data["exchange"],
        date: data["date"],
       
     }
     // using the builtin 'create' function on StockApi Model
     const stockApi = await StockApi.create(input_data)
     
     // send a 200 response with the imported stock
     res.status(200).json(stockApi)
}
const addStockApi = async (req, res) => {
    
    const theDay= req.params.theday;
    const theSymbol = req.params.thesymbol;
    const userID = req.params.userid;

    const url = `https://api.marketstack.com/v1/eod/${theDay}?access_key=${process.env.PARAMS}&symbols=${theSymbol}`
   

    const response = await axios.get(url)
    const data = response.data['data']
    // console.log("getAllData",data[0])
    
    const stocks = [];
    if(!data || data.length==0) return stocks;
    data.forEach(item =>{
        
        let input_data = {
            database: item["database"],
            // id: Date.now(),
            // user_ID: userID,
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
           
         }
         stocks.push(input_data)

    })
    console.log(stocks[1])
     // using the builtin 'create' function on StockApi Model
     const stockApi = await StockApi.bulkCreate(stocks)
     
     // send a 200 response with the imported stock
     res.status(200).json(stockApi)
}
const addStockApi2 = async (req, res) => {
    
    const theDay= req.params.theday;
    const theSymbol = req.params.thesymbol;
    const userID = req.params.userid;

    const url = `https://api.marketstack.com/v1/eod?access_key=${process.env.PARAMS}&symbols=${theSymbol}`
   

    const response = await axios.get(url)
    const data = response.data['data']
    // console.log("getAllData",data[0])
    
    const stocks = [];
    if(!data || data.length==0) return stocks;
    data.forEach(item =>{
        
        let input_data = {
            database: item["database"],
            // id: Date.now(),
            // user_ID: userID,
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
           
         }
         stocks.push(input_data)

    })
    console.log(stocks[1])
     // using the builtin 'create' function on StockApi Model
     const stockApi = await StockApi.bulkCreate(stocks)
     
     // send a 200 response with the imported stock
     res.status(200).json(stockApi)
}
const addStockApi3 = async (req, res) => {
    
    const theDay1= req.params.theday1;
    const theDay2= req.params.theday2;
    const theSymbol = req.params.thesymbol;
    const userID = req.params.userid;

    const url = `https://api.marketstack.com/v1/eod?access_key=${process.env.PARAMS}&symbols=${theSymbol}&date_from=${theDay1}&date_to=${theDay2}`
   

    const response = await axios.get(url)
    const data = response.data['data']
    // console.log("getAllData",data[0])
    
    const stocks = [];
    if(!data || data.length==0) return stocks;
    data.forEach(item =>{
        
        let input_data = {
            database: item["database"],
            // id: Date.now(),
            // user_ID: userID,
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
           
         }
         stocks.push(input_data)

    })
    console.log(stocks[1])
     // using the builtin 'create' function on StockApi Model
     const stockApi = await StockApi.bulkCreate(stocks)
     
     // send a 200 response with the imported stock
     res.status(200).json(stockApi)
}

const getAllStockApis = async (req, res) => {

    // using the builtin 'findAll' function on StockApi Model
    let stockApi = await StockApi.findAll({})
    res.status(200).send(stockApi)
}

const getOneStockApi = async (req, res) => {
    
    // getting the id from the params in the req
    let id = req.params.id

    // using the builtin 'findAll' function on StockApi Model
    let stockApi = await StockApi.findOne({where: {id: id}})
    res.status(200).send(stockApi)
}

const updateStockApi = async (req, res) => {
    let id = req.params.id

    // using the builtin 'findAll' function on StockApi Model
    const stockApi = await StockApi.update(req.body, { where: {id: id}})
    res.status(200).send(stockApi)
}

const deleteStockApi = async (req, res) => {
    let id = req.params.id

    // using the builtin 'destroy' function on StockApi Model
    await StockApi.destroy({where :{id: id}})
    res.status(200).send(`stockApi with id: ${id} is deleted`)
}
let collected_stock = (array) =>{
        const stocks = [];
        if(!array || array.length==0) return stocks;
        array.forEach(item =>{

        })
    }
module.exports = {
    addStockApi,
    addStockApi2,
    addStockApi3,
    getAllStockApis,
    getOneStockApi,
    updateStockApi,
    deleteStockApi,
    importApi,
    addImportApi
}
  