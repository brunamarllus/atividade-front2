alert("Olá Aluno, verifique sua situação")
console.log("Mensagem")
var resposta = prompt("Informe seu nome:")
console.log(resposta)

var faltas = prompt("Quantas vezes você faltou?")
var totalAulas = prompt ("Qual o total de aulas ministradas")
var nota1 = prompt("Qual a sua primeira nota?")
var nota2 = prompt("Qual a sua segunda nota?")

var media = (parseFloat(nota1) + parseFloat(nota2)) / 2; //notas 1 e 2
var porcentagem = (qnt_faltas / aulas) * 100;

console.log("Sua média é " + media);
console.log("Sua porcentagem de faltas é " + porcentagem + "%");  
console.log("Você tem " + qnt_faltas + " faltas de um total de " + aulas + " aulas ministradas");
console.log("Sua nota de recuperação é " + recupercao);  


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

verificarFrequencia(10, 40); 
verificarFrequencia(12, 40); 

// Verificar media
function verificarMedia(P1, P2) {
  let media = (P1 + P2) / 2;

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

function verificarMediaComRecuperacao(P1, P2, notaRecuperacao = null) {
  let media = (P1 + P2) / 2;

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

// Programa que descreve toda a situacao do aluno

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
