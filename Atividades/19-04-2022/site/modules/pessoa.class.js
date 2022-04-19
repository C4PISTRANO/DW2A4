class PessoaSUAP {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

function imprimirNomePessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}`)
}

function imprimirIdadePessoa(pessoa) {
    console.
    log(`Idade: ${pessoa.idade}`)
}

export default PessoaSUAP
export { imprimirNomePessoa, imprimirIdadePessoa }