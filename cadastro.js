function criarProduto(nome, preco, categoria) {
  return {
    nome: nome,
    preco: preco,
    categoria: categoria
  };
}

function aplicarDesconto(produto, percentual) {
  return {
    ...produto,
    preco: produto.preco - (produto.preco * (percentual / 100))
  };
}

const nomeProd = prompt("Digite o nome do produto:");
const precoProd = parseFloat(prompt("Digite o preço do produto:"));
const catProd = prompt("Digite a categoria do produto:");

const produtoCadastrado = criarProduto(nomeProd, precoProd, catProd);
console.log("Produto original:", produtoCadastrado);

const produtoComDesconto = aplicarDesconto(produtoCadastrado, 10);
console.log("Produto com 10% de desconto:", produtoComDesconto);    