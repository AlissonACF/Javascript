const form = document.getElementById('formClientes');
const lista = document.getElementById('listaClientes');
form.addEventListener('submit',function(evento) {
    evento.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereço = document.getElementById('endereco').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    // Cria um novo item na lista de clientes
    const novoCliente = document.createElement('li');
    novoCliente.innerText = `${nome} -- ${email} -- ${telefone} -- ${endereço} -- ${genero}`;
    // Adiciona o novo item na lista
    lista.appendChild(novoCliente);
    // Limpa o formulário após o envio
    form.reset();
});