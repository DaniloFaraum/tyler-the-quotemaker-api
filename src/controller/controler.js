const quotes = require('../model/DAO/quotes')

const controllerAllQuotes = () =>{
    return quotes
}

const controllerRandomQuote = () =>{
    quoteNumber = Math.round(Math.random()*Object.keys(quotes.quotes).length)
    return quotes.quotes[quoteNumber]
}

module.exports = {
    controllerAllQuotes,
    controllerRandomQuote
}