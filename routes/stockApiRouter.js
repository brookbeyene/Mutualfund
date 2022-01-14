// the router file contains all the routes that can be accessed
const stockApiController = require('../controllers/stockApiController.js')

// create a Router object from express
const router = require('express').Router();

//add a new stock api to the table
router.get('/:thesymbol', stockApiController.addStockApi2)
router.get('/:thesymbol/:theday', stockApiController.addStockApi)
router.get('/:thesymbol/:theday1/:theday2', stockApiController.addStockApi3)
//add a new stock api to the table
// router.get('/import/:userid/:theday/:thesymbol', stockApiController.importApi)
// // router.get('/import/:userid/:', stockApiController.getOneimportApi)
// router.post('/import/:userid/:theday/:thesymbol', stockApiController.addImportApi)

// access all the stock api in the talbe
router.get('/', stockApiController.getAllStockApis)

// access one stock api by id
router.get('/:id', stockApiController.getOneStockApi)

// access one stock api by id
// router.get('/singleTicker/:symbol', stockApiController.getOneStockTicker)

// modify one stock api by id
router.put('/:id', stockApiController.updateStockApi)

// delete one stock apit by id
router.delete('/:id', stockApiController.deleteStockApi)

module.exports = router

