const mongoose = require('mongoose')

const initDatabaseConnection = () => {
    try {
        mongoose.connect(process.env.DB_URL)
        const db = mongoose.connection

        db.on("error", console.error.bind(console, "db connection error"))
        db.once("open", () => {
            console.log("connected to db")
        })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports={initDatabaseConnection}