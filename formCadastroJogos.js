const form = document.getElementById("formJogos");
const lista = document.getElementById("listaJogos");
//Adiciona o evento de submit ao formulário
form.addEventListener("submit", function (evento) {
    evento.preventDefault(); //Evita recarregar a página
    //pega os valores dos campos do formulário
    const titulo = document.getElementById("titulo").value;
    const ano = document.getElementById("ano").value;
    const genero = document.getElementById("genero").value;
    const plataforma = document.getElementById("plataforma").value;
    //criar um novo item na lista de jogos
    const novoJogo = document.createElement("li");
    novoJogo.innerText = `${titulo} -- (${ano}) -- ${genero} -- ${plataforma}`;
    //adiciona o novo item na lista
    lista.appendChild(novoJogo);
    //limpa os campos do formulário
    form.reset();
});