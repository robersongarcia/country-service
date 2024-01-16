const express = require('express')
require('dotenv').config()
const cors = require('cors')
const { pool } = require('../models/db')
// create a write stream (in append mode)
const morgan = require('morgan')
const fs = require('fs')


// setup the logger
class Server {
    
    constructor() {
        this.app = express()
        this.accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
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
        this.app.use(morgan('combined', {stream: this.accessLogStream}))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running at http://localhost:${this.port}`)
        })
    }
}

module.exports = Server