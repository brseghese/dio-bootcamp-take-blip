let usuarios = new Map([
  ["Bruno", "admin"],
  ["Liane", "admin"],
  ["Eduardo", "user"],
  ["Valentina", "user"],
]);

usuarios.set("Luna", "admin");

function getAdmins(map) {
  let array = [];
  for (let [key, value] of map) {
    if (value === "admin") {
      array.push(key);
    }
  }
  return array;
}

console.log(getAdmins(usuarios));
