function obterPrimeiraNota(estudante) {
 return estudante.notas[0]
}

let estudante = {
    nome: "Diego",
    idade: 24,
    notas: [3, 5, 5, 4, 8]
};

console.log(obterPrimeiraNota(estudante)); // 3
