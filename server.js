const express = require('express')
const axios = require('axios')
const app = express();
const db = require('./models');
app.use(express.json())
const port = process.env.PORT || 3000;

const routers = require('./routes/stockApiRouter');
const tickerRouters = require('./routes/stockTickersRouter');

const stockRouters = require('./routes/stock-routes');
const stockProfile = require('./routes/stockProfile-routes');
const stockRecordRouters = require('./routes/stockRecord-routes');


//adding in session requirement
app.use(express.urlencoded({extended: true}));
var session = require('express-session');
app.use(session({
    secret: 'random string',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
//Routes with UserID
app.use("/api/stocks", stockRouters)
app.use('/api/stockprofile', stockProfile)
app.use('/api/stockrecords', stockRecordRouters)

//Routes without
app.use('/stockapi', routers)
app.use('/stockticker', tickerRouters)


app.get('/', (req, res)=>{
    
    res.send("Hello world!")
})

app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
})



