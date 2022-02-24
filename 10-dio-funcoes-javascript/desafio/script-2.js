function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

let pessoa1 = {
  nome: "Bruno",
  idade: 40,
};

let pessoa2 = {
  nome: "Liane",
  idade: 37,
};

console.log(calculaIdade.call(pessoa1, 10));
console.log(calculaIdade.apply(pessoa2, [10]));
