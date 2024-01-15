const {response, request} = require('express')
const fs = require('fs')
const { pool } = require('../models/db')

const countryGet = async (req = request, res = response) => {
    try {
        const id = req.params.id

        const data = await pool.query('SELECT * FROM country WHERE id = $1', [id])

        res.json({
            msg: 'get country API - controller',
            id,
            data
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Something went wrong'
        })
    }
    
}

const allCountriesGet = async (req = request, res = response) => {
    try {
        const data = await pool.query('SELECT * FROM country')
        res.json({
            msg: 'get all countries API - controller',
            data
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Something went wrong'
        })
    }
}

const countrySetupGet = async (req = request, res = response) => {
        try {

           // get the sql query from the file countries.sql
            const sql = fs.readFileSync('countries.sql').toString()
            // console.log(sql)
            await pool.query(sql)
            res.json({
                msg: 'get country setup API - controller'
            })
        }catch (error) {
            console.log(error)
            res.status(500).json({
                msg: 'Something went wrong'
            })
        }
}

module.exports = {
    countryGet,
    countrySetupGet,
    allCountriesGet
}