const express = require("express")
const categoryRouter = express.Router()


const { createCategory, getAll,getOne } = require("../controllers/category.controller")


categoryRouter.get("/getAll", getAll)
categoryRouter.get("/:id", getOne)
categoryRouter.post("/add", createCategory)










module.exports = categoryRouter;