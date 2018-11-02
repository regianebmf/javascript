let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.export.c)
console.log(module.export === this)
console.log(module.export)

// criando uma variável maluca: sem var e let!!
// abc = 3  // não faça isso em casa !!!
// console.log(global.abc)

 // module.exports = { e: 456, f: false, g: 'teste'} - utiliza mais esse formato

 // precisa conhecer o runtime
 // existem diferenças entre rodar no browser e no node, isto é, frontend e backend
 // evite criar variáveis em escopo global