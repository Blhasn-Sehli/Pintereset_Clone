const express = require("express");
const app = express()
const PORT = process.env.PORT || 3000
require("./database-mysql/index")
const router = require("./routers/index")



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/", router)




app.listen(PORT, function () {
    console.log("listening on port 3000!");
});