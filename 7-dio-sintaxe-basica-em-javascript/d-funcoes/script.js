// funções - functions

// como declarar
// deve ser declarada usando a palavra function seguida de "()" e "{}"

function funcao() {
  console.log("mensagem de uma função");
}

// chamando a função
funcao();

// função com parâmetros
// definindo parâmetros
function mensagem(primeiro, segundo) {
  console.log(primeiro, segundo);
}

// chamando a função atribuindo valor aos parâmetros
mensagem("Tudo certo", "jovem!");

// tipos de função

// função declarativa
// deve ser declarada usando a palavra reservada function seguida do nome da funçao, parênteses "()" e chaves "{}"
// deve ser nomeada obrigatioriamente

function nomeDaFuncao() {
  alert("Sou uma função declarativa!");
}

// devemos chamar a função para ver o resultado
// chamando a função
nomeDaFuncao();

// expressão de função
// são funções atribuídas à expressões
// a nomeação é opcional

// com nomeação
var funcao1 = function funcao() {
  alert("Sou uma expressão de função nomeada!");
};

funcao1();

// sem nomeação
var funcao2 = function () {
  alert("Sou uma expressão de função não nomeada!");
};

funcao2();

// arrow Function
// função de expressão de sintaxe curta
// sempre anônima, não pode ser nomeada
// deve ser declarada com parênteses "()", seguido de "=>" e depois chaves "{}"

var funcao = () => {
  alert("Sou uma função anônima!");
};

funcao();
