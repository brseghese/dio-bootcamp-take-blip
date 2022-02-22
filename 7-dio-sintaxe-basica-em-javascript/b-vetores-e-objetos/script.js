// o que são vetores ou arrays

// como declarar um array
let array1 = ["string", 1, true];
// deve ser declarado entre colchetes "[]";
console.log(array1);

// um array pode guardar difentes valores inclusive outros arrays
let array2 = [
  "string",
  1,
  true,
  ["array1"],
  ["array2"],
  ["array3"],
  ["array4"],
];

// como acessar o índice de um array
console.log(array2[0]);

// manipulando um array

//forEach - realiza uma função para cada item do array
array2.forEach(function (item, index) {
  console.log(item, index);
});

//push - add item no final do array
array2.push("novo item");
console.log(array2);

//pop - remove o último item do array
array2.pop();
console.log(array2);

//shift - remove o primeiro item do array
array2.shift();
console.log(array2);

//unshift - add item no início do array
array2.unshift("novo item");
console.log(array2);

//indexOf - retorna o índice de um item do array
console.log(array2.indexOf(true));

//splice - remove ou substitui item por índice
array2.splice(0, 3);
console.log(array2);

//slice - retorna uma parte de um array existente
let novoArray = array2.slice(0, 3);
console.log(novoArray);

// o que são objetos

// como declarar um objeto
let object1 = { propriedade1: "valor1", propriedade2: "valor2" };
// deve ser declarado entre chaves "{}";
console.log(object1);

// assim como arrays as propriedades de objetos podem guardar quaisquer valores
let object2 = {
  string: "string",
  number: 1,
  boolean: true,
  array: ["array"],
  objectInterno: { objetoInterno: "objeto Interno" },
};

// como acessar propriedades de objetos
// usando ponto "."
console.log(object2.objectInterno);

// manipulando objeto

// desestruturando objeto
let string1 = object2.string;
let number1 = object2.number;
let boolean1 = object2.boolean;
console.log(string1, number1, boolean1);

// desestruturando usando chaves
let { string, number, boolean, objectInterno } = object2;
console.log(string, number, boolean, objectInterno);
