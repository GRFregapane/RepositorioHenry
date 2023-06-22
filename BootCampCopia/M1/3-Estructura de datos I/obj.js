const obj = {
  a: 1,
};

obj.name = "Jimy";

console.log(obj);

for (const key in obj) {
  console.log(key);
  console.log(obj[key]);
}

if (obj.hasOwnProperty("name")) {
  console.log("si tiene?", obj.hasOwnProperty("name"));
  console.log("si tiene?", obj.hasOwnProperty("otra"));
}
