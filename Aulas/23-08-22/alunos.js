let students = [
    {name: 'joão', age: 16 },
    {name: 'maria', age: 21 }
]
let student = students.find(student => student.name === 'joão') //encontra a função / parametro desejado
console.log(student)