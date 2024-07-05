// Definição da classe
class VariantesDoNome {
     constructor(nome) {
        this.nome = nome;
    }
    
    obterNumeroDeCaracteres() {
     return this.nome.length
    }
    
    obterMinusculo() {
    return this.nome.toLowerCase()
    }
    
    obterMaiusculo() {
    return this.nome.toUpperCase()
    }
}

// Uso da classe
let samuel = new VariantesDoNome("Samuel");
console.log(samuel.obterNumeroDeCaracteres());
console.log(samuel.obterMinusculo());
console.log(samuel.obterMaiusculo());

console.log("---");

document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <h2>Variação de Nomes</h2>
    <div>
        <label for="dv-seu-nome">
        <b>Seu nome<b></label><br><br>
        <input type="text" placeholder="Seu nome" id="dv-seu-nome" autocomplete="off">
    </div><br><br>

    <table border="1">
        <thead>
            <tr>
                <th width="200px">Variantes</th>
                <th>Resultados</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Número de caracteres</td>
                <td id="dv-resposta-1"></td>
            </tr>
            <tr>
                <td>Em Minúsculo</td>
                <td id="dv-resposta-2"></td>
            </tr>
            <tr>
                <td>Em Maiúsculo</td>
                <td id="dv-resposta-3"></td>
            </tr>
        </tbody>
    </table>
</div>
`);


let dvResposta1 = document.querySelector("#dv-resposta-1");
let dvResposta2 = document.querySelector("#dv-resposta-2");
let dvResposta3 = document.querySelector("#dv-resposta-3");

let dvNome = document.querySelector("#dv-seu-nome");

dvNome.addEventListener("keyup", () => {
    let variantesDoNome = new VariantesDoNome(dvNome.value);

    try {
        dvResposta1.textContent = variantesDoNome.obterNumeroDeCaracteres();
    } catch (erro) {console.log(erro)}

    try {
        dvResposta2.textContent = variantesDoNome.obterMinusculo();
    } catch (erro) {console.log(erro)}

    try {
        dvResposta3.textContent = variantesDoNome.obterMaiusculo();
    } catch (erro) {console.log(erro)}
});
