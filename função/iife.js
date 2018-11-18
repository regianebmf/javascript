// IIFE - Imediately Invoked Function Expression

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()  // parênteses no final chama a função

// tudo que for criado dentro da função será restrito a ela, variáveis, etc...