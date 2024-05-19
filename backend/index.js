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

// cors
app.use(cors());

// mw
app.use(express.json())
app.use("/", authorsRoutes)
app.use("/", postsRoutes)


app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`))