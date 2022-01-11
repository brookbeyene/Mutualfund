const express = require('express')
const axios = require('axios')
const app = express();
const routers = require('./routes/stockApiRouter');
const tickerRouters = require('./routes/stockTickersRouter');

const port = process.env.PORT || 3000;
const params = { access_key: '54b1c1a5b9ea427c6d17888d33b619aa' }

app.use(express.json())
app.use('/stockapi', routers)
app.use('/stockticker', tickerRouters)


app.get('/', (req, res)=>{
    
    res.send("Hello world!")
})

app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
})

