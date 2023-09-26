const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("mysql://root:root@localhost:3306/pinterest");




sequelize.authenticate()
    .then(() => console.log("connected to db "))
    .catch((err) => console.log(err));

const User = require("../models/user.model")(sequelize, DataTypes)
const Pin = require("../models/pin.model")(sequelize, DataTypes)
const Comment = require("../models/comment.model")(sequelize, DataTypes)



User.hasMany(Pin)
Pin.belongsTo(User)



User.hasMany(Comment)
Comment.belongsTo(User)

Pin.hasMany(Comment)
Comment.belongsTo(Pin)











// sequelize.sync({ alter: true, force: true })
//     .then(() => console.log('tables are created'))
//     .catch((err) => console.log(err));


const db = {}
db.User = User
db.Comment = Comment
db.Pin = Pin
db.sequelize = sequelize
module.exports = db; 