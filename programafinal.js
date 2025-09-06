function avaliarAluno(totalAulas, faltas, P1, P2, notaRecuperacao = null) {
  // Cálculo da frequência
  let percentualFaltas = (faltas / totalAulas) * 100;
  let percentualPresenca = 100 - percentualFaltas;

  // Cálculo da média
  let media = (P1 + P2) / 2;
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
  console.log("Primeira nota: " + P1);
  console.log("Segunda nota: " + P2);
  console.log("Nota complementar (recuperação): " + (notaRecuperacao !== null ? notaRecuperacao : "Não houve"));
  console.log("");
  console.log("Situação final do aluno: " + situacao);
}

// Exemplos de teste
avaliarAluno(40, 8, 7, 6);            // Frequência ok, média 6.5 -> recuperação pendente
avaliarAluno(40, 8, 7, 6, 8);         // Frequência ok, média 6.5 -> aprovado na recuperação
avaliarAluno(40, 12, 8, 9);           // Reprovado por frequência
avaliarAluno(40, 5, 4, 3);            // Frequência ok, média baixa -> reprovado por nota
avaliarAluno(40, 5, 9, 8);            // Frequência ok, aprovado direto
