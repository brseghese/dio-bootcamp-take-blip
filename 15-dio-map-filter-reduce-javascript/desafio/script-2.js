function filtraPares(arr) {
  return arr.filter(callback);
}

function callback(item) {
  return item % 2 === 0;
}

const nums = [1, 2, 3, 4, 5, 6];

console.log("Somente números pares: ", filtraPares(nums));

//

function filtraFrutas(arr) {
  return arr.filter(function (item) {
    return item.includes("maçã");
  });
}

const frutas = ["maçã galo", "maçã verde", "abacaxi", "laranja"];

console.log("Somente maçãs: ", filtraFrutas(frutas));

//

const obj = {
  value: 2,
};

function filtraImpares(arr, thisArg) {
  return arr.filter(function (item) {
    return item % this.value !== 0;
  }, thisArg);
} // o this não funciona com arrow function

console.log("Somente número impares: ", filtraImpares(nums, obj));
