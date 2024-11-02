function obterNomeCompletoFormatado(usuario) {
    return `${usuario.nome} ${usuario.sobrenome.toUpperCase()}`
}

let usuario1 = {
    nome: "Samanta",
    sobrenome: "Damaris",
    idade: 20
};

let usuario2 = {
    nome: "Charlinson",
    sobrenome: "Santos",
    idade: 31
};
console.log(obterNomeCompletoFormatado(usuario1)); // "Samanta DAMARIS"
console.log(obterNomeCompletoFormatado(usuario2)); // "Charlinson SANTOS"
