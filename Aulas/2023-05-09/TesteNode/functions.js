var cambioReal = require ("./values.js")

var realValor = cambioReal.real
var dollarValor = cambioReal.dollar
var euroValor = cambioReal.euro
var ieneValor = cambioReal.iene

function calcDollar(realValor, dollarValor){
    return (realValor / dollarValor)
}

function calcEuro(realValor, euroValor){
    return (realValor / euroValor)
}

function calcIene(realValor, ieneValor){
    return (realValor / ieneValor)
}

module.exports = {
    calcDollar,
    calcEuro,
    calcIene
}