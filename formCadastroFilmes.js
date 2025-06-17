//Aqui vamos pegar o form e a lista para exibir os filmes
const form = document.getElementById("formFilme");
const lista = document.getElementById("listaFilmes");
//Adiciona o evento de submit ao formulário
form.addEventListener("submit", function (evento) {
    evento.preventDefault(); //Evita recarregar a página
    //pega os valores dos campos do formulário
    const titulo = document.getElementById("titulo").value;
    const ano = document.getElementById("ano").value;
    const genero = document.getElementById("genero").value;
    //criar um novo item na lista de filmes
    const novoFilme = document.createElement("li");
    novoFilme.innerText = `${titulo} -- (${ano}) -- ${genero}`;
    //adiciona o novo item na lsita
    lista.appendChild(novoFilme);
    //limpa os campos do formulário
    form.reset();
});