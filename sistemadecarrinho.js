const carrinho = [
  { produto: "Mouse", quantidade: 2, preco: 80 },
  { produto: "Teclado", quantidade: 1, preco: 150 },
  { produto: "Headset", quantidade: 2, preco: 200 }
];

function calcularTotal(carrinho) {
  return carrinho.reduce((total, item) => total + (item.quantidade * item.preco), 0);
}

function calcularTotalComDesconto(carrinho, desconto) {
  const totalBruto = calcularTotal(carrinho);
  const valorDesconto = totalBruto * (desconto / 100);
  return totalBruto - valorDesconto;
}

const totalCarrinho = calcularTotal(carrinho);
console.log("Total: R$ " + totalCarrinho);

const descontoAplicado = 10;
const totalFinal = calcularTotalComDesconto(carrinho, descontoAplicado);
console.log("Desconto: " + descontoAplicado + "%");
console.log("Total final: R$ " + totalFinal);