const alunos = [
  { nome: "Bruno", nota: 8, turma: "1B" },
  { nome: "Liane", nota: 8, turma: "1B" },
  { nome: "Eduardo", nota: 7, turma: "1B" },
  { nome: "Valentina", nota: 7, turma: "1B" },
];

function alunosAprovados(array, media) {
  let aprovados = [];

  for (let i = 0; i < array.length; i++) {
    let { nome, nota } = array[i]; //destructuring

    if (nota >= media) {
      aprovados.push(nome);
    }

    // if (array[i].nota >= media) {
    //   aprovados.push(array[i].nome);
    // }
  }
  return aprovados;
}

console.log(alunosAprovados(alunos, 8));
