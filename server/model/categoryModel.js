const mongoose = require('mongoose')

const ocassionSchema = mongoose.Schema({
    title: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
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

module.exports = mongoose.model('Category', ocassionSchema)