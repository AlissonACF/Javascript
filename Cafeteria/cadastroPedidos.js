const form = document.getElementById('formPedidos');
const lista = document.getElementById('listaPedidos');
form.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const nomeCliente = document.getElementById('cliente').value;
    const produto = document.querySelector('input[name="produto"]:checked').value;
    const quantidade = document.getElementById('quantidade').value;
    const preço = document.getElementById('preco').value;
    const pedido = document.createElement('li');
    pedido.textContent = `${nomeCliente} - ${produto} - ${quantidade} unidades - R$ ${preço}`;
    lista.appendChild(pedido);
    form.reset();
    alert('Pedido adicionado com sucesso!');
    document.getElementById('cliente').focus();
});