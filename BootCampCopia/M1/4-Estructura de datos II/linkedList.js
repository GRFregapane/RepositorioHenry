// LINKEDLIST -> la desarrollamos en un {}
/*
 {}->{}->{}

 LINKEDLIST -> {head{node1{node2{node3{{{{{{}}}}}}}}}}  objetos anidados <- multidimensional

 [[[[[[]]]]]] array multidimensionales
*/

// La linkedList va a contener Nodos

const linkedList = {
  head: null,
};

const node1 = { data: [1, {}, {}, {}], next: null };
const node2 = { data: [2, {}, {}, {}], next: null };
const node3 = { data: [3, {}, {}, {}], next: null };

console.log(linkedList);
console.log(linkedList.head === null);

linkedList.head = node1;
linkedList.head.next = node2;
linkedList.head.next.next = node3;

console.log(linkedList);

// for (const key in linkedList) {
//    console.log(key)
// }

// Current es el APUNTADOR (lugar donde estamos parados)
let current = linkedList;

console.log(current);
if (current.head !== null) current = current.head;

console.log(current);
if (current.data[0] === 3) console.log("yheee");

current = current.next;
console.log(current);
if (current.data[0] === 3) console.log("yheee");

console.log(current);

current = current.next;
if (current.data[0] === 3) console.log("yheee");
console.log(current);

if (current.next === null) console.log("el fin");
// while(){

// }

/*
current =
{ head: 
   { data: [ 1, {}, {}, {} ],
     next: 
      { data: [ 2, {}, {}, {} ],
        next: { data: [ 3, {}, {}, {} ], next: null } } } }

current = current.head
{ data: [ 1, {}, {}, {} ],
  next: 
   { data: [ 2, {}, {}, {} ],
     next: { data: [ 3, {}, {}, {} ], next: null } } }

current = current.next
{ data: [ 2, {}, {}, {} ],
  next: { data: [ 3, {}, {}, {} ], next: null } }

current = current.next
{ data: [ 3, {}, {}, {} ], next: null }


*/

// CLASES
class LinkedList {
  constructor() {
    this.head = null;
    this._length = 0;
  }
}

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

const listita = new LinkedList();

LinkedList.prototype.remove = function () {
  if (this.head === null) return "list vacia"; // lista vacia
  if (this.head.next === null) this.head = null; // lista con un solo node
  let current = this.head;

  while (current.next.next) {
    current = current.next;
  }
  const nodeDelete = current.next;
  current.next = null;
  this._length--
  return nodeDelete;
};

LinkedList.prototype.add = function (value) {
  const newNode = new Node(value);
  console.log(newNode);
  let current = this.head;
  if (this.head === null) {
    this.head = newNode;
    this._length++;
    return "he creado mi primer node";
  }
  while (current.next) {
    // verificar si current es null
    current = current.next;
  }
  current.next = newNode;
  this._length++;
  return "he creado otro node mas";
};

console.log(listita);
console.log(listita.add(8));
console.log(listita.add(23));
console.log(listita.add(3));
// console.log(listita.remove());

console.log(listita);

/*

LINKEDLIST -> {head {node1 {node3{ } } } }

current -->       current node1 current.next.data 2
                                  saveAllNextNode2 =  current.next.next node3{ }
                 current.next = null                 
                 current.next = node3{ }


LinkedList { head: 
   Node { data: 8,
     next: Node { data: 23, next: Node { data: 3, next: null } } },
  _length: 3 }


  saveTodoLoQueVieneLuego = Node { data: 3, next: null }

  current <- = this.head
  current.next = null

LinkedList { head: 
   Node { data: 8,
     next:null

     current.next = saveTodoLoQueVieneLuego
LinkedList { head: 
   Node { data: 8,
     next:Node { data: 3, next: null }


*/
