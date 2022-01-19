// the router file contains all the routes that can be accessed
const stockTickersController = require('../../controllers/stock/stockTickersController.js')

// create a Router object from express
const tickerRouters = require('express').Router();


tickerRouters.post('/add', stockTickersController.addStockTickers)
tickerRouters.get('/import', stockTickersController.importAllTickers)
tickerRouters.get('/all', stockTickersController.getAllStockTickerPost)
tickerRouters.delete('/delete/all', stockTickersController.deleteAllStockPost)


module.exports = tickerRouters

