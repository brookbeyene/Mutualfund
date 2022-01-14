const db = require('../../models/index')
const axios = require('axios')
require('dotenv/config')

const ETF = db.Etf

let loadEtfPost = async (req, res) => {
    const url = `https://financialmodelingprep.com/api/v3/symbol/available-etfs?apikey=${process.env.ETFPRAMS}`

    const response = await axios.get(url)
    const etf = response.data
    console.log("this is the response",etf)
    let etf_ticker=[];
    etf.forEach(item =>{
        let input_etf = {
            database: item["database"],
            symbol: item['symbol'],
            name: item['name'],
            currency: item["currency"],
            stockExchange: item['stockExchange'],
            exchangeShortName: item['exchangeShortName']
        }
        console.log("all names", item['name'])
        etf_ticker.push(input_etf)
    })
    const EtfTickersFromApi = await ETF.bulkCreate(etf_ticker)

    res.status(200).json(EtfTickersFromApi)
}

let getAllEtfPost = async (req, res) => {

    // using the builtin 'findAll' function on StockApi Model
    let etf = await ETF.findAll({
        include: db.EtfRecord
        
    })
    res.status(200).send(etf)
}

let getOneEtfPost = async (req, res) => {
    let id = req.body.id
    let singleStock = await Stock.findOne({where: {id: id}, include: db.EtfRecord})
    res.status(200).json(singleStock)
}

const deleteEtfPost = async (req, res) => {
    let id = req.params.id

    // using the builtin 'destroy' function on StockApi Model
    await ETF.destroy({where :{id: id}})
    res.status(200).send(`stockApi with id: ${id} is deleted`)
}
const deleteAllEtfPost = async (req, res) => {
    

    // using the builtin 'destroy' function on StockApi Model
    await ETF.destroy({
        where: {},
        truncate: true
    })
    res.status(200).send(`All ETF have been deleted`)
}

module.exports = {
    loadEtfPost,
    getAllEtfPost,
    getOneEtfPost,
    deleteEtfPost,
    deleteAllEtfPost
}