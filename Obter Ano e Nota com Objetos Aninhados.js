function obterAno(estudante) {
    return estudante.curso.ano
}

function obterNota(estudante) {
    return estudante.curso.nota
}

let estudante = {
    nome: "Andres",
    idade: 24,
    curso: {
        ano: 2020,
        nota: 8
    }
};

console.log(obterAno(estudante)); // 2020
console.log(obterNota(estudante)); // 8
