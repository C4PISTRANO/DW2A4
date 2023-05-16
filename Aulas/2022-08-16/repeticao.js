// // Condição no fim
// var i = 0
// do {
//   console.log(i++)
//   // console.log(++i)
// } while (i < 5)

// // Condição no final
// var i = 0
// while (i < 5) {
//   i += 1
//   console.log(i)
// }

// //for
// for (var passo = 1; passo <= 5; passo++) {
//   console.log(`${passo} `)
// }

// // for ... in itera sobre as propriedade/índice
// var obj = { a: 1, b: 2, c: 3 }
// for (var prop in obj) {
//   console.log('obj.' + prop + ' = ' + obj[prop])
// }

// // for ... of
// let arr = [3, 5, 7]

// // depois trocar para in
// for (var i of arr) {
//   console.log(i)
// }

// label, break e continue
var i = 0
labelCancel: while (true) {
  i += 1
  if (i == 3) continue labelCancel
  if (i > 5) break labelCancel
  console.log(i)
}