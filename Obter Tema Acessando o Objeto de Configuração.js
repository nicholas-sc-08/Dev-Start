function obterTema(config) {
 return config.tema
}

obterTema({
    tema: "escuro",
    moeda: "real"
}); // "escuro"

obterTema({
    tema: "claro",
    moeda: "dólar"
}); // "claro"
