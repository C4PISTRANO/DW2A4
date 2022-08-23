var pessoa = {
    nome: {
        primeiro:'Rivaildo',
        ultimo: 'Santicioli'
    },
    idade: 35,
    sexo: 'masculino',
    interesses: ['música', 'games', 'programar'],

    bio: function () {
        console.log(
            `${thuis.nome.primeiro} ${this.nome.ultimo} tem ${this.idade} anos de idade.
            Ele gosta de ${this.interesses[0]} , ${this.interesses[1]} e ${this.interesses[2]}.`
        )
    },
    saudacao: function () {
        console.log('Olá!! Eu sou o ' + this.nome.primeiro + '.')
    }
}