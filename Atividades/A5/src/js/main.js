/* Mascaras =================================*/
const masks = {
    cpf (value) {
      return value
        .replace(/\D+/g, '')  // deixar somente números, irá substituir tudo que não seja número é trocado por vazio
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1') //limitar a quantidade de números
    },

    dt_nasc (value) {
        return value
          .replace(/\D+/g, '') // deixar somente números, irá substituir tudo que não seja número é trocado por vazio
          .replace(/(\d{2})(\d)/, '$1/$2')
          .replace(/(\/\d{2})(\d)/, '$1/$2')
          .replace(/(\/\d{4})\d+?$/, '$1') //limitar a quantidade de números
      },
   
    fone (value) {
      return value
        .replace(/\D+/g, '') // deixar somente números, irá substituir tudo que não seja número é trocado por vazio
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1') //limitar a quantidade de números
    },
  
    cep (value) {
      return value
        .replace(/\D+/g, '') // deixar somente números, irá substituir tudo que não seja número é trocado por vazio
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1') //limitar a quantidade de números
    },
       
}
  
document.querySelectorAll('input').forEach($input => {
    const field = $input.dataset.js
  
    $input.addEventListener('input', e => {
      e.target.value = masks[field](e.target.value)
    }, false)
})

/* Não enviar / atualizar o form =================================*/
document.querySelector("form").addEventListener("submit", event => {
    console.log("enviar o formulário")

    event.preventDefault()
})

