require("dotenv").config();
const express = require("express");
const cors = require("cors")

const app = express();
const PORT = 3001;
const { initDatabaseConnection } = require("./database")
initDatabaseConnection()

// routes
const authorsRoutes = require("./routes/authors")
const postsRoutes = require("./routes/blogPosts")

const logger = require("./middlewares/logger")
// const login = require("./middlewares/validateUser")

// mw
app.use(express.json())
app.use(cors()); // cors
app.use("/", authorsRoutes)
app.use("/", postsRoutes)

// mw custom
app.use(logger)
// app.use("/", login)


app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`))