function teste1(num) {
    if (num > 7)
    console.log(num)
    console.log("Final") // essa linha não está dentro do bloco if, porque eu não abri chaves
    
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); {      // esse ";" faz com que a estrutura if para nele, ou seja, o bloco logo a frente vai sempre rodar
    console.log(num)
    }
}

teste2(6)
teste2(8)