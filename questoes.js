// Questão 01
function isPerfectSquare(x) {
  // Verifica se o número é um quadrado perfeito (ex: 25 é porque 5*5 = 25)
  let s = Math.floor(Math.sqrt(x));
  return s * s === x;
}

function isFibonacci(num) {
  // Um número pertence à sequência de Fibonacci se uma dessas expressões for um quadrado perfeito
  return (
    isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4)
  );
}

function questao1() {
  // Solicita um número ao usuário e verifica se pertence à sequência de Fibonacci
  let num = parseInt(
    prompt(
      "Informe um número para verificar se pertence à sequência de Fibonacci:"
    )
  );

  // Se o número for Fibonacci, exibe uma mensagem positiva, caso contrário, negativa
  if (isFibonacci(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
  }
}

// Questão 02
function countLetterA(str) {
  // Converte toda a string para minúsculas e conta quantas vezes 'a' aparece
  return str.toLowerCase().split("a").length - 1;
}

function questao2() {
  // Solicita uma string ao usuário para verificar a ocorrência da letra 'a'
  let str = prompt(
    "Informe uma string para verificar a ocorrência da letra 'a':"
  );

  // Conta quantas vezes a letra 'a' aparece e mostra a mensagem
  let count = countLetterA(str);
  if (count > 0) {
    console.log(`A letra 'a' aparece ${count} vezes na string.`);
  } else {
    console.log("A letra 'a' não aparece na string.");
  }
}

// Questão 03
function questao3() {
  // Este código é um loop simples que soma números até um índice
  let INDICE = 12;
  let SOMA = 0;
  let K = 1;

  // Loop que vai adicionando valores à SOMA enquanto K é menor que INDICE
  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }

  // Exibe o valor final da variável SOMA
  console.log(`O valor final da variável SOMA é ${SOMA}`);
}

// Questão 04
function questao4() {
  console.log("Padrões lógicos:");
  console.log("a) 1, 3, 5, 7, __ = 9 (números ímpares consecutivos)");
  console.log("b) 2, 4, 8, 16, 32, 64, __ = 128 (potências de 2)");
  console.log("c) 0, 1, 4, 9, 16, 25, 36, __ = 49 (quadrados perfeitos: n*n)");
  console.log("d) 4, 16, 36, 64, __ = 100 (quadrados de números pares)");
  console.log("e) 1, 1, 2, 3, 5, 8, __ = 13 (sequência de Fibonacci)");
  console.log(
    "f) 2, 10, 12, 16, 17, 18, 19, __ = 20 (alternância entre pares e ímpares)"
  );
}

// Questão 05
function questao5() {
  console.log(
    "Estratégia para descobrir qual interruptor controla cada lâmpada:"
  );
  console.log(
    "1. Ligue o primeiro interruptor e deixe ligado por alguns minutos. Depois desligue-o."
  );
  console.log("2. Ligue o segundo interruptor e vá até a sala das lâmpadas.");
  console.log("3. A lâmpada acesa é controlada pelo segundo interruptor.");
  console.log(
    "4. A lâmpada que estiver quente, mas apagada, é controlada pelo primeiro interruptor."
  );
  console.log(
    "5. A lâmpada apagada e fria é controlada pelo terceiro interruptor."
  );
}

// Função principal que roda todas as opções, permitindo o usuário escolher o que executar
function main() {
  while (true) {
    // Solicita ao usuário qual questão deseja executar
    let escolha = prompt(
      "\nEscolha a questão que deseja executar:\n" +
        "1. Verificar se um número pertence à sequência de Fibonacci\n" +
        "2. Contar a ocorrência da letra 'a' em uma string\n" +
        "3. Valor final da variável SOMA\n" +
        "4. Completar os padrões lógicos\n" +
        "5. Descobrir qual interruptor controla cada lâmpada\n" +
        "6. Sair\nDigite o número da questão ou '6' para sair:"
    );

    // Case para chamar a função correspondente à escolha do usuário
    switch (escolha) {
      case "1":
        opcao1(); // Executa opção 1
        break;
      case "2":
        opção2(); // Executa opção 2
        break;
      case "3":
        opção3(); // Executa opção 3
        break;
      case "4":
        opção4(); // Executa opção 4
        break;
      case "5":
        opção5(); // Executa opção 5
        break;
      case "6":
        console.log("Você saiu!");
        return; // Sai do programa
      default:
        console.log("Escolha inválida. Tente novamente."); // Se a escolha for inválida
    }
  }
}

// Executa o programa principal
main();

// By: José Marcos Silva de Moura Albuquerque
