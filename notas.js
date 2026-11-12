const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 5 },
  { nome: "Mariana", nota: 9 },
  { nome: "Pedro", nota: 4 },
  { nome: "João", nota: 7 }
];

function listarAprovados(alunos) {
  return alunos.filter(aluno => aluno.nota >= 7);
}

function obterNomes(alunos) {
  return alunos.map(aluno => aluno.nome);
}

function calcularMediaTurma(alunos) {
  const soma = alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
  return soma / alunos.length;
}

const aprovados = listarAprovados(alunos);
console.log("Aprovados:", aprovados);
console.log("Nomes dos aprovados:", obterNomes(aprovados));
console.log("Média da turma:", calcularMediaTurma(alunos));