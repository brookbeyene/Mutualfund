

module.exports = (sequelize, DataTypes) => {

    // Define a new model, representing a table in the database.
    // modelName is 'customer' (first argument of define function)
    // When synced, this will create a table name of "modelName" + "s", i.e. "customers"
    const StockApi = sequelize.define('stockApi', {
        id: { // the id will be our primary key for accessing customer data
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: true,
            primaryKey: true
        },
        open: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        high: {
            type: DataTypes.STRING,
            allowNull: true
        },
        low: {
            type: DataTypes.STRING,
            allowNull: true
        },
        close: {
            type: DataTypes.STRING,
            allowNull: true
        },
        volume: {
            type: DataTypes.STRING,
            allowNull: true
        },
        adj_high: {
            type: DataTypes.STRING,
            allowNull: true
        },
        adj_low: {
            type: DataTypes.STRING,
            allowNull: true
        },
        adj_close:{
            type: DataTypes.STRING,
            allowNull: true
        },
        adj_open: {
            type: DataTypes.STRING,
            allowNull: true
        },
        adj_volume: {
            type: DataTypes.STRING,
            allowNull: true
        },
        split_factor: {
            type: DataTypes.STRING,
            allowNull: true
        },
        dividend: {
            type: DataTypes.STRING,
            allowNull: true
        },
        symbol:{
            type: DataTypes.STRING,
            allowNull: true
        },
        exchange: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date: {
            type: DataTypes.STRING,
            allowNull: true
        },
    })

    return StockApi
}
