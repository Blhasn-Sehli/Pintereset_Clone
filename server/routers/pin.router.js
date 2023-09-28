const express = require("express")
const pinRouter = express.Router()

const { getAll, createPin, updatePin, getOne, getBytitle } = require("../controllers/pin.controller");





pinRouter.get("/getAll", getAll);
pinRouter.get("/by/:title", getBytitle);
pinRouter.get("/:id", getOne);
pinRouter.post("/add", createPin);
pinRouter.put("/:idPin", updatePin);




module.exports = pinRouter