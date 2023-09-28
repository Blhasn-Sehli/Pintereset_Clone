const { Op } = require("sequelize");
const { Pin, Comment, User } = require("../database-mysql/index")

module.exports = {
    getAll: async (req, res) => {
        try {
            const allPins = await Pin.findAll({
                include: {
                    all: true
                }
            })

            let chunkSize = allPins.length / 5;
            let chunks = Array.from({ length: Math.ceil(allPins.length / chunkSize) }, (_, i) =>
                allPins.slice(i * chunkSize, i * chunkSize + chunkSize)
            );
            chunks = chunks.sort(() => Math.random() - 0.5)
            res.status(200).send(chunks)
        } catch (error) {
            res.json(error)
        }
    },
    getOne: async (req, res) => {
        try {

            const onePin = await Pin.findOne({ include: { all: true, nested: true }, where: { id: req.params.id } })
            res.status(200).send(onePin)
        } catch (error) {
            res.json(error)
        }
    },
    createPin: async (req, res) => {
        try {
            const onePin = await Pin.create(req.body)
            res.status(201).send(onePin)
        } catch (error) {
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
    },
    getBytitle: async (req, res) => {
        try {
            console.log(req.params.title);
            const allPins = await Pin.findAll({
                where: {
                    title: {
                        [Op.like]: `%${req.params.title}%`
                        // [Op.like]: req.params.title

                    }
                }
            })
            let chunkSize = allPins.length / 5;
            let chunks = Array.from({ length: Math.ceil(allPins.length / chunkSize) }, (_, i) =>
                allPins.slice(i * chunkSize, i * chunkSize + chunkSize)
            );
            chunks = chunks.sort(() => Math.random() - 0.5)
            res.status(200).send(chunks)
        } catch (error) {
            res.json(error)

        }
    }















}