// Definição da classe Usuario
class Usuario {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    
    podeVotar() {
        return this.idade >= 16;
    }
}
class Escritor extends Usuario {
  publicarArtigo()
  {console.log("Artigo Publicado")
  }
}
