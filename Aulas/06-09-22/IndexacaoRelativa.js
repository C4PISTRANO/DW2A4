const myColors = ['red','blue','green']
const lastColor = myColors[myColors.length - 2]
console.log(lastColor)

// a partir do ECMAScript 2022
const lastColor2 = myColors.at(-1)
const firstColor = myColors.at(0)
console.log(lastColor2)
console.log(firstColor)