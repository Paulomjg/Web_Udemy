function tratarErroELancar(erro) {
   //  throw new Error ("..")
   // throw 10
   // throw true
   // throw mensagem
   throw {
       nome: erro.name,
       msg: erro.mensagem,
       date: new Date
   }
}

function imprimirGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log("Final!")
    }
}

const obj = { name: "Rogério"}
imprimirGritando(obj)