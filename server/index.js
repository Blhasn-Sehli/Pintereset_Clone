const express = require("express");
const app = express()
const PORT = process.env.PORT || 3000
require("./database-mysql/index")
const router = require("./routers/index")
const cors=require("cors")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/", router)




app.listen(PORT, function () {
    console.log("listening on port 3000!");
});