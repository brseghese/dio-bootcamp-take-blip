let precos = [100, 200, 300, 400, 500];

function somaNumeros(arr) {
  return arr.reduce(function (previous, current) {
    return previous + current;
  });
}

console.log("A soma dos números é ", somaNumeros(precos));

function saldo(arr, saldo) {
  return arr.reduce(function (prev, curr) {
    return prev - curr;
  }, saldo);
}

console.log("O Saldo disponível é: ", saldo(precos, 2000));

//

const lista = [
  { name: "arroz", preco: 30 },
  { name: "feijão", preco: 12 },
  { name: "carne", preco: 30 },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
  return lista.reduce(function (prev, curr, index) {
    console.log(index);
    console.log(prev);
    console.log(curr);
    return prev - curr.preco;
  }, saldoDisponivel);
}

console.log("O Saldo disponível é: ", calculaSaldo(saldoDisponivel, lista));
