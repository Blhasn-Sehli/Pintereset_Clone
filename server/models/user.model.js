

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        name: {

            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return User;
}