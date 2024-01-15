const express = require('express')
require('dotenv').config()
const cors = require('cors')
const { pool } = require('../models/db')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.countryPath = '/api/country'
        this.middlewares()
        this.routes()
    }

    routes() {
       this.app.use(this.countryPath, require('../routes/country'))
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running at http://localhost:${this.port}`)
        })
    }
}

module.exports = Server