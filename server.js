const express = require('express')
const axios = require('axios')
const app = express();
const db = require('./models');
app.use(express.json())
const port = process.env.PORT || 3000;

//adding in session requirement
app.use(express.urlencoded({extended: true}));
var session = require('express-session');
app.use(session({
    secret: 'random string',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))


//STOCK
const routers = require('./routes/stock/stockApiRouter');
const tickerRouters = require('./routes/stock/stockTickersRouter');
const stockRouters = require('./routes/stock/stock-routes');
const stockProfile = require('./routes/stock/stockProfile-routes');
const stockRecordRouters = require('./routes/stock/stockRecord-routes');

//ETF
const etf = require('./routes/etf/etf-router');
const etfRecord = require('./routes/etf/etfRecord');
// const etfApi = require('./routes/etf/etfApi');
// const etfTickers = require('./routes/etf/etfTickers');


// STOCK USE
//Routes with UserID
app.use("/api/stocks", stockRouters)
app.use('/api/stockprofile', stockProfile)
app.use('/api/stockrecords', stockRecordRouters)

//Routes without
app.use('/stockapi', routers)
app.use('/stockticker', tickerRouters)


// ETF USE
app.use('/etf/etf', etf)
app.use('/etf/record', etfRecord)
// app.use('/etf/api', etfApi)
// app.use('/etf/tickers', etfTickers)



app.get('/', (req, res)=>{
    
    res.send("Hello world!")
})

app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
})



