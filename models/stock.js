
module.exports = (sequelize, DataTypes) =>{
    const Stock = sequelize.define("stock",{
        id: { // the id will be our primary key for accessing customer data
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: true,
            primaryKey: true
        },
        symbol:{
            type: DataTypes.STRING,
            allowNull: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: true,
        },

    });
  

    return Stock;
}



// {
// id: "1",
// name: "Microsoft Corporation",
// symbol: "MSFT",
// has_intraday: false,
// has_eod: true,
// stock_exchange_name: "NASDAQ Stock Exchange",
// stock_exchange_acronym: "NASDAQ",
// stock_exchange_mic: "XNAS",
// stock_exchange_country: "USA",
// stock_exchange_country_code: "US",
// stock_exchange_city: "New York",
// stock_exchange_website: "www.nasdaq.com",
// createdAt: "2022-01-12T03:42:27.711Z",
// updatedAt: "2022-01-12T03:42:27.711Z"
// },