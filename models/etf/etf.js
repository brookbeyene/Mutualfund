
module.exports = (sequelize, DataTypes) =>{
    const Etf = sequelize.define("etf",{
        id: { // the id will be our primary key for accessing customer data
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        symbol:{
            type: DataTypes.STRING,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        currency:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        stockExchange:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        exchangeShortName:{
            type: DataTypes.STRING,
            allowNull: true,
        },

    });
    return Etf;
}
