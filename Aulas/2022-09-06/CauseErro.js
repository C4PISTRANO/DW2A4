async function getViaCep(cep) {
    try {
        const url = `https://viacep.com.br/ws/${cep}/json/`
        const response = await fetch(url)
        const data = await response.json();
    } catch (error) {
        throw new Error('Algo deu errado', { cause: error});
    }
}

try {
    await getViaCep('')
} catch (error) {
    console.log(error.cause)
    //SyntaxError: Unexpected token < in JSON at position 0
}