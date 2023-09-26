
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("comments", {
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Comment
}