// * # ITERADORES
// * ## Para modificar el objeto en si o buscar algún valor

// TODO: 1. for loop: Es el bucle tradicional en JavaScript que itera sobre una secuencia de valores.
// Se usa comúnmente cuando conocemos la cantidad exacta de iteraciones.

//                 0        1          2        3
const fruits = ["apple", "banana", "orange", "mango"];
const resultNew = [];
for (let fafa = 0; fafa < fruits.length; fafa++) {
  console.log(fruits[fafa]);
  if (fruits[fafa] === "orange") {
    fruits[fafa] = "sarasa";
  }
  if (fruits[fafa] !== "mango") {
    resultNew.push(fruits[fafa]);
  }
}
console.log(fruits);
console.log(resultNew);

// TODO: 2. while loop: El bucle while se repite mientras una condición especificada sea verdadera.
// Se recomienda su uso cuando no sabes cuántas veces se repetirá el bucle.

const colors = ["red", "green", "blue"];
let numIndex = colors.length - 1;
while (numIndex >= 0) {
  console.log(colors[numIndex]);
  numIndex--;
}

// TODO: 3. for...in loop: Este bucle itera sobre las propiedades enumerables de un objeto.
// Se recomienda su uso cuando necesitas recorrer las propiedades de un objeto.

const person = {
  name: "John",
  age: 30,
  city: "New York",
};
//* DOT NOTATION o BRACKET NOTATION
let keySave = "name";
console.log(person.name);
console.log(person["name"]);
console.log(person[keySave]);

for (const key in person) {
  console.log(key);
  console.log(person[key]);
}

// TODO: 4. for...of loop: Este bucle itera sobre objetos iterables como arrays y cadenas de texto.
// Es útil cuando necesitas recorrer los elementos de una estructura de datos.

const colores = ["red", "green", "blue", "purple", "pink"];
for (const color of colores) {
  console.log(color);
}
//!--------------------------------------------------------------------------------------------------------

// TODO: 5. forEach(f(){}): Es un método disponible en arrays que ejecuta una función de callback
// para cada elemento del array. Se utiliza para realizar una operación en cada elemento sin
// preocuparse por el índice o el control de la iteración.

const numbers = [1, 2, 7, 3];
let indexNecesario;
let newDta = [];
const este = numbers.forEach(function (element, index) {
  console.log(element);
  console.log(index);
  if (element === 7) {
    indexNecesario = index;
  }
});
console.log(este);
// * con uso del element y el index
const colorcitos = ["red", "green", "blue"];

//!------------------------------------------------------------------------------------------
// * ## Iteradores FUNCTION <- métodos que Retornan un nuevo array u objeto (el find)

// TODO: 6. map(f(){}): Es un método de arrays que crea un nuevo array con los resultados de aplicar
// una función de callback a cada elemento del array original. Se recomienda su uso cuando
// necesitas transformar cada elemento de un array en otro valor.
//*- Es ideal para editar datos (objetos generalmente) de un array (tipo upDate)

// const numbers = [1, 2, 3, 4, 5]; // para array numbers de 5 elementos -> retorna nuevo array de 5 elementos
// que según la condición el elemento tiene un valor o es undefined
//! EDITAR -> se toman [{},{},{}]
const cars = [
  { id: 1, brand: "Toyota", model: "Camry", year: 2020 },
  { id: 2, brand: "Honda", model: "Civic", year: 2019 },
  { id: 3, brand: "Ford", model: "Mustang", year: 2022 },
  { id: 4, brand: "Chevrolet", model: "Cruze", year: 2018 },
  { id: 5, brand: "BMW", model: "X5", year: 2021 },
];
const newArrMap = cars.map(function (element, index) {
  if (element.brand !== "Ford") {
    element.year = 2023;
    return element;
  }
});
console.log(newArrMap)

// El método map() siempre devuelve un nuevo array con la misma cantidad de elementos que el array original.

// TODO: 7. filter(): Es un método de arrays que crea un nuevo array con todos los elementos
// que pasan una prueba implementada. Se utiliza cuando necesitas filtrar
// elementos de un array según ciertos criterios.
//*- Es ideal para eliminar (filtrar) datos (gralmente objetos) que deseamos descartar en una búsqueda.

const products = [
  { id: 1, name: "Shirt", price: 20 },
  { id: 2, name: "Shoes", price: 50 },
  { id: 3, name: "Hat", price: 10 },
  { id: 4, name: "Jeans", price: 10 },
  { id: 5, name: "Socks", price: 5 },
];
const filerProducts = products.filter(function(element){
    if(element.price !== 10){
        return element
    }
})

console.log(filerProducts)



// TODO: 8. find(): El método find() devuelve el primer elemento de un array que cumple
// con una condición especificada en una función de callback. Se recomienda su uso cuando
// necesitas encontrar un único elemento que satisfaga ciertos criterios.

const pokemon = [
  { id: 1, name: "Pikachu", type: "Electric" },
  { id: 2, name: "Charizard", type: "Fire" },
  { id: 3, name: "Bulbasaur", type: "Grass" },
  { id: 4, name: "Squirtle", type: "Water" },
];

const findPoke = pokemon.find(function(elem){
    if(elem.type ==="Fire"){
        return elem
    }
})
console.log(findPoke)

// find() permite encontrar un elemento específico en un array.

// TODO: 9. reduce(): El método reduce() aplica una función de callback a un acumulador
// y a cada elemento de un array (de izquierda a derecha) para reducirlo a un solo valor.
// Se utiliza cuando necesitas obtener un único resultado combinando todos los elementos de un array.

const numeros = [7, 3, 4, 5]; // -> 19

// reduce() se utiliza para reducir un array a un solo valor.

// TODO: 10. indexOf() para buscar un elemento en un array:

const frutas = ["apple", "banana", "orange", "mango"];

//* El resultado es el índice del elemento buscado
// El bucle indexOf() es útil para encontrar la posición de un elemento específico en un array.

// Si el elemento no existe en el array, el método indexOf() devuelve -1.
// Ten en cuenta que el método indexOf() solo encuentra el primer elemento que coincide.
//* Si deseamos encontrar todas las ocurrencias de un elemento en un array,
//* utilizar bucle for o los métodos filter() o forEach().
