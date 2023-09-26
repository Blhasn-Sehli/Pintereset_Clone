const express = require("express")
const userRouter = express.Router()

const { createUser, getAll } = require("../controllers/user.controller")


userRouter.get("/getAll", getAll)
userRouter.post("/add", createUser)


module.exports = userRouter;
