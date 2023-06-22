const array = [2, 4, 32, 12, 6, 5, 7, 8, 11];

function maxValue(arr) {
  let max = arr[0];
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
    }
  }
  return max;
}

function maxValueComprens(arr) {
  // O(n)
  let max = arr[0];
  for (const element of arr) {
    element > max ? (max = element) : null;
  }
  return max;
}
console.log(maxValueComprens(array));

// 1000 -> steps -> 1000     10 -> 10    n input n pasos O(n)
// COMPLEJIDAD de un ALGORITMO siempre debemos pensar el pero de los casos

function maxMinValue(arr) {
  let max = arr[0];
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
    }
  }
  let min = arr[0];
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] < min) {
      min = arr[index];
    }
  }
  return [max, min];
}
// O(n*2) || O(n+n)
console.log(maxMinValue(array));

function maxMinValueEficiente(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let index = 1; index < arr.length; index++) {
    console.log("se ejecuta ", index, " cantidad de veces");
    if (arr[index] > max) max = arr[index];
    if (arr[index] < min) min = arr[index];
  }
  return [max, min];
}
console.log(maxMinValueEficiente(array));

function searchValueEficiente(arr, value) {
  for (let index = 0; index < arr.length; index++) {
    console.log("se ejecuta ", index + 1, " cantidad de veces");
    if (arr[index] === value) return true;
  }
  return false;
}
console.log(searchValueEficiente(array, 11));
// O(n)
//                 i        j
const array2 = [2, 4, 38, 12, 6, 5, 7, 31, 32, 32];
function oN2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log("se ejecuta ", j, " cantidad de veces");
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}
console.log(oN2(array2));
// for(){for(){}}  O(n**2)
// iterador(){iterador(){}}  O(n**2)
// iterador(){iterador(){iterador(){}}}  O(n**3)

//! DIVIDE y CONQUISTA
// * Ordenado de menor a mayor <- Lista Ordenada
// Ejemplo: [{num:101, name: "juancito"}, 107, 122, 200, 201, 202, 250, 277, 300, 310,etc... 999]

const list = [101, 107, 122, 200, 201, 202, 250, 277, 300, 310, 999];
function searchName(list, num) {
    // let pivotMedium = Math.floor(list.length/2)
    // console.log(pivotMedium)
    // if(list[pivotMedium] === num){
    //     return true 
    // }
    //* RECURSION tomar la mitad que queda y aplicar recursión
  for (let i = 0; i < list.length; i++) {
    if (list[i] === num) return true;
  }
  return false;
}
console.log(searchName(list, 200))
// O (n)
