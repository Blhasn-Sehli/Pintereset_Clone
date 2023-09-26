const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("mysql://root:root@localhost:3306/pinterest");




sequelize.authenticate()
    .then(() => console.log("connected to db "))
    .catch((err) => console.log(err));

const User = require("../models/user.model")(sequelize, DataTypes)








sequelize.sync({ alter: true })
    .then(() => console.log('tables are created'))
    .catch((err) => console.log(err));


const db = {}
db.sequelize = sequelize
module.exports = db; 