let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function validacao(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError("Envie os parâmetros"); // referência inválida

    if (typeof arr !== "object")
      throw new TypeError("O array precisa ser do tipo Object"); // variável ou parâmetro não é de um tipo válido

    if (typeof num !== "number")
      throw new TypeError("O num precisa ser do tipo Number");

    if (arr.length !== num)
      throw new RangeError("O tamanho do array é inválido"); //valor ou parâmetro numérico está fora de seus limites válidos

    return arr;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Este erro é um ReferenceError!");
      //console.log(e.name);
      //console.log(e.stack);
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Este erro é um TypeError!");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("Este erro é um RangeError!");
      console.log(e.message);
    } else {
      console.log("Tipo de erro não esperado: " + e);
    }
  }
}

console.log(validacao()); // sem parâmetro

console.log(validacao(5, 10)); // primeiro parâmetro tem que ser array

console.log(validacao([], "a")); // segundo parámetro tem que ser number

console.log(validacao(array, 5)); // segundo parâmetro num diferente do tamanho do arrray

console.log(validacao([1, 2, 3, 4, 5], 5)); // sem erro
