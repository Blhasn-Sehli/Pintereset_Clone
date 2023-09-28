const express = require("express")
const comentRouter = express.Router()


const { getAll, createComment, updateComment } = require("../controllers/comment.controller");

comentRouter.get("/getAll", getAll);
comentRouter.post("/add", createComment);
// comentRouter.get("/:pinId", getCommentsBypost);
comentRouter.put("/:id", updateComment);







module.exports = comentRouter