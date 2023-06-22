"use strict";
// No cambies los nombres de las funciones.
// expect(factorear(32)).toEqual([1, 2, 2, 2, 2, 2]);
// expect(factorear(33)).toEqual([1, 3, 11]);
// [1,2,2,2, 2, 2] 32 16 8 4 2
// [1,3,11] el factoreo de un número se descompone en serie de número primos <->  33  11
function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  const result = [1];
  let factor = 2;
  while (num > 1) {
    // num -> 5
    if (num % factor === 0) {
      // 5 % 5 === 0  SI
      result.push(factor); // [1, 2, 5];
      num = num / factor; // num -> 1
    } else {
      factor++;
    }
  }
  return result;
  // VER el CICLO, el FLOW del CODE
}
console.log(factorear(180)); //.toEqual([1,2,2,3,3,5]);
console.log(factorear(10)); //.toEqual([1,2,5]);
console.log(factorear(33)); //.toEqual([1,3,11]);
console.log(factorear(1)); //.toEqual([1]);

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap = true;
  while (swap) {
    swap = false;
    for (let index = 0; index < array.length - 1; index++) {
      if (array[index] > array[index + 1]) {
        let aux = array[index];
        array[index] = array[index + 1];
        array[index + 1] = aux;
        swap = true;
        console.log("in")
      }
    }
  }
  return array;
}
console.log(bubbleSort([1,2,3])); 
// console.log(bubbleSort([5, 1, 4, 2, 8])); //toEqual([1, 2, 4, 5, 8])
// pos     element intercambio  arrayResult
//0, 1    1 > 5 ->   1 5   [1, 5, 4, 2, 8]
//1, 2    5 > 4  ->  4 5   [1, 4, 5, 2, 8]
//2, 3    5 > 2  ->  2 5   [1, 4, 2, 5, 8]
//3, 4    5 > 8  ->  5 8   [1, 4, 2, 5, 8] <- Primer recorrido ¿?? ya está ordenado NO

//0, 1
//1, 2
//2, 3
//3, 4

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // indexI ++
  // indexJ === indexI -> indexJ--
  //           j-1
  //  j
  //              i
  // [1, 2, 4, 5, 8]
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j >= 1) {
      if (array[j] < array[j - 1]) {
        let aux = array[j]; // aux = 2
        array[j] = array[j - 1]; // [1, 2, 2, 5, 8]
        array[j - 1] = aux; // [1, 2, 4, 5, 8]
        j--;
      } else {
        j = 0;
      }
    }
  }
  return array;
}
console.log(insertionSort([5, 1, 4, 2, 8])); //toEqual([1, 2, 4, 5, 8])

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:                   j
  //                           i        
  //                 [1, 2, 4, 5, 8]
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        let aux = array[i]; // aux = 2
        array[i] = array[j]; // [1, 2, 2, 5, 8]
        array[j] = aux;
      }
    }
  }
  return array;
}
console.log(selectionSort([5, 1, 4, 2, 8])); //toEqual([1, 2, 4, 5, 8])
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
