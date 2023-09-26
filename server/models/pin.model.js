

module.exports = (sequelize, DataTypes) => {
    const Pin = sequelize.define("pins", {
        pinImage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        destinationLink: {
            type: DataTypes.STRING,
        },
        numberOfLikes: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        }
    });
    return Pin
}