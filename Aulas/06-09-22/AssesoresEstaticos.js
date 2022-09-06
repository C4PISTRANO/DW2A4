class Empresa {
    static #totalEmpresas = 0
    constructor() {
        Empresa.#totalEmpresas++
    }
    static get totalEmpresas() {
        return Empresa.#totalEmpresas
    }
}
let empresa1 = new Empresa()
let empresa2 = new Empresa()
let empresa3 = new Empresa()
let empresa4 = new Empresa()
console.log(Empresa.totalEmpresas)