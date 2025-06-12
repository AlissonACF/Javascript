//1. Pegar o formulário pelo id
const formCadastro = document.getElementById('cadastro');
//2. Adicionar um evento de submit(enviar) ao formulário
formCadastro.addEventListener('submit', function(evento) {
    evento.preventDefault();//evita recarregar pagina
    //3. Pega os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const dataDeNascimento = document.getElementById('dataDeNascimento').value;
//4. Mostrar o resultado na tela
document.getElementById('resultado').innerHTML = `<p>Nome: ${nome}</p><br> <p>E-mail: ${email}</p><br> <p>Senha: ${senha}</p><br> 
<p>Cpf: ${cpf}</p><br> <p>Telefone: ${telefone}</p><br> <p>Data de Nascimento: ${dataDeNascimento}</p>`;
})