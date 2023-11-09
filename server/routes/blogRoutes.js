const express = require('express')
const router = express.Router()
const { getSingleBlog,
        getBlogs, 
        setBlog, 
        updateBlog, 
        deleteBlog} = require('../controllers/blogController')

router.get('/', getBlogs)
router.get('/:id', getSingleBlog)
router.post('/', setBlog)
router.patch('/:id', updateBlog)
router.delete('/:id', deleteBlog)

module.exports = router