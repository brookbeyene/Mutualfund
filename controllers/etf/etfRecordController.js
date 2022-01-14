const db = require('../../models/index')
const axios = require('axios')
require('dotenv/config')

const EtfRecord = db.EtfRecord
let ETF = db.Etf

let loadEtfRecordPost = async (req, res) => {
    const url = `https://financialmodelingprep.com/api/v3/quote/${req.body.symbol}?apikey=${process.env.ETFPRAMS}`

    const response = await axios.get(url)
    const etfRecord = response.data
    const userId = req.body.userId

    let result = await ETF.findOne({
        where: {symbol: req.body.symbol}
    })
    const etfId = result['id']

    let etfRecords=[];
    etfRecord.forEach(item =>{
        let input_etfRecord = {
             userId:userId,
             symbol:item['symbol'],
             name:item['name'],
             price:item['price'],
             changesPercentage:item['changesPercentage'],
             change:item['change'],
             dayLow:item['dayLow'],
             dayHigh:item['dayHigh'],
             yearHigh:item['yearHigh'],
             marketCap:item['marketCap'],
             priceAvg50:item['priceAvg50'],
             priceAvg200:item['priceAvg200'],
             volume:item['volume'],
             avgVolume:item['avgVolume'],
             exchange:item['exchange'],
             open:item['open'],
             previousClose: item['previousClose'],
             eps:item['eps'],
             pe:item['pe'],
             earningsAnnouncement:item['earningsAnnouncement'],
             sharesOutstanding:item['sharesOutstanding'],
             timestamp:item['timestamp'],
             etfId: etfId
             
        }
        console.log("all names", item['name'])
        etfRecords.push(input_etfRecord)
    })
    const EtfRecordFromApi = await EtfRecord.bulkCreate(etfRecords)

    res.status(200).json(EtfRecordFromApi)
}

let getAllEtfRecordPost = async (req, res) => {

    // using the builtin 'findAll' function on StockApi Model
    let etfRecord = await EtfRecord.findAll({})
    res.status(200).send(etfRecord)
}
let getOneEtfRecordPost = async (req, res) => {
    let id = req.body.id
    let singleStock = await Stock.findOne({where: {id: id}})
    res.status(200).json(singleStock)
}
let deleteAllEtRecordfPost = async (req, res) =>{

    await EtfRecord.destroy({
        where: {},
        truncate: true
    })
    res.status(200).send("Everything is deleted")
}

module.exports = {
    loadEtfRecordPost,
    getAllEtfRecordPost,
    getOneEtfRecordPost,
    deleteAllEtRecordfPost
}