const form = document.getElementById('formEvento');
const lista = document.getElementById('listaEventos');
form.addEventListener('submit',function(evento) {
    evento.preventDefault(); // Impede o envio do formulário
    // Obtém os valores dos campos do formulário
    const nomeEvento = document.getElementById('nome').value;
    const dataEvento = document.getElementById('data').value;
    const localEvento = document.getElementById('local').value;
    const modalidadeEvento = document.getElementById('modalidade').value;
    const eventoAberto = document.querySelector('input[name="eventoAberto"]:checked').value;
    // Cria um novo item na lista de eventos
    const novoEvento = document.createElement('li');
    novoEvento.innerText = `${nomeEvento} -- ${dataEvento} -- ${modalidadeEvento} -- ${localEvento} -- Evento Aberto? ${eventoAberto}`;
    // Adiciona o novo item na lista
    lista.appendChild(novoEvento);
    // Limpa o formulário após o envio
    form.reset();
});