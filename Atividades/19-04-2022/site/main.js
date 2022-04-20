/*import Pessoa from './modules/pessoa.class.js'

import {
    imprimirNomePessoa as nomePessoa,
    imprimirIdadePessoa as idadePessoa
} from './modules/pessoa.class.js'*/


import Pessoa, {
    imprimirNomePessoa as nomePessoa,
    imprimirIdadePessoa as idadePessoa
} from './modules/pessoa.class.js'

const pessoa = new Pessoa('John', 35)

nomePessoa(pessoa)
idadePessoa(pessoa)

