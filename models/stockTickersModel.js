const { StockTickers } = require(".")

module.exports = (sequelize, DataTypes) => {

    // Define a new model, representing a table in the database.
    // modelName is 'customer' (first argument of define function)
    // When synced, this will create a table name of "modelName" + "s", i.e. "customers"
    const StockTickers = sequelize.define('stockTicker', {
        id: { // the id will be our primary key for accessing customer data
            type: DataTypes.BIGINT(15),
            autoIncrement: true,
            allowNull: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        symbol:{
            type: DataTypes.STRING,
            allowNull: true
        },
        has_intraday:{
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        has_eod: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        // country: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
        
        stock_exchange_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        stock_exchange_acronym: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        stock_exchange_mic:  {
            type: DataTypes.STRING,
            allowNull: true
        },
        stock_exchange_country:  {
            type: DataTypes.STRING,
            allowNull: true
        },
       stock_exchange_country_code:  {
            type: DataTypes.STRING,
            allowNull: true
        },
        stock_exchange_city: {
            type: DataTypes.STRING,
            allowNull: true
        },
        stock_exchange_website:  {
            type: DataTypes.STRING,
            allowNull: true
        },
    })

    return StockTickers
}


