/*
*** Closure *** <- Plantilla

1. Definir una función dentro de otra función: La closure se crea cuando una función define una 
función interna dentro de sí misma. La función interna es lo que se conoce como la closure.

2. Acceder al contexto de la función padre, es decir a una variable externa desde 
la función interna: La closure debe acceder a una variable 
que está fuera de su ámbito, es decir, una variable que se encuentra en la función externa.

3. La funcion que está dentro debe interactuar con la variable (o params) de la funcion padre 
(es decir que está fuera de ella). La función padre debe Devolver la función interna.

*/

function primerClosure(obj2 = {}) {
  var obj = {};
  return function () {
    obj.edad = 1;
    obj2.cosa = "qqq";
    return obj;
  };
}

const instance1 = primerClosure(); // function () {obj.edad = 1; obj2.cosa = "qqq";};
console.log(instance1()); //

// dar valor por defecto

function zz(arr = [1]) {
  return arr;
}
console.log(zz());

// CLOSURE 2

function closureHulk() {
  const hulkArr = [];
  return function (value) {
    hulkArr.push(value);
    return hulkArr;
  };
}
const instance2 = closureHulk(); // function (value) {hulkArr.push(value) return hulkArr ;};
console.log(instance2(2)); //
console.log(instance2(32));
console.log(instance2(1));

const instance3 = closureHulk(); // function (value) {hulkArr.push(value) return hulkArr ;};
console.log(instance3(555));

// Closure 3
function closureObj() {
  const hulkObj = {};
  return function (key, value) {
    hulkObj[key] = value;
    return hulkObj;
  };
}
const obj1 = closureObj();
console.log(obj1("cacao", 23));
console.log(obj1("cafe", 321223));
console.log(obj1("dulce", 1));

// Closure 3
function closureObj2(hulkObj = {}) {
  const hola = function (key, value) {
    hulkObj[key] = value;
    return hulkObj;
  };
  return hola;
}
const obj2 = closureObj2();
console.log(obj2("cacao", 0));
console.log(obj2("cafe", 0));
console.log(obj2("dulce", 0));

//
function book() {
  let str = "";
  let dede = function (texto) {
    str = str + " " + texto;
    return str;
  };
  return dede
}
let hoyYsimpre = book()
console.log(hoyYsimpre("He aquí la primera historia"))

console.log(hoyYsimpre(", la primera descripción"))


// CLOSURE en BLOQUE y con var o let
var creaFuncion = function(){
	var arreglo = []; // [f{}, f{}, f{}]
 // var i = undefined
	for ( let i=0; i < 3; i++){ // var i el dato enlace   // i = 0
		arreglo.push(
			function(){
				console.log(i);
                return i
			}
		)
	}
	return arreglo;
}
 
var arr = creaFuncion();
// arr -> arreglo [f(){log(i)},f(){log(i)},f(){log(i)}]

arr[0]() // 3 sale un 3, qué esperaban ustedes??
arr[1]() // 3
arr[2]() // 3



function book2() {
    let str = "";
    let dede = function () {
      str = str + " " + "hola me duplico";
      return str;
    };
    return dede
  }
  let hoyYsimpre2 = book2()
  console.log(hoyYsimpre2())
  console.log(hoyYsimpre2())
  console.log(hoyYsimpre2())
  console.log(hoyYsimpre2())
  console.log(hoyYsimpre2())