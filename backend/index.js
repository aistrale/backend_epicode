const express = require('express');
require("dotenv").config();
const app = express();
const PORT = 3001;
const { initDatabaseConnection } = require('./db')

initDatabaseConnection()

// routes
const authorsRoutes = require("./routes/authors")
const postsRoutes = require("./routes/blogPosts")


// mw
app.use(express.json())
app.use("/", authorsRoutes)
app.use("/", postsRoutes)


app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`))