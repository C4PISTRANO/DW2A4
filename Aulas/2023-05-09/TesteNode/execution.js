var cambio = require ("./functions.js")
var cambioValor = require ("./values.js")

var cambioDollar = cambio.calcDollar(cambioValor.real, cambioValor.dollar)
var cambioEuro = cambio.calcEuro(cambioValor.real, cambioValor.euro)
var cambioIene = cambio.calcIene(cambioValor.real, cambioValor.iene)

console.log(cambioValor.real.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " valem " + cambioDollar.toLocaleString('eng', { style: 'currency', currency: 'USD' }))
console.log(cambioEuro)
console.log(cambioIene)