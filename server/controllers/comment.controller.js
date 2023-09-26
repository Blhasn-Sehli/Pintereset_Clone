const { Comment } = require("../database-mysql/index");


module.exports = {

    getAll: async (req, res) => {
        try {
            const allComments = await Comment.findAll()
            res.status(200).json(allComments)
        } catch (error) {
            res.json(error)
        }
    },
    // getOne: async (req, res) => {
    //     try {
    //         const oneComment = await Comment.findAll({ where: { id: req.params.id } })
    //         res.status(200).json(oneComment)

    //     } catch (error) {
    //         res.json(error)
    //     }
    // },
    updateComment: async (req, res) => {
        try {
            const updated = await Comment.update(req.body, { where: { id: req.params.id } })
            res.status(202).json(updated)
        } catch (error) {
            res.json(error)
        }
    },
    createComment: async (req, res) => {
        try {
            const oneComment = await Comment.create(req.body)
            res.status(201).json(oneComment)

        } catch (error) {
            res.json(error)
        }
    }
    ,
    getCommentsBypost: async (req, res) => {
        try {
            const allCommentsbyPin = await Comment.findAll({ where: { pinId: req.params.pinId } })
            res.status(200).json(allCommentsbyPin)
        } catch (error) {
            res.json(error)
        }
    }







}