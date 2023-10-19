const express = require('express')
const cors = require('cors')
const router = express.Router()
const app = express()
const jsonParser = express.json()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET')
    app.use(cors())
    next()
})

router.get('/all', cors(), (req, res, next) =>{
    const { controllerAllQuotes } = require('./controller/controler')

    res.status(200).json({
        response: controllerAllQuotes()
    })
})

router.get('/random', cors(), (req, res, next) =>{
    const { controllerRandomQuote } = require('./controller/controler')

    res.status(200).json({
        response: controllerRandomQuote()
    })
})

app.use('/.netlify/functions/api', router)

module.exports = app