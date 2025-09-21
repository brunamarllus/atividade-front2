function avaliarAluno(totalAulas, faltas, nota1, nota2, notaRecuperacao = null) {
  // Cálculo da frequência
  let percentualFaltas = (faltas / totalAulas) * 100;
  let percentualPresenca = 100 - percentualFaltas;

  // Cálculo da média
  let media = (nota1 + nota2) / 2;
  let situacao = "";

  // Verificação de frequência primeiro
  if (percentualPresenca < 75) {
    situacao = "Reprovado por frequência";
  } else {
    if (media >= 7) {
      situacao = "Aprovado";
    } else if (media >= 5 && media < 7) {
      if (notaRecuperacao !== null) {
        let novaMedia = (media + notaRecuperacao) / 2;
        if (novaMedia >= 5) {
          situacao = "Aprovado na recuperação";
        } else {
          situacao = "Reprovado na recuperação";
        }
      } else {
        situacao = "Recuperação pendente (nota não informada)";
      }
    } else {
      situacao = "Reprovado por nota";
    }
  }

  // Saída no console
  console.log("Número de aulas do semestre: " + totalAulas);
  console.log("Número de faltas do aluno: " + faltas);
  console.log("Percentual de presença do aluno: " + percentualPresenca.toFixed(2) + "%");
  console.log("");
  console.log("Primeira nota: " + nota1);
  console.log("Segunda nota: " + nota2);
  console.log("Nota complementar (recuperação): " + (notaRecuperacao !== null ? notaRecuperacao : "Não houve"));
  console.log("");
  console.log("Situação final do aluno: " + situacao);
}


