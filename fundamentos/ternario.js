const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
// se for verdadeira a expressão, retorna aprovado, se for falso, retorna reprovado
// operador ternario tem sempre 3 partes, a primeira: uma expressão que vai retornar sempre verdadeiro ou falso,
// a segunda, após a ? o retorno se verdadeiro, e a terceira, após o : o retorno se falso

console.log(resultado(7.1))
console.log(resultado(6.7))