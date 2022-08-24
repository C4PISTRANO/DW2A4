var pessoa = {
    nome: {
        primeiro:'Rivaildo',
        ultimo: 'Ferreira'
    },
    idade: 35,
    sexo: 'masculino',
    interesses: ['música', 'games', 'programar'],

    bio: function () { //expressão de função
        console.log(
            `${thuis.nome.primeiro} ${this.nome.ultimo} tem ${this.idade} anos de idade.
            Ele gosta de ${this.interesses[0]} , ${this.interesses[1]} e ${this.interesses[2]}.`
        )
    },
    saudacao: function () { //expressão de função
        console.log('Olá!! Eu sou o ' + this.nome.primeiro + '.')
    }
}

/*pessoa.nome.primeiro = 'Riva'
console.log(pessoa)
console.log(pessoa.bio)
console.log(pessoa.saudacao)
console.log(pessoa['nome']['primeiro'])*/

const { nome, idade, sexo, ...outros} = pessoa
console.log(nome);
console.log(idade);
console.log(sexo);
console.log(outros);