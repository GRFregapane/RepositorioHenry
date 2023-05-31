const persona = { id: 2 };
const arr = [7, 4, 5, 6, 7, 4, 4, "a", "A", "a", persona, persona];

// SET -> una Clase

const newArrSet = new Set(arr);
// Set es una especie de objeto array con valores únicos
console.log(newArrSet);
newArrSet.add(222)
console.log(newArrSet.size);
console.log(newArrSet);