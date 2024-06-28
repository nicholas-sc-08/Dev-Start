// Definição da classe
class Receita {
    constructor(nome, calorias) {
      this.nome = nome;
      this.calorias = calorias;
    }
}

// Uso da classe
let macarrao = new Receita("Macarrão", 600);
console.log(macarrao);

let salada = new Receita("Salada", 400);
console.log(salada);
