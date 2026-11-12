function criarAluno(nome, idade, curso, nota) {
  return { nome, idade, curso, nota };
}

function buscarAluno(alunos, nome) {
  return alunos.find(a => a.nome.toLowerCase() === nome.toLowerCase()) || null;
}

function listarAprovadosAlunos(alunos) {
  return alunos.filter(a => a.nota >= 7);
}

function obterNomesAlunos(alunos) {
  return alunos.map(a => a.nome);
}

function calcularMediaAlunos(alunos) {
  if (alunos.length === 0) return 0;
  const soma = alunos.reduce((acc, a) => acc + a.nota, 0);
  return soma / alunos.length;
}

function gerarResumo(alunos) {
  const qtd = alunos.length;
  const media = calcularMediaAlunos(alunos);
  const aprovados = alunos.filter(a => a.nota >= 7).length;
  const reprovados = qtd - aprovados;

  return {
    quantidadeAlunos: qtd,
    mediaTurma: parseFloat(media.toFixed(2)),
    aprovados: aprovados,
    reprovados: reprovados
  };
}

const turma = [];
for (let i = 1; i <= 5; i++) {
  const nome = prompt("Cadastro Aluno " + i + " - Nome:");
  const idade = parseInt(prompt("Cadastro Aluno " + i + " - Idade:"));
  const curso = prompt("Cadastro Aluno " + i + " - Curso:");
  const nota = parseFloat(prompt("Cadastro Aluno " + i + " - Nota:"));
  
  turma.push(criarAluno(nome, idade, curso, nota));
}

console.log("Resumo da Turma:", gerarResumo(turma));