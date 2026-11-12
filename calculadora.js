function calcularMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

function verificarSituacao(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5 && media < 7) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}


const notas = [];
for (let i = 1; i <= 4; i++) {
  notas.push(parseFloat(prompt("Digite a nota " + i + ":")));
}

const mediaFinal = calcularMedia(notas);
console.log("Notas: " + notas.join(", "));
console.log("Média: " + mediaFinal);
console.log("Situação: " + verificarSituacao(mediaFinal));