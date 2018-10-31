/*jshint esversion: 6 */

let valor;     // não inicializada
console.log(valor);

valor = null;  //ausência de valor, ela está definida, mas em valor
console.log(valor);
// console.log(valor.toString())  // Erro, não tem toString para null

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evite atribuir underfine
console.log(!!produto.preco);
//delete produto.preco
console.log(produto);

produto.preco = null;  // sem preço
console.log(!!produto.preco);
console.log(produto);

// não posso acessar nada após o ponto se o objeto anterior não tiver informação