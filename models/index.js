// require the db configuration from the dbConfig file
var dbConfig = require('../config/dbConfig');

// require the sequelize Constructor and Datatypes from sequelize module
const {Sequelize, DataTypes} = require('sequelize');

// construct the sequelize object using the constructor
const sequelize = new Sequelize(
    {
        //use import configurations from dbConfig
        database: dbConfig.DB,
         database: dbConfig.DB,
        username: dbConfig.USER,
        password: dbConfig.PASSWORD,
        dialect: dbConfig.dialect,
        host: dbConfig.HOST,

    }
);

sequelize.authenticate()
    .then(() => {
        // successfully connected to DB
        console.log("Connected to Postgres DB")
    }).catch(err => {
        //failed connecting to DB
        console.log("Unable to connect to Postgres DB "+ err);
    })

const db= {}

//create an attribute storing the previously created sequelize instance
db.sequelize = sequelize;

db.StockApis = require('./stockApiModel')(sequelize, DataTypes);

db.StockTickers = require('./stockTickersModel')(sequelize, DataTypes)

// sync the db by running the model
// "force: false" ensures that the table is not created again every time the program runs
db.sequelize.sync({ force: true }).then(() => {
    console.log('DB synced with sequelize')
}).catch((error) => {
    console.log('Error syncing the DB to sequelize' + error)
})


module.exports = db;