const express = require("express")
const AuthorsModel = require("../models/modelAuthors")
const authors = express.Router()

// mw validateUser
// const validateUser = require("../middlewares/validateUser")

const validateBody = require("../middlewares/validateUser1")

authors.get("/authors", async (req, res) => {
    try {
        const authors = await AuthorsModel.find()
        res.status(200).send(authors)
    } catch (error) {
        res.status(500).send({statusCode:500, message: "error", error: error.message})
    }
})

authors.get("/author/:authorId", async (req, res) => {
    const { authorId } = req.params

    try {
        const author = await AuthorsModel.findById(authorId)
        if(!author) {
            return res.status(404).send({
                message: "author not found"
            })
        }
        res.status(200).send(author)
    } catch (error) {
        res.status(500).send({statusCode:500, message: "error", error: error.message})
    }
})

authors.post("/authors", validateBody, async (req, res) => {
    const newUser = new AuthorsModel({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        dateOfBirth: new Date(req.body.dateOfBirth),
        avatar: req.body.avatar
    })

    try {
        const author = await newUser.save()
        res.status(201).send(author)
    } catch (error) {
        res.status(500).send({statusCode:500, message: "error", error: error.message})
    }
})

authors.patch("/author/:authorId", async (req, res) => {
    const { authorId } = req.params

    try {
        const author = await AuthorsModel.findById(authorId)

        if(!author) {
            return res.status(404).send({
                message: "author not found"
            })
        }
        const updatedUser = req.body
        const result = await AuthorsModel.findByIdAndUpdate(authorId, updatedUser, {new: true})
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({statusCode:500, message: "error", error: error.message})
    }
})

authors.delete("/author/:authorId", async (req, res) => {
    const { authorId } = req.params

    try {
        const author = await AuthorsModel.findByIdAndDelete(authorId)
        
        if(!author) {
            return res.status(404).send({
                message: "author not found"
            })
        }
        res.status(200).send({message: "user deleted successfully"})
    } catch (error) {
        res.status(500).send({statusCode:500, message: "error", error: error.message})
    }

})

module.exports= authors