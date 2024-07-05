function criarTarefa(dados) {
    console.log("Dados recebidos:\n", dados);

    let objetoRetorno = {
      
        titulo: "Minha tarefa", 
    estaCompleta: true, 
    categoria: "Trabalho", 
    autor: { 
        nome: "Nicholas",
        sobrenome: "Serencovich Carvalho"
    }
    };

    return objetoRetorno;
}

document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <h2>App Lista de tarefas</h2>
    <form id="dv-form-lista-a-fazer">
        <div>
            <label for="dv-titulo-a-fazer">Adicionar tarefa</label>
            <input type="string" required placeholder="Título da tarefa" id="dv-titulo-a-fazer">
            <br/><br/>
        </div>
        <label>
            <input type="checkbox" id="dv-a-fazer-completo" value="" /> Está completa?
            <br/><br/>
        </label>
        <select required id="dv-categoria-a-fazer">
            <option value="">Selecione a categoria</option>
            <option value="trabalho">Trabalho</option>
            <option value="pessoal">Pessoal</option>
        </select>
        <input type="submit" value="Adicionar" />
    </form>
    <ul id="dv-lista-a-fazer"></ul>
</div>
`);

let dvForm = document.querySelector("#dv-form-lista-a-fazer");
let dvTitulo = document.querySelector("#dv-titulo-a-fazer");
let dvCompleto = document.querySelector("#dv-a-fazer-completo");
let dvCategoria = document.querySelector("#dv-categoria-a-fazer");
let dvLista = document.querySelector("#dv-lista-a-fazer");

function formatar(tarefa) {
    console.log(tarefa.estaCompleta)
    let titulo = ''
    titulo = (tarefa.estaCompleta)? `<del>${tarefa.titulo}</del>`: tarefa.titulo;
    
    let complemento = (tarefa.estaCompleta)? "finalizada":"iniciada";
    dvLista.innerHTML += `<li><div class="card">A tarefa <strong>${titulo}</strong> foi ${complemento} pelo usuário ${tarefa.autor.nome} ${tarefa.autor.sobrenome}</strong> e está na categoria ${tarefa.categoria}</div></li>`;
}

dvForm.addEventListener("submit", event => {
    event.preventDefault();
    let autor = {
        nome: "Marcio",
        sobrenome: "Gomes"
    };
    let valores = {
        tarefaTitulo: dvTitulo.value,
        completa: dvCompleto.checked,
        categoriaEscolhida: dvCategoria.value,
        usuario: autor
    };
    let tarefa = criarTarefa(valores);
    dvTitulo.value = "";
    formatar(tarefa);
});
