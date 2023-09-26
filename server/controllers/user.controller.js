const { User } = require("../database-mysql/index")


module.exports = {

    getAll: async (req, res) => {
        try {
            const allusers = await User.findAll()
            res.status(200).send(allusers)
        } catch (error) {
            res.status(404).json(error)
        }
    },
    createUser: async (req, res) => {
        try {
            const oneUser = await User.create(req.body)
            res.status(201).send(oneUser)

        } catch (error) {
            
            res.status(404).json(error)
        }
    }






}