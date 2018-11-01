var numero = 1  // seu usar o let tb funciona do mesmo jeito, pq ele dá prioridade para o escopo menor, se não achar procura no escopo mais abrangente
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)