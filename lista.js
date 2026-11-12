const produtos = [
  { nome: "Teclado", preco: 120 },
  { nome: "Mouse", preco: 80 },
  { nome: "Monitor", preco: 900 },
  { nome: "Headset", preco: 250 },
  { nome: "Webcam", preco: 300 }
];

function filtrarProdutos(produtos, precoMaximo) {
  return produtos.filter(produto => produto.preco <= precoMaximo);
}

const precoMax = parseFloat(prompt("Digite o preço máximo:"));
const produtosFiltrados = filtrarProdutos(produtos, precoMax);

console.log("Produtos encontrados:");
produtosFiltrados.forEach(p => console.log(p.nome));