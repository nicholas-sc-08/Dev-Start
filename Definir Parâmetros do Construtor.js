// Definição da classe. Insira o contrutor dentro dela
class Receita {
    constructor(nome, calorias){
      console.log(`${nome} e ${calorias}`)
    }
}

// Uso da classe
let macarrao = new Receita("Macarrão", 600);
console.log("---");
let salada = new Receita("Salada", 400);
