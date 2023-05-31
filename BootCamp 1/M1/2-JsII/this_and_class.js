var nombre = "wewe";

var objPersona = {
  nombre: "Mario",
  b: {
    nombre: "fufu",
  },
  getNombre: function () {
    return this.nombre;
  },
};

// Cuando nosotros dentro de una función que se encuentra dentro de un objeto, dicha función es un método
// este método (función) si dentro de ella usamos el this. este hace referencia a las propiedades
// que se encuentran dentro del objeto.
// Ahora sino usamos el this, por defecto hacemos referencia a variable del global

console.log(nombre);
console.log(objPersona.getNombre());

// Class o Function (funciones constructoras)

// 01 crear una clase de product -> title, id, price
// 02 crear otra clase products que va ser una lista (array)
// 03 en la clase products hacer los métodos:
// a) insertProduct
// b) deleteProduct
// c) editPriceProduct

function Produtc(id, title, price) {
  this.id = id;
  this.title = title;
  this.price = price || 1;
}

function Produtcs() {
  this.list = [];
}

Produtcs.prototype.insertProduct = function (id, title, price) {
  const newProduct = new Produtc(id, title, price);
  this.list.push(newProduct);
  return this.list;
};
Produtcs.prototype.deleteProduct = function (id) {
  const product = this.list.find((e) => e.id === id); // {}
  const newList = this.list.filter((p) => p.id !== id); // []
  this.list = newList;
  return product;
};
Produtcs.prototype.editPriceProduct = function (id, price) {
  let indexProduct;
  this.list.map(function (e, index) {
    if (id === e.id) {
      indexProduct = index;
    }
  }); //          1
  // [{id:1},{id:2},{id:3}]
  if (!indexProduct) return "id not found";
  this.list[indexProduct].price = price;
  return this.list;
};

const listOneProducts = new Produtcs();

console.log(listOneProducts);
listOneProducts.insertProduct(1, "cacao", 10);
listOneProducts.insertProduct(2, "coco", 11);
listOneProducts.insertProduct(3, "hielo");
console.log(listOneProducts);
listOneProducts.deleteProduct(2);
console.log(listOneProducts);

console.log(listOneProducts.editPriceProduct(20));
console.log(listOneProducts);

const listTwoProducts = new Produtcs();

console.log(listTwoProducts);

// Class

class Produtc {
  constructor(id, title, price) {
    this.id = id;
    this.title = title;
    this.price = price || 1;
  }
}

class Produtcs {
  constructor() {
    this.list = [];
  }
}

Produtcs.prototype.insertProduct = function (id, title, price) {
  const newProduct = new Produtc(id, title, price);
  this.list.push(newProduct);
  return this.list;
};
Produtcs.prototype.deleteProduct = function (id) {
  const product = this.list.find((e) => e.id === id); // {}
  const newList = this.list.filter((p) => p.id !== id); // []
  this.list = newList;
  return product;
};
Produtcs.prototype.editPriceProduct = function (id, price) {
  let indexProduct;
  this.list.map(function (e, index) {
    if (id === e.id) {
      indexProduct = index;
    }
  }); //          1
  // [{id:1},{id:2},{id:3}]
  if (!indexProduct) return "id not found";
  this.list[indexProduct].price = price;
  return this.list;
};
