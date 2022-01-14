
module.exports = (sequelize, DataTypes) =>{
    const Etfrecord = sequelize.define("etfrecord",{
        id: { // the id will be our primary key for accessing customer data
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        userId:{
            type: DataTypes.STRING,
            allowNull: false
        },
        symbol:{
            type: DataTypes.STRING,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        price:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        changesPercentage:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        change:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        dayLow:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        dayHigh:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        yearHigh:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        marketCap:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        priceAvg50:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        priceAvg200:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        volume:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        avgVolume:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        exchange:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        open:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        previousClose:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        eps:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        pe:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        earningsAnnouncement:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        sharesOutstanding:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        timestamp:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        etfId:{
            type: DataTypes.INTEGER,
            allowNull: false

        }

    });
    return Etfrecord;
}


// symbol: "INDA",
// name: "iShares MSCI India ETF",
// price: 48.3,
// changesPercentage: -0.41237268,
// change: -0.20000076,
// dayLow: 48.27,
// dayHigh: 48.54,
// yearHigh: 50.85,
// yearLow: 38.99,
// marketCap: null,
// priceAvg50: 47.608,
// priceAvg200: 45.9966,
// volume: 3043086,
// avgVolume: 3320719,
// exchange: "ETF",
// open: 48.43,
// previousClose: 48.16,
// eps: null,
// pe: null,
// earningsAnnouncement: null,
// sharesOutstanding: null,
// timestamp: 1642131045