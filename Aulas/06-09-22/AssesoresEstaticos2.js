class Empresa {
    static rendaTotal = 0
    static adicinarRenda(valor) {
        Empresa.rendaTotal += valor
    }
}    

Empresa.adicionarRenda(200)
Empresa.adicionarRenda(100)

console.log(Empresa.rendaTotal)