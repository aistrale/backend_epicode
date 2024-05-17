const express = require("express")
const BlogPostModel = require("../models/modelBlogPost")
const posts = express.Router()

posts.get("/posts", async (req, res) => {
    // pagination
    const { page=1, pageSize=3 } = req.query
    const totalPosts = await BlogPostModel.countDocuments()
    const totalPages = Math.ceil(totalPosts / pageSize)

    try {
        const posts = await BlogPostModel.find().limit(pageSize).skip((page -1)* pageSize)
        res.status(200).send({
            page: +page,
            pageSize: +pageSize,
            totalPages,
            posts 
        })
    } catch (error) {
        res.status(500).send({statusCode:500, message: "error", error: error.message})
    }
})

posts.post("/posts", async (req, res) => {
    const newPost = new BlogPostModel({
        category: req.body.category,
        title: req.body.title,
        cover: req.body.cover,
        readTime: {
            value: Number(req.body.readTime.value),
            unit: req.body.readTime.unit,
        },
        author: req.body.author,
        content: req.body.content,
    })

    try {
        const post = await newPost.save()
        res.status(201).send(post)
    } catch (error) {
        res.status(500).send({statusCode:500, message: "error", error: error.message})
    }
})


posts.get("/posts/:postId", async (req, res) => {
    const { postId } = req.params

    try {
        const post = await BlogPostModel.findById(postId)
        if(!post) {
            return res.status(404).send({
                message: "post not found"
            })
        }
        res.status(200).send(post)
    } catch (error) {
        res.status(500).send({statusCode:500, message: "error", error: error.message})
    }
})


module.exports = posts