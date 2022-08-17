// Condição IF e ELSE
var greeting
var time = new Date().getHours()
if (time <= 12) {
  greeting = 'Bom dia'
} else if (time < 18) {
  greeting = 'Boa Tarde'
} else {
  greeting = 'Boa Noite'
}
console.log(greeting)

//Switching
let day
switch (new Date().getDay()) {
  case 0:
    day = 'Domingo'
    break
  case 1:
    day = 'Segunda'
    break
  case 2:
    day = 'Terça'
    break
  case 3:
    day = 'Quarta'
    break
  case 4:
    day = 'Quinta'
    break
  case 5:
    day = 'Sexta'
    break
  case 6:
    day = 'Sábado'
  default:
    day = 'Dia errado'
}
console.log(day)