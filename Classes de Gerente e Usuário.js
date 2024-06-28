// Definição da classe Funcionario
class Funcionario {
    constructor(nome, sobrenome, cargo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cargo = cargo;
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    obterIniciais() {
        return this.nome[0] + this.sobrenome[0];
    }

    obterPosicao() {
        return `${this.nome} trabalha como ${this.cargo}`;
    }
}
class Gerente extends Funcionario {
    obterPosicao(){
    return `${this.nome} é o gerente`
}
}
// Defina aqui a classe Gerente
// Lembre-se de usar herança de classe


// Uso da classe Funcionario
let sueli = new Funcionario("Sueli", "Borges", "desenvolvedora");
console.log(sueli.obterNomeCompleto());
console.log(sueli.obterPosicao());

// Uso da classe Gerente
let carlos = new Gerente("Carlos", "Santos", "gerente");
console.log(carlos.obterNomeCompleto());
console.log(carlos.obterPosicao());
