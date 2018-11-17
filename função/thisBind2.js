function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++  // this.idade++
        console.log(self.idade)  // console.log(this.idade)
    }/*.bind(this)*/, 1000)  // o bind vai referenciar o this para essa funcão
}

// a cada 1000 milisegundos esse função será executada

new Pessoa