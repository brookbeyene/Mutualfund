const db = require('../../models/index')
const axios = require('axios')
require('dotenv/config')


// get the stockApi model
const StockTickerApiDb = db.StockTickers



// main work
const addStockTickers = async (req, res) => {
    let input_data = {
        database: req.body.database,
        id: Date.now(),
        user_ID: req.body.user_ID,
        name: req.body.name,
        symbol:req.body.symbol,
        has_intraday:req.body.has_intraday,
        has_eod: req.body.has_eod,
        stock_exchange_name: req.body.stock_exchange_name,
        stock_exchange_acronym: req.body.stock_exchange_acronym,
        stock_exchange_mic:  req.body.stock_exchange_mic,
        stock_exchange_country:  req.body.stock_exchange_country,
        stock_exchange_country_code:  req.body.stock_exchange_country_code,
        stock_exchange_city: req.body.stock_exchange_city,
        stock_exchange_website:  req.body.stock_exchange_website,
        
     }
     // using the builtin 'create' function on StockTickerApiDb Model
     const stockApi = await StockTickerApiDb.create(input_data)
     
     // send a 200 response with the created entry
     res.status(200).send(stockApi)
}

const importAllTickers = async (req, res) => {
    
    const theDay= req.params.theday;
    const theSymbol = req.params.thesymbol;
    const userID = req.params.userid;
    const ticker_url = `https://api.marketstack.com/v1/tickers?access_key=${process.env.PARAMS}`

    const response = await axios.get(ticker_url)
    const tickerData = response.data['data']
    const stock_exchange = response.data['data']['stock_exchange']
    console.log("getAllData",tickerData[1]['stock_exchange'])
    
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
     
     // using the builtin 'create' function on StockTickerApiDb Model
     const stockApi = await StockTickerApiDb.bulkCreate(stock_ticker)
     
     // send a 200 response with the imported stock
     res.status(200).json(stockApi)
}

let getAllStockTickerPost = async (req, res) => {

    // using the builtin 'findAll' function on StockTickerApiDb Model
    let stockticker = await StockTickerApiDb.findAll({})
    res.status(200).send(stockticker)
}

const deleteAllStockPost = async (req, res) => {
    

    // using the builtin 'destroy' function on StockTickerApiDb Model
    await StockTickerApiDb.destroy({
        where: {},
        truncate: true
    })
    res.status(200).send(`All ETF have been deleted`)
}

module.exports = {
    addStockTickers,
    importAllTickers,
    getAllStockTickerPost,
    deleteAllStockPost
}

 // country: data["country"],