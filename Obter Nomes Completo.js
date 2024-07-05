function obterNomesCompletos(usuarios) {
 let nome = usuarios.map(function(nome){
   return `${nome.nome} ${nome.sobrenome}` 

 })
 return nome
}

let usuarios = [
  {
    nome: "Bárbara",
    sobrenome: "Silva",
    idade: 21,
  },
  {
    nome: "Carlos",
    sobrenome: "Bonaparte",
    idade: 38,
  }
];

console.log(obterNomesCompletos(usuarios));
