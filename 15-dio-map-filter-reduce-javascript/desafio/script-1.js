const obj1 = {
  value: 2,
};

const obj2 = {
  value: 3,
};

function mapComThis(arr, thisArg) {
  return arr.map(function (item) {
    return item * this.value;
  }, thisArg);
}

const nums = [1, 2, 3, 4, 5];

console.log("com o this -> obj1", mapComThis(nums, obj1)); // [2, 4, 6, 8, 10]
console.log("com o this -> obj2", mapComThis(nums, obj2)); // [3, 6, 9, 12, 15]

function mapSemThis(arr) {
  return arr.map(function (item) {
    return item * 4;
  });
}

console.log("sem o this ->", mapSemThis(nums)); // [4, 8, 12, 16, 20]

console.log("array original", nums); // [1, 2, 3, 4, 5]
