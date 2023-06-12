const { Cast } = require('../models')

const getCasts = async (req,res) => {
    try {
    const casts = await Cast.find({})
    return res.json(casts)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getCastById = async (req,res) => {
    try{
        const { id } = req.params
        const cast = await Cast.findById(id)
        if (cast) {
            res.json(cast)
        } else {
        return res.status(404).send('Cast member with the specified ID does not exist')
        }
    }catch (e) {
        console.log(e)
        return res.status(500).send(e.message)
    }
}

const createCast = async (req,res) => {
    try{
        const { name, credits, title, img } = req.body
        const cast = await Cast.create({ name, credits, title, img })
        res.status(201).json(cast)
    }catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const updateCast = async (req,res) => {
    try{
        let { id } = req.params
        let cast = await Cast.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )
        if (!cast) {
            return res.status(404).json({ message: 'Cast member not found' })
        }
        return res.status(200).json(cast)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const deleteCast = async (req, res) => {
    try {
        const { id } = req.params
        const cast = await Cast.findByIdAndDelete(id)
        if (!cast) {
            return res.status(404).json({ message: 'Cast member not found' })
        }
        return res.status(200).send("Cast member deleted successfully")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}



module.exports = {
    getCasts,
    getCastById,
    createCast,
    updateCast,
    deleteCast
}