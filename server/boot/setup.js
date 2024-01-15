const express = require('express')

const app = express()
const PORT = 8080

// custom middleware
const cors = require('cors')
const session = require('express-session')

// Routes
const authRoutes = require('../routes/auth.routes');

// mysql connection
try {
    // string connection to mysql
} catch (error) {
    // log an error
}

// middleware
const registerCoreMiddleware = async () => {
    try {
        app.use(cors)
        app.use(express.json())
    } catch (error) {

    }

}

// start application
const startApp = async () => {
    app.listen(PORT, () => {
        // code here
    })
}

module.exports = { startApp }