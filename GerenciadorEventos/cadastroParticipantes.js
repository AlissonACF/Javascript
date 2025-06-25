const form = document.getElementById('formParticipante');
const lista = document.getElementById('listaParticipantes');
form.addEventListener('submit',function(evento) {
    evento.preventDefault(); // Impede o envio do formulário
    // Obtém os valores dos campos do formulário
    const nomeParticipante = document.getElementById('nome').value;
    const idadeParticipante = document.getElementById('idade').value;
    const generoParticipante = document.querySelector('input[name="genero"]:checked').value;
    const eventoParticipante = document.getElementById('evento').value;
    // Cria um novo item na lista de participantes
    const novoParticipante = document.createElement('li');
    novoParticipante.innerText = `${nomeParticipante} -- ${idadeParticipante} -- ${generoParticipante} -- Evento: ${eventoParticipante}`;
    // Adiciona o novo item na lista
    lista.appendChild(novoParticipante);
    // Limpa o formulário após o envio
    form.reset();
});