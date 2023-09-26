const express = require("express")
const userRouter = require("./user.router")
const pinRouter = require("./pin.router")
const comentRouter = require("./coment.router")
const router = express.Router()

router.use("/users/", userRouter);
router.use("/pins/", pinRouter);
router.use("/comments/", comentRouter);


module.exports = router
