const Blog = require('../model/blogModel')
const { uploadToCloudinary } = require('../utils/cloudinary')
const mongoose = require('mongoose')

// Get all blogs
const getBlogs = async(req, res) => {
    try {
        const blog = await Blog.find({})
        res.status(200).json(blog)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Server error"})
    }
}

// Get single blog
const getSingleBlog = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Blog not found'})
    }

    const blog = await Blog.findById(id)

    if (!blog) {
        return res.status(404).json({error: 'Blog not found'})
    }

    res.status(200).json(blog)
}

// Add Blog
const setBlog = async (req, res) => {
    const { title, description, date, image } = req.body
    
    try {
        let imageData = {}
        if (image) {
            const results = await uploadToCloudinary(image, "blogs")
            imageData = results
        }

        const blog = await Blog.create({ title, description, date, image: imageData })
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Update an blog
const updateBlog = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Blog not found'})
    }

    const { title, image } = req.body

    const blog = await Blog.findOneAndUpdate({_id: id}, { title, image})

    if (!blog) {
        return res.status(400).json({error: 'Blog not found'})
    }

    res.status(200).json(blog)
}

// Delete an Blog
const deleteBlog = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Blog not found'})
    }

    const blog = await Blog.findOneAndDelete({_id: id})

    if(!blog) {
        return res.status(400).json({error: 'Blog not found'})
    }

    res.status(200).json(blog)
}

module.exports = {
    getSingleBlog,
    getBlogs,
    setBlog,
    updateBlog,
    deleteBlog,
}