// par nome/valor
const saudacao = "opa" // contexto léxico 1

function exec() {
    const saudacao = "Faaala" // contexto léxico 2
    return saudacao
}
console.log(saudacao)
console.log(exec())

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    endereço: {
        logradouro: "Rua muito legal",
        numero: 123
    }
}
console.log(cliente)