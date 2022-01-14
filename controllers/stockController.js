const db = require('../models/index')
const axios = require('axios')
require('dotenv/config')


// get the stockApi model
const Stock = db.Stock

let stockPost = async (req, res) => {
    
    let stockSymbolAndName ={
        symbol: req.body.symbol,
        name: req.body.name,
    }
     // using the builtin 'create' function on StockApi Model
     const stockSymbolAndNameForm = await Stock.create(stockSymbolAndName)
     
     // send a 200 response with the imported stock
     res.status(200).json(stockSymbolAndNameForm)
}

let loadStockPost = async (req, res) => {
     const ticker_url = `https://api.marketstack.com/v1/tickers?access_key=${process.env.PARAMS}`

    const response = await axios.get(ticker_url)
    const tickerData = response.data['data']

    let stock_ticker=[];
    tickerData.forEach(item =>{
        let input_data = {
            database: item["database"],
            name: item["name"],
            symbol:item["symbol"],
            has_intraday:item["has_intraday"],
            has_eod: item["has_eod"],
            stock_exchange_name: item['stock_exchange']["name"],
            stock_exchange_acronym: item['stock_exchange']["acronym"],
            stock_exchange_mic:  item['stock_exchange']["mic"],
            stock_exchange_country:  item['stock_exchange']["country"],
            stock_exchange_country_code:  item['stock_exchange']["country_code"],
            stock_exchange_city: item['stock_exchange']["city"],
            stock_exchange_website:  item['stock_exchange']["website"],
 
        }
            stock_ticker.push(input_data)
    })
     const stockTickersFromApi = await Stock.bulkCreate(stock_ticker)
     
     // send a 200 response with the imported stock
     res.status(200).json(stockTickersFromApi)

}

let getAllStockPost = async (req, res) => {

    // using the builtin 'findAll' function on StockApi Model
    let stock = await Stock.findAll({
        include: db.StockRecord
        // include: db.StockRecord
    })
    res.status(200).json(stock)
}

let getOneStockPost = async (req, res) => {
    let id = req.params.id
    let singleStock = await Stock.findOne({where: {id: id}, include: db.StockRecord})
    res.status(200).json(singleStock)
}

let getSingleStockIDbySymbol = async (req, res) => {
    let symbol= req.params.symbol
    let singleStock = await Stock.findOne({where: {symbol: symbol}})
    res.status(200).send(singleStock)
}

const deleteStockPost = async (req, res) => {
    let id = req.params.id

    // using the builtin 'destroy' function on StockApi Model
    await Stock.destroy({where :{id: id}})
    res.status(200).send(`stockApi with id: ${id} is deleted`)
}


module.exports = {
    loadStockPost,
    stockPost,
    getAllStockPost,
    getOneStockPost,
    getSingleStockIDbySymbol,
    deleteStockPost
}