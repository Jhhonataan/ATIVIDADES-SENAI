const usuarios = [
  { id: 1, nome: "Ana", email: "ana@email.com" },
  { id: 2, nome: "Carlos", email: "carlos@email.com" },
  { id: 3, nome: "Mariana", email: "mariana@email.com" }
];

function buscarUsuario(usuarios, email) {
  const usuarioEncontrado = usuarios.find(u => u.email === email);
  return usuarioEncontrado ? usuarioEncontrado : null;
}

const emailBusca = prompt("Digite o e-mail:");
const resultado = buscarUsuario(usuarios, emailBusca);

if (resultado) {
  console.log("Usuário encontrado:\n" + resultado.nome);
} else {
  console.log("Usuário não encontrado.");
}