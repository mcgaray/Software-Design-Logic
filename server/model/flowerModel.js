const mongoose = require('mongoose')

const ocassionSchema = mongoose.Schema({
    title: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ocassion: [{
        type: String,
    },],
    category: {
        type: String,
    },
    image: {
        publicId: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        }
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Flower', ocassionSchema)