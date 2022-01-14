
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
