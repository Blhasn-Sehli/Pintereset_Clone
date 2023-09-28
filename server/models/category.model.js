
module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define("categories", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    return Category
}