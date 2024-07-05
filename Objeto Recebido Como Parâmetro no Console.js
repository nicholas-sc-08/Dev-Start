function objetoNoLog(obj) {
console.log(obj)
}

let pessoa = {
    nome: "Samuel",
    sobrenome: "Duarte",
    idade: 21,
    email: "samuelduarte@email.com",
    estaVerificado: true
};

let config = {
    tema: "escuro",
    moeda: "real"
};

objetoNoLog(pessoa);
objetoNoLog(config);
