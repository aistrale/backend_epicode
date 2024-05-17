const mongoose = require('mongoose')

const initDatabaseConnection = () => {
    try {
        mongoose.connect(process.env.DB_URL)
        const db = mongoose.connection

        db.on("error", console.error.bind(console, "Database connection error"))
        db.once("open", () => {
            console.log("Connected to database")
        })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports={initDatabaseConnection}