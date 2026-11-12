const pedidos = [
  { id: 1, cliente: "Ana", valor: 150 },
  { id: 2, cliente: "Carlos", valor: 300 },
  { id: 3, cliente: "Ana", valor: 250 },
  { id: 4, cliente: "Mariana", valor: 500 }
];

function buscarPedidosPorCliente(pedidos, cliente) {
  return pedidos.filter(pedido => pedido.cliente.toLowerCase() === cliente.toLowerCase());
}

function calcularTotalPedidos(pedidosLista) {
  return pedidosLista.reduce((total, pedido) => total + pedido.valor, 0);
}

const clienteBusca = prompt("Digite o nome do cliente:");
const pedidosCliente = buscarPedidosPorCliente(pedidos, clienteBusca);

console.log("Cliente: " + clienteBusca);
pedidosCliente.forEach(p => {
  console.log("Pedido " + p.id + " R$ " + p.valor);
});
console.log("Total: R$ " + calcularTotalPedidos(pedidosCliente));