export default class PessoaSUAP {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

export function imprimirNomePessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}`)
}

export function imprimirIdadePessoa(pessoa) {
    console.
    log(`Idade: ${pessoa.idade}`)
}



// export default PessoaSUAP
// export { imprimirNomePessoa, imprimirIdadePessoa }