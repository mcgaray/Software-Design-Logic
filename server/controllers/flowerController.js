const Flower = require('../model/flowerModel')
const { uploadToCloudinary } = require('../utils/cloudinary')
const mongoose = require('mongoose')

// Get all flowers
const getFlowers = async(req, res) => {
    try {
        const flowers = await Flower.find({})
        res.status(200).json(flowers)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Server error"})
    }
}

// Get single flowers
const getSingleFlower = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Flower not found'})
    }

    const flowers = await Flower.findById(id)

    if (!flowers) {
        return res.status(404).json({error: 'Flower not found'})
    }

    res.status(200).json(flowers)
}

// Add Flower
const setFlower = async (req, res) => {
    const { title, price, description, ocassion, category, image } = req.body
    
    try {
        let imageData = {}
        if (image) {
            const results = await uploadToCloudinary(image, "flowers")
            imageData = results
        }

        const flowers = await Flower.create({ title, price, description, ocassion, category, image: imageData })
        res.status(200).json(flowers)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Update an flowers
const updateFlower = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Flower not found'})
    }

    const flowers = await Flower.findOneAndUpdate({_id: id}, { ...req.body })

    if (!flowers) {
        return res.status(400).json({error: 'Flower not found'})
    }

    res.status(200).json(flowers)
}

// Delete an Flower
const deleteFlower = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Flower not found'})
    }

    const flowers = await Flower.findOneAndDelete({_id: id})

    if(!flowers) {
        return res.status(400).json({error: 'Flower not found'})
    }

    res.status(200).json(flowers)
}

module.exports = {
    getSingleFlower,
    getFlowers,
    setFlower,
    updateFlower,
    deleteFlower,
}