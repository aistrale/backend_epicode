const express = require('express');
require("dotenv").config();
const app = express();
const PORT = 3001;
const { initDatabaseConnection } = require('./db')

initDatabaseConnection()
// routes
const authorsRoutes = require("./routes")

// mw
app.use(express.json())

app.use("/", authorsRoutes)


app.listen(PORT, () => console.log(`server up and running on port ${PORT}`))