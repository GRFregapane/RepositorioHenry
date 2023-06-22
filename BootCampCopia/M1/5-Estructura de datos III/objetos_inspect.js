// !OBJECT
/*
* Como recorrer, analizar, inspeccionar un OBJETO ¿?? con DOT NOTATION
TODO: Primero debemos recordar que para nosotros crear diferentes modelos de 
!ESTRUCTURAS DE DATOS
TODO: en js vamos a usar clases //!class
y para cada molde class al instanciar //* tenemos un objeto

* OK, iniciemos con nuestros {}
*/

//* Recomiendo que para cada problema tomemos un ejemplo bien reducido del problema a resolver y
// lo hagamos paso a paso sin la necesidad de crear aún la clase y sus métodos

//* Ejemplo 1:
// Crear una lista enlazada y un método //* add donde podamos ir agregando nodos

//* Ejemplo 2:
// Crear un método //* removeInit donde podamos remover siempre el nodo del inicio

// STEP 1. creo un objeto u objetos
const listaEnlazada = {
  head: null,
};

const node1 = {
  dta: 3,
  // {
  //     code:34243234,
  //     value:[{},{},{}]
  // },
  next: null,
};
const node2 = {
  dta: 5,
  next: null,
};
const node3 = {
  dta: 2,
  next: null,
};
// STEP 2. hardcodeo usando dot notation

// if(listaEnlazada.head === null){
//     listaEnlazada.head = node1
// }
// if(listaEnlazada.head.next === null){
//     listaEnlazada.head.next = node2
// }

if (listaEnlazada.head === null) {
  listaEnlazada.head = node1;
}
console.log(listaEnlazada);
listaEnlazada.head.next = node2;
listaEnlazada.head.next.next = node3;

let current = listaEnlazada.head;
console.log(current);
// { dta: 3, next: { dta: 5, next: { dta: 2, next: null } } }
current = current.next;
//  { dta: 5, next: { dta: 2, next: null } }
current = current.next;
// { dta: 2, next: null }
let current2 = listaEnlazada.head;
console.log(current2);
while (current2.next) {
  console.log(current2);
  current2 = current2.next;
}
console.log(current2);
current2.next = "hola juancito";

console.log(listaEnlazada);

//* Ejemplo 2:
// Crear un método //* removeInit donde podamos remover siempre el nodo del inicio

if (listaEnlazada.head === null) return "che esta vacia";
if (listaEnlazada.head.next !== null) {
  listaEnlazada.head = listaEnlazada.head.next;
}
console.log(listaEnlazada);

class STACK {
  constructor() {
    this.dta = [];
    // ¿cómo quitar un elemento del medio del array??
  }
}

const arrDta = [{ city: "Mza" }, { city: "Cartagena" }, { city: "misiones" }];
const result = [];
for (let index = 0; index < arrDta.length; index++) {
  if (arrDta[index].city !== "Cartagena") {
    result.push(arrDta[index]);
  }
}
console.log(result)

const stackita = new STACK();
console.log(stackita);

class QUEUE {
  constructor() {
    this.dta = [];
  }
}

class LINKLIST {
  constructor() {
    this.head = null; // {} <- Node
  }
}
class NODE {
  constructor() {
    this.dta = [];
    this.next = null; // {} <- Node
  }
}



const obj={
    a:1,
    b:2
}

//* ver si algo a recorrer es un objeto objeto -> {} para usar for in
if(typeof obj === "object" && !Array.isArray(obj)){
}