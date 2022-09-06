class Empresa{
    nome = 'IFSP'
    _cnpj = '99.999.999./0001-99' //trocar todos os _ por # para ficar privado
    atualizarSalario(){
        return this._calcularSalario()
    
    }
    _calcularSalario(){
        return 1+1
    }
}
var empresa = new Empresa()
console.log(empresa._cnpj)
console.log(empresa._calcularSalario())