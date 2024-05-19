const mongoose = require ('mongoose')

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    avatar: {
        type: String,
        required: false,
        default: "https://picsum.photos/200/300"
    }
}, {timestamps: true, strict: true})

module.exports=mongoose.model("authorsModel", AuthorsSchema, "authors")