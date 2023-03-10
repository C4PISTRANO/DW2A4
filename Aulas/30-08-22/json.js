const pessoa = {
    nome: {
        primeiro: "Raphael",
        ultimo: "Capistrano"
    },
    idade: 34,
    sexo: 'masculino',
    interesses: ['música', 'games', 'programar'],
    inativo: null 
}
const jsonData = JSON.stringify(pessoa)
console.log(jsonData)
console.log(JSON.parse(jsonData));
