const express = require("express")
const pinRouter = express.Router()

const { getAll, createPin, updatePin } = require("../controllers/pin.controller");





pinRouter.get("/getAll", getAll);
pinRouter.post("/add", createPin);
pinRouter.put("/:idPin", updatePin);




module.exports = pinRouter