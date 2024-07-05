function obterNotaDoPrimeiroAluno(estudantes) {
    return estudantes[0].aprendizagemDeProgramacao.nota
}

let estudantes = [
  {
    nome: "Samuel Dias",
    idade: 24,
    aprendizagemDeProgramacao: {
        anoInicio: 2020,
        nota: 8
    }
  },
  {
    nome: "Carla Ferreira",
    idade: 31,
    aprendizagemDeProgramacao: {
        anoInicio: 2021,
        nota: 9
    }
  }
];

console.log(obterNotaDoPrimeiroAluno(estudantes));
