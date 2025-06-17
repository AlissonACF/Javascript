const form = document.getElementById("formSelecoes");
const lista = document.getElementById("listaSelecoes");
//Adiciona o evento de submit ao formulário
form.addEventListener("submit", function (evento) {
    evento.preventDefault(); //Evita recarregar a página
    //pega os valores dos campos do formulário
    const nome = document.getElementById("nomeSelecoes").value;
    const pais = document.getElementById("continente").value;
    const anoFundacao = document.getElementById("numeroTitulos").value;
    const tecnico = document.getElementById("jogadorDestaque").value;
    //criar um novo item na lista de seleções
    const novaSelecao = document.createElement("li");
    novaSelecao.innerText = `${nomeSelecoes} -- (${continente}) -- Fundada em: ${numeroTitulos} -- Técnico: ${jogadorDestaque}`;
    //adiciona a nova seleção na lista
    lista.appendChild(novaSelecao);
    //limpa os campos do formulário
    form.reset();
});