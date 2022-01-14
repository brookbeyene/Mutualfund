module.exports = (sequelize, DataTypes) =>{
    const StockProfile = sequelize.define("StockProfile",{
         id: { // the id will be our primary key for accessing customer data
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        userId:{
            type: DataType.STRING,
            allowNull: false
        }
    });    
    return StockProfile;
}