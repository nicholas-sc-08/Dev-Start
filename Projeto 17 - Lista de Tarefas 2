function criarTarefa(dados) {

}

function adicionarTarefa(tarefas, tarefa) {
 tarefas.push(tarefa)
 return tarefas
}

function conteTarefa(tarefas) {
 return tarefas.length
}

function primeiraTarefaTitulo(tarefas) {
 
}

function ultimaTarefaTitulo(tarefas) {

}

function exportacaoDeTitulos(tarefas) {
 let titulos = tarefas.map(function(tarefa){
     return tarefa.titulo
 })
 return titulos
}

document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <h2>App lista de tarefas II</h2>
    <form id="dv-form-lista-tarefa">
        <div>
            <label for="dv-titulo-tarefa">Adicione a tarefa</label>
            <input type="string" required placeholder="Título da tarefa" id="dv-titulo-tarefa">
            <br><br>
        </div>
        <label>
            <input type="checkbox" id="dv-tarefa-completa" value="" /> Está completa?<br><br>
        </label>
        <select required id="dv-categoria-tarefa">
            <option value="">Selecione a categoria</option>
            <option value="trabalho">Trabalho</option>
            <option value="pessoal">Pessoal</option><br><br>
        </select>
        <input type="submit" value="Adicionar" />
    </form>
    <ul id="dv-lista-tarefa"></ul>
</div>
`);

let dvForm = document.querySelector("#dv-form-lista-tarefa");
let dvTitulo = document.querySelector("#dv-titulo-tarefa");
let dvcompleta = document.querySelector("#dv-tarefa-completa");
let dvCategoria = document.querySelector("#dv-categoria-tarefa");
let dvLista = document.querySelector("#dv-lista-tarefa");

let tarefas = [];

function formatar(tarefas) {
    dvLista.innerHTML = `<h3>Tarefas (${conteTarefa(tarefas)})</h3>`;
    tarefas.forEach(function(tarefa) {
        console.log(tarefa.estaCompleta)
        let titulo = ''
        titulo = (tarefa.estaCompleta)? `<del>${tarefa.titulo}</del>`: tarefa.titulo;
        
        let complemento = (tarefa.estaCompleta)? "finalizada":"iniciada";

        dvLista.insertAdjacentHTML("beforeend", `<li><div class="card">&nbsp;<strong>${titulo}</strong> - ${complemento}, criada por ${tarefa.autor.nome} ${tarefa.autor.sobrenome}</strong> e está na categoria ${tarefa.categoria}</div></li>`);
    });
}

dvForm.addEventListener("submit", event => {
    event.preventDefault();
    let autor = {
        nome: "Lídia",
        sobrenome: "Messias"
    };
    let valores = {
        tarefaTitulo: dvTitulo.value,
        completa: dvcompleta.checked,
        categoriaEscolhida: dvCategoria.value,
        usuario: autor
    };
  
    let tarefa = criarTarefa(valores);
    tarefas = adicionarTarefa(tarefas, tarefa);
    formatar(tarefas);
    //reset do formulário
    dvTitulo.value = "";
    dvcompleta.checked = false;
    // Log o resultado de primeiraTarefaTitulo(), ultimoTarefaTitulo() e exportacaoDeTitulos()
    console.log("Primeiro título de tarefas: " + primeiraTarefaTitulo(tarefas));
    console.log("Último título de tarefas: " + ultimaTarefaTitulo(tarefas));
    console.log("Títulos exportados: ", exportacaoDeTitulos(tarefas));
});
