// the router file contains all the routes that can be accessed
const stockTickersController = require('../../controllers/stock/stockTickersController.js')

// create a Router object from express
const tickerRouters = require('express').Router();

//add a new stock api to the table
tickerRouters.post('/', stockTickersController.addStockTickers)
//add a new stock api to the table
tickerRouters.get('/', stockTickersController.importAllTickers)
// router.get('/import/:userid/:', stockApiController.getOneimportApi)
// router.post('/import/:userid/:theday/:thesymbol', stockApiController.addImportApi)

// // access all the stock api in the talbe
tickerRouters.get('/all', stockTickersController.getAllStockTickerPost)
tickerRouters.delete('/delete/all', stockTickersController.deleteAllStockPost)

// // access one stock api by id
// router.get('/:id', stockApiController.getOneStockApi)

// // modify one stock api by id
// router.put('/:id', stockApiController.updateStockApi)

// // delete one stock apit by id
// router.delete('/:id', stockApiController.deleteStockApi)
// router.delete('/:id', stockApiController.deleteStockApi)

module.exports = tickerRouters

