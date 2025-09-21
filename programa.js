alert("Olá Aluno, verifique sua situação");
console.log("Mensagem");

var resposta = prompt("Informe seu nome:");
console.log("Nome informado: " + resposta);

var faltas = parseInt(prompt("Quantas vezes você faltou?"));
var totalAulas = parseInt(prompt("Qual o total de aulas ministradas?"));
var nota1 = parseFloat(prompt("Qual a sua primeira nota?"));
var nota2 = parseFloat(prompt("Qual a sua segunda nota?"));

var media = (nota1 + nota2) / 2;
var porcentagem = (faltas / totalAulas) * 100;

console.log("Sua média é " + media.toFixed(2));
console.log("Sua porcentagem de faltas é " + porcentagem.toFixed(2) + "%");  
console.log("Você tem " + faltas + " faltas de um total de " + totalAulas + " aulas ministradas");


// Verificar frequencia
function Frequencia(faltas, totalAulas) {
  let percentualFaltas = (faltas / totalAulas) * 100;
  if (percentualFaltas <= 25) {
    console.log("Aluno atende ao requisito de frequência (>= 75%).");
    return true;
  } else {
    console.log("Aluno reprovado por falta (< 75%).");
    return false;
  }
}


// Verificar media
function verificarMedia(nota1, nota2) {
  let media = (nota1 + nota2) / 2;

  if (media >= 7) {
    console.log(`Aluno aprovado! Média: ${media.toFixed(1)}`);
    return "Aprovado";
  } else if (media >= 5 && media < 7) {
    console.log(`Aluno em recuperação. Média: ${media.toFixed(1)}`);
    return "Recuperação";
  } else {
    console.log(`Aluno reprovado por nota. Média: ${media.toFixed(1)}`);
    return "Reprovado";
  }
}


// Verificar media com recuperacao
function verificarMediaComRecuperacao(nota1, nota2, notaRecuperacao = null) {
  let media = (nota1 + nota2) / 2;

  if (media >= 7) {
    console.log(`Aluno aprovado! Média: ${media.toFixed(1)}`);
    return "Aprovado";
  } else if (media >= 5 && media < 7) {
    console.log(`Aluno em recuperação. Média: ${media.toFixed(1)}`);
    
    if (notaRecuperacao !== null) {
      let novaMedia = (media + notaRecuperacao) / 2;
      if (novaMedia >= 5) {
        console.log(`Aluno aprovado na recuperação! Nova média: ${novaMedia.toFixed(1)}`);
        return "Aprovado na Recuperação";
      } else {
        console.log(`Aluno reprovado mesmo após recuperação. Nova média: ${novaMedia.toFixed(1)}`);
        return "Reprovado";
      }
    } else {
      console.log("Nota da recuperação ainda não informada.");
      return "Recuperação Pendente";
    }
  } else {
    console.log(`Aluno reprovado por nota. Média: ${media.toFixed(1)}`);
    return "Reprovado";
  }
}


// Função principal
function avaliarAluno(totalAulas, faltas, nota1, nota2, notaRecuperacao = null) {
  let percentualFaltas = (faltas / totalAulas) * 100;
  let percentualPresenca = 100 - percentualFaltas;
  let media = (nota1 + nota2) / 2;
  let situacao = "";

  if (percentualPresenca < 75) {
    situacao = "Reprovado por frequência";
  } else {
    if (media >= 7) {
      situacao = "Aprovado";
    } else if (media >= 5 && media < 7) {
      if (notaRecuperacao !== null) {
        let novaMedia = (media + notaRecuperacao) / 2;
        situacao = (novaMedia >= 5) ? "Aprovado na recuperação" : "Reprovado na recuperação";
      } else {
        situacao = "Recuperação pendente (nota não informada)";
      }
    } else {
      situacao = "Reprovado por nota";
    }
  }

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


// Chamando as funções:
Frequencia(faltas, totalAulas);
verificarMedia(nota1, nota2);

// Só se houver recuperação:
if (media >= 5 && media < 7) {
  var notaRecuperacao = parseFloat(prompt("Digite a nota da recuperação:"));
  verificarMediaComRecuperacao(nota1, nota2, notaRecuperacao);
  avaliarAluno(totalAulas, faltas, nota1, nota2, notaRecuperacao);
} else {
  avaliarAluno(totalAulas, faltas, nota1, nota2);
}

