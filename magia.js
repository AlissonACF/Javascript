console.log("Olá Mundo!!");
let nome = "Sirius Black";
console.log(nome);
let nomeAprendiz = "Alisson";
let saudacao = "Que seu Patronum te acompanhe "+ nomeAprendiz;

console.log("Livro de magias carregado!!");
console.log(saudacao);

//Primeira função em JavaScript
function mudarTitulo(novoTitulo){
    let titulo = document.querySelector("h1");
    //mudar o título do h1
    titulo.textContent = novoTitulo;
}

//chamar o botão e a div de habilidades
let botaoMagico = document.querySelector("#botao-magico");
let habilidades = document.querySelector("#habilidades");
let botaoEsconder = document.querySelector("#botao-esconder");
//adicionar um ouvinte ao evento click do botão
botaoMagico.addEventListener("click", function() {
    //esse código só executa quando o botão for clicado
    console.log("botão clicado!!");
    habilidades.style.display = "block";
})
botaoEsconder.addEventListener("click", function() {
    //esse código só executa quando o botão for clicado
    console.log("botão clicado!!");
    habilidades.style.display = "none";
})