    const funcionarios = [
  { nome: "João", salario: 2500, cargo: "Desenvolvedor" },
  { nome: "Maria", salario: 3200, cargo: "Designer" },
  { nome: "Carlos", salario: 4500, cargo: "Analista" }
];

function aplicarReajuste(funcionarios, percentual) {
  return funcionarios.map(func => {
    const novoSalario = func.salario + (func.salario * (percentual / 100));
    return {
      ...func,
      salario: novoSalario
    };
  });
}

const percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste (%):"));
const funcionariosReajustados = aplicarReajuste(funcionarios, percentualReajuste);

console.log("Com reajuste de " + percentualReajuste + "%:");
funcionariosReajustados.forEach(f => {
  console.log(f.nome + " R$ " + f.salario.toLocaleString('pt-BR', { minimumFractionDigits: 2 }));
});