const form = document.getElementById("formSelecoes");
const lista = document.getElementById("listaSelecoes");
//Adiciona o evento de submit ao formulário
form.addEventListener("submit", function (evento) {
    evento.preventDefault(); //Evita recarregar a página
    //pega os valores dos campos do formulário
    const nomeSelecao = document.getElementById("nomeSelecao").value;
    const continente = document.getElementById("continente").value;
    const numeroTitulos = document.getElementById("numeroTitulos").value;
    const jogadorDestaque = document.getElementById("jogadorDestaque").value;
    //criar um novo item na lista de seleções
    const novaSelecao = document.createElement("li");
    novaSelecao.innerText = `${nomeSelecao} -- (${continente}) -- ${numeroTitulos} -- ${jogadorDestaque}`;
    //adiciona a nova seleção na lista
    lista.appendChild(novaSelecao);
    //limpa os campos do formulário
    form.reset();
});