let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log("os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!" ") // um espaço vazio ou um texto
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // pega o valor atribuído, não avalia se a atribuição deu certo

console.log("os falsos..")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("pra finalizar...")
console.log(("" || null || 0 || "epa" || 123)) // pega o primeiro verdadeiro
console.log(!!("" || null || 0 || "epa" || 123)) 

let nome = ""

console.log(nome || "Desconhecido")