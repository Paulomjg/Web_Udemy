var numero = 1
{
    var numero = 2 // aqui o valor atribuido a numero é substituído além do contexto
    console.log("dentro = ", numero)    
}
console.log("fora = ", numero)