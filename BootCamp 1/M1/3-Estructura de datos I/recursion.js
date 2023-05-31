/*
RECURSION
1. una funcion que se llama a si misma
2. caso base o caso corte o corte
3. necesitamos que la function retornada tenga argumentos diferente
*/

function recursion(num) {
  if (num > 0) {
    // console.log("he ejecutado recursion() ", num);
    return recursion(num - 1);
  } else return "he finalizado";
}

console.log(recursion(5));

// RECURSION <-> BUCLE <-> ITERADOR
// {{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}
// [{{[[[]]]}}]
// RECURSION

const arr = [2, 3, 4, 5];

function sumArr(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    let sum = arr.pop();
    return sum + sumArr(arr);
  }
}
console.log(sumArr(arr));

// FOR IN FOR EACH FOR OF FOR MAP WHILE FILTER FIND <-> BUCLES <-> ITERADORES
const arr2 = [2, 3, 4, 5];
function sumArr2(arr) {
  let sum = 0;
  while (arr.length > 0) {
    sum = sum + arr.pop();
  }
  return sum;
}
console.log(sumArr2(arr2));
