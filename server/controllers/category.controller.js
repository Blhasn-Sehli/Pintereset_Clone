const { Category, Pin, Comment } = require("../database-mysql/index")


module.exports = {

    getAll: async (req, res) => {
        try {
            const allcategories = await Category.findAll({
                include: {
                    model: Pin,

                    include: {
                        model: Comment
                    }

                }
            })
            res.status(200).json(allcategories)
        } catch (error) {
            res.json(error)
        }
    },
    getOne: async (req, res) => {
        try {
            const all = await Category.findOne({
                include: {
                    all: true,
                    nested: true
                },
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json(all)
        } catch (error) {
            res.json(error)
        }
    },
    createCategory: async (req, res) => {
        try {
            const oneCategory = await Category.create(req.body)
            res.status(201).json(oneCategory)

        } catch (error) {
            res.json(error)
        }
    }







}