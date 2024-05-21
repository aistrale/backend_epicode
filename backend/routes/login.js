const express = require("express")
const AuthorsModel = require("../models/modelAuthors")
const login = express.Router()

login.post("/login", async (req, res) => {
    const user = await AuthorsModel.findOne({email: req.body.email})
    
    // utente esiste?
    if(!user) {
        return res.status(404).send({
            message: "user doesn't exist"
        })
    }

    if(req.body.lastName !== user.lastName) {
        return res.status(404).send({
            message: "last name not valid"
        })
    }

    res.status(200).send({message: "access ok"})
})


module.exports = login