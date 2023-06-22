// DICHAS ESTRUCTURAS
// STACK
// QUEUE

// LAS VAMOS A TRABAJAR CON MOLDES -> CLASES
// gallina tiene huevos
// [].length

class Stack {
  constructor() {
    this.data = [];
  }
//   sasa=()=>{
//     return "hi"
//   }
}

Stack.prototype.add = function (value) {
  this.data.push(value);
};

Stack.prototype.remove = function () {
  this.data.pop();
};

const stackito = new Stack(); // la instancia de una clase siempre es un objeto
console.log(stackito); // Stack { data: [], push:f() }

stackito.add(8);
stackito.add(9);
stackito.add(10);
console.log(stackito);

stackito.remove();
console.log(stackito);

//

function StackFunction() {
  this.data = [];
}

StackFunction.prototype.add = function (value) {
  this.data.push(value);
};

StackFunction.prototype.remove = function () {
  this.data.pop();
};
