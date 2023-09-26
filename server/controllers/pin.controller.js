const { Pin } = require("../database-mysql/index")

module.exports = {

    getAll: async (req, res) => {
        try {
            const allPins = await Pin.findAll()
            res.status(200).send(allPins)
        } catch (error) {
            res.json(error)
        }
    },
    createPin: async (req, res) => {
        try {
            const onePin = await Pin.create(req.body)
            res.status(201).send(onePin)
        } catch (error) {
            throw error
            res.json(error)
        }
    },
    updatePin: async (req, res) => {
        try {
            const updated = await Pin.update(req.body, { where: { id: req.params.idPin } })
            res.status(202).send(updated)
        } catch (error) {
            res.json(error)
        }
    }














}