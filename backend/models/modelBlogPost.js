const mongoose = require ("mongoose")

const ModelBlogPost = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
        required: false,
        default: "https://picsum.photos/200/300"
    },
    readTime: {
        value: {
            type: Number,
            required: false,
            default: 0
        },
        unit: {
            type: String,
            required: false,
            default: "minutes"
        },
    },
    author: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
}, {timestamps: true, strict: true})

module.exports=mongoose.model("postsModel", ModelBlogPost, "blogPosts")