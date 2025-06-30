const form = document.getElementById('formProduto');
const lista = document.getElementById('listaProdutos');
form.addEventListener('submit', function(evento) {
  evento.preventDefault();
  const nome = document.getElementById('produto').value;
  const preco = document.getElementById('preco').value;
  const quantidade = document.getElementById('quantidade').value;
  const categoria = document.getElementById('categoria').value;
    // Limpar os campos do formulário
    form.reset();
    // Criar um novo item de lista
    const produto = document.createElement('li');
    produto.textContent = `${nome} - R$ ${preco} - ${quantidade} unidades - Categoria: ${categoria}`;
    // Adicionar o item à lista
    lista.appendChild(produto);
    // Exibir mensagem de sucesso
    alert('Produto adicionado com sucesso!');
});