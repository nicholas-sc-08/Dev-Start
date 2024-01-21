// Implemente a Classe Passaporte
class Passaporte {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    obterNome(){
        return `${this.nome.toLowerCase()}`
    }
    obterSobrenome(){
        return `${this.sobrenome.toUpperCase()}`
    }
    obterNomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }
    obterIniciais(){
        return `${this.nome.charAt(0)}.${this.sobrenome.charAt(0)}.`
    }
    obterEhNomeValido(){
  if (this.nome.length >= 1 && this.sobrenome.length >= 1) {
      return "Sim"
  }
    }
    }

// Uso da classe
let mario = new Passaporte("Mario", "Borges");
console.log(mario.obterNome());
console.log(mario.obterSobrenome());
console.log(mario.obterNomeCompleto());
console.log(mario.obterIniciais());
console.log(mario.obterEhNomeValido());

console.log("---");

document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <h2>App de Passaporte</h2>   
    <div>
        <div>
            <label for="dv-nome ">Seu nome</label>
            <input type="text" placeholder="Seu nome:" 
                    id="dv-nome" autocomplete="off">
        </div>
        <div>
            <label for="dv-sobrenome">Seu sobrenome:</label>
            <input type="text" placeholder="Seu sobrenome" 
                    id="dv-sobrenome" autocomplete="off">
        </div>
    </div>

    <div>
        <table border="1">
            <thead>
                <tr>
                    <th width="200px"></th>
                    <th>Seus dados</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Nome</td>
                    <td id="dv-resposta-1"></td>
                </tr>
                <tr>
                    <td>Sobrenome</td>
                    <td id="dv-resposta-2"></td>
                </tr>
                <tr>
                    <td>Nome Completo</td>
                    <td id="dv-resposta-3"></td>
                </tr>
                <tr>
                    <td>Iniciais</td>
                    <td id="dv-resposta-4"></td>
                </tr>
                <tr>
                    <td>Nome Válido?</td>
                    <td id="dv-resposta-5"></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`);

let nome = document.querySelector("#dv-nome");
let sobrenome = document.querySelector("#dv-sobrenome");

let dvResposta1 = document.querySelector("#dv-resposta-1");
let dvResposta2 = document.querySelector("#dv-resposta-2");
let dvResposta3 = document.querySelector("#dv-resposta-3");
let dvResposta4 = document.querySelector("#dv-resposta-4");
let dvResposta5 = document.querySelector("#dv-resposta-5");

function formatar() {
    let devPassaporte = new Passaporte(nome.value, sobrenome.value);

    dvResposta1.textContent = devPassaporte.obterNome();
    dvResposta2.textContent = devPassaporte.obterSobrenome();
    dvResposta3.textContent = devPassaporte.obterNomeCompleto();
    dvResposta4.textContent = devPassaporte.obterIniciais();
    dvResposta5.textContent = devPassaporte.obterEhNomeValido();
}

nome.addEventListener("keyup", formatar);
sobrenome.addEventListener("keyup", formatar);
