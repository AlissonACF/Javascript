const formJogador = document.getElementById('formJogador');
const listaJogadores = document.getElementById('listaJogadores');
// Adiciona o evento de submit ao formulário
formJogador.addEventListener('submit', function (evento) {
    evento.preventDefault(); // Evita recarregar a página
    // Pega os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const habilidades = document.querySelectorAll('input[name="habilidades"]:checked');
    const habilidadesArray = Array.from(habilidades).map(h => h.value);
    //pega a posição do jogador
    const posicao = document.querySelector('input[name="posicao"]:checked').value;
    //pega a data de estreia na seleção
    const dataEstreia = document.getElementById('estreia').value;
    //adiciona o jogador à lista
    const jogadorItem = document.createElement('li');
    jogadorItem.innerHTML = `Nome: ${nome}<br> Habilidades: ${habilidadesArray.join(', ')}<br> Posição: ${posicao}<br> Data de Estreia: ${dataEstreia}`;
    listaJogadores.appendChild(jogadorItem);
    // Limpa o formulário após o envio
    formJogador.reset();
});