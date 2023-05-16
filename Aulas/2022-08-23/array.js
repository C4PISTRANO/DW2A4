/*var array = [1, true, null, undefined, 'texto']
array.forEach(elem => console.log(typeof elem))*/

/*var numbers = [1, 2, 3, 4 ,5, 6]
let num = numbers.map(num => num) //retorna um vetor com s valores
let num2 = numbers.forEach(num => num) //retorna undefined
console.log(num, num2)*/


/*//encontrar números pares
var numbers = [1, 2, 3, 4 ,5, 6] //vetor
let pair = numbers.filter(num => num % 2 === 0) //filtra utilizando a função passada
let two = numbers.find(num => pair === 2) //encontrar um elemento 
//console.log(pair) //retorna um vetor
console.log(two)*/

var numbers = [1, 2, 3, 4 ,5, 6]
let sum = numbers.reduce(
    (preValue, curValue) => preValue + curValue
)
console.log(sum)


