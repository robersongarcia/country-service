const { Pool } = require('pg')
const os = require('os')
const hostname = os.hostname()

const pool = new Pool({
    host: hostname,
    port: 5432,
    user: 'user123',
    password: 'password123',
    database: 'db123'
})

module.exports = {
    pool
}