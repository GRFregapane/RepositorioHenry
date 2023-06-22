//*

/*

{
    root: 10
    l{
        v: 2
        l:{
            v:3
            l:null
            r:null
        }
        r:{
            v:4
            l:null
            r:null
        }
    }
    r{
        v:3
        l:{
            v:9
            l:null
            r:null
        }
        r:{
            v:21
            l:{}
            r:{}
        }
    }
}

{{{{}{}}{{}{}}}{{{}{}}{{}{}}}}
{} objetos anidados -> RECURSION 
*/

// class TREE {
//     constructor(value) {
//         this.root = value
//         this.left=null
//         this.right= null
//     }
// }
// class Node {
//     constructor(value) {
//         this.value = value
//         this.left=null
//         this.right= null
//     }
// }

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = 23;
const node1 = new BST(8);
const node2 = new BST(32);
const node3 = new BST(3);
const node4 = new BST(12);
const node5 = new BST(31);

//! para crear un BST (binary search tree), un árbol binario de búsqueda
const treeTest = new BST(root);
console.log(treeTest);
if (!treeTest.left && node1.value<=treeTest.value ) {
  treeTest.left = node1;
} //* paso a paso vamos creando, vamos insertando los node según la lógica BST
treeTest.right = node2;
treeTest.left.left = node3;
treeTest.left.right = node4;
treeTest.right.left = node5;
console.log(treeTest);

/*
BST { value: 23,
  left: 
   BST { value: 8,
     left: BST { value: 3, left: null, right: null },
     right: BST { value: 12, left: null, right: null } },
  right: 
   BST { value: 32,
     left: BST { value: 31, left: null, right: null },
     right: null } }
*/

//!para RECORRER
//TODO: breadthFirstSearch
//* es un recorrido lineal, de arriba hacia abajo (por los niveles) y de izquierda a derecha como
//* cuando leemos un libro
BST.prototype.breadthFirstSearch= function(value){
}
//TODO: depth-first-search (DFS)
//* se divide en 3 maneras:
// Pre-order
// In-order
// Post-order

/*
input -> [23, 8, 32, 3, 12, 31]  <- BST ->
Ejemplo:     (23)          ----> nivel 0
            /     \
         (8)      (32)      ----> nivel 1
        /  \      /  \
      (3)  (12) (31)       ----> nivel 2
                
*/
//* Pre-order -> DLR -> VLR  ->  value left right
// Pre-order -> ["*23*", 8, 3, 12, 32, 31 ]

//* In-order -> LVR  ->  left value right
// In-order -> [3, 8, 12, "*23*", 31, 32]

//* Post-order -> LRV  ->  left right value
// Post-order -> [3, 12, 8, 31, 32, "23"]


//si nuestro nodo principal vale 10 y queremos
// insertar otro nodo con un valor menor este va en la izquierda y si es mayor va en la derecha.
BinarySearchTree.prototype = {
  constructor: BinarySearchTree,

insert: function (node, current) {
    if (node.value < current.value) {
      if (current.left === null) {
        current.left = node;
      } else {
        this.insert(node, current.left);
      }
    } else if ( node.value > current.value ){
      if (current.right === null) {
        current.right = node;
      } else {
        this.insert(node, current.right);
      }
    }
  },

  add: function (value) {
    var node = {
      value: value,
      left: null,
      right: null
   }

   if (this._root === null) {
      this._root = node;
    } else {
      this.insert(node, this._root);
    }
  },
}

//La función add es la principal, esta es la que llamaremos al insertar un nuevo valor, creara un
// nuevo nodo y primero verificara si nuestro árbol esta vacío, si lo esta insertara el nuevo nodo 
//en _root si no lo esta le para el nodo y el nodo actual (current) a la función insert, esta función
// recibe el nodo a insertar y el nodo actual en el que estamos buscando un lugar vacío, comprobamos 
//donde insertar nuestro valor, si es mas pequeño va a la izquierda y si es mas grande a la derecha, 
//si el nodo hijo en donde queremos insertar el nuevo valor (ya sea node.left o node.right) esta vacío
// le asignamos el nuevo valor, si ya esta ocupado por otro nodo usamos la función de manera
// recursiva this.insert(node, current.left); ahora pasando el nodo de la izquierda o derecha como el 
//current node, con estas funciones podemos insertar nuevos nodos en nuestro árbol.

//Remove
//Esta es el método mas complejo de los arboles, ya que dependiendo de la ubicación del nodo a eliminar 
//necesitamos mover sus valores hijos. Empezaremos con una función que busca la ubicación del nodo a eliminar 
//y si lo encuentra regresa el nodo y su padre si no lo encuentra regresa null:

findValues: function(value, current, parent) {
  if (current === null) {
    return null;
 }

  if (value < current.value) {
    return this.findValues(value, current.left, current);
  } else if (value > current.value) {
    return this.findValues(value, current.right, current);
  } else {
    return {
      current,
      parent
    }
  }
}

//igualmente usamos recursión para encontrar el nodo.
//La función remove se compone de lo siguiente:

remove: function (value) {
  var replacement = null,
      replacementParent = null;
  var v = this.findValues(value, this._root, null);
  if (v !== null) {
    var childCount = (v.current.left !== null ? 1 : 0) + (v.current.right !== null ? 1 : 0);
    if (v.current === this._root) {
    } else {
    }
  }
}

//Creamos dos variables que usaremos posteriormente, obtenemos el nodo y su padre, si el método regresa
// null se detiene la ejecución del código, si el nodo existe pasamos a obtener el numero de hijos que tiene:

var childCount = (v.current.left !== null ? 1 : 0) + (v.current.right !== null ? 1 : 0);

//verificamos si el nodo a eliminar es el nodo principal _root si lo es dividimos la problemática en tres casos,
// si el nodo no tiene hijos, si solo tiene uno o si tiene los dos:

if (v.current === this._root) {

  switch (childCount) {
    case 0:
      this._root = null;
     break;
     case 1:
    this._root = (v.current.right === null ? v.current.left : v.current.right)
      break;
    case 2:
      replacement = this._root.left;

      while(replacement.right !== null) {
        replacementParent = replacement;
        replacement = replacement.right;
      }

      if (replacementParent !== null) {
        replacementParent.right = replacement.left;
      
        replacement.right = this._root.right;
      
        replacement.left = this._root.left;
      } else {
        replacement.right = this._root.right;
      }
      this._root = replacement;
  }
}

//En el caso de que no tenga hijos simplemente cambiamos su valor por null, si tiene un hijo necesitamos
// saber cual es el valor que existe si el de la izquierda o el de la derecha y lo asignamos como nodo 
//principal, si tiene dos hijos es mas complejo:
//Buscamos en el nodo izquierdo el valor mas grande que tenga recorriendo todos los nodos del lado derecho
// si es que el primer nodo replacement tiene un hijo derecho.

replacement = this._root.left;

while(replacement.right !== null) {
  replacementParent = replacement;
  replacement = replacement.right;
}

//si encontramos el nodo derecho de replacement tendremos las dos variables replacementParent y replacement 
//con el ultimo nodo del lado derecho y su padre respectivamente.
//tenemos que intercambiar los valores:

if (replacementParent !== null) {
 replacementParent.right = replacement.left;
   replacement.right = this._root.right;
  replacement.left = this._root.left;
}

//Primero asignamos al nodo derecho de replacementParent (que seria el mismo replacement) el valor del nodo 
//izquierdo de replacement (si es que este existe y recordemos que replacement no tiene hijo derecho ya que 
//este es el ultimo hijo derecho de la cadena, si no existe sera null) por ultimo asignamos el hijo izquierdo
// y derecho de _root a replacement para que en la ultima linea remplacemos _root con replacement, pero aun 
//existe un caso mas, si es que no encontramos un hijo derecho de replacement simplemente le asignamos el 
//hijo derecho de _root a este valor vacío replacement.right = this._root.right;
//Si el nodo a eliminar no es el nodo principal (_root)

//Si el nodo es un nodo hijo el problema también se resuelve dependiendo la cantidad de hijos que tenga:

if (v.current === this._root) {
} else {

  switch (childCount) {
    case 0:
      if (v.current.value < v.parent.value) {
        v.parent.left = null;
          } else {
        v.parent.right = null;
      }
      break;

    case 1:
      if (v.current.value < v.parent.value) {
        v.parent.left = (v.current.left === null ? v.current.right : v.current.left);
      } else {
      v.parent.right = (v.current.left === null ? v.current.right : v.current.left)
      }
      break;
   
      case 2:
      replacement = v.current.left
      replacementParent = v.current;

      while (replacement.right !== null) {

        replacementParent = replacement;

        replacement = replacement.right;

      }

      replacementParent.right = replacement.left;

      replacement.right = v.current.right;

      replacement.left = v.current.left;

      if (v.current.value < parent.value) {
        v.parent.left = replacement;

      } else {
        v.parent.right = replacement;
      }
  }
}

//En el caso de que el nodo no tenga hijos, verificamos si es el nodo izquierdo o derecho que queremos eliminar:

if (v.current.value < v.parent.value) {
  v.parent.left = null;
} else {
  v.parent.right = null;
}

//Si el valor del nodo a eliminar es menor es el izquierdo, si es mayor es el derecho.
//Si el nodo tiene un hijo lo intercambiamos por el nodo a eliminar igualmente comprobando
// el lugar del nodo a eliminar (izquierda, derecha):

if (v.current.value < v.parent.value) {
  v.parent.left = (v.current.left === null ? v.current.right : v.current.left);
} else {
  v.parent.right = (v.current.left === null ? v.current.right : v.current.left);
}

//Por ultimo, si el nodo tiene dos hijos, empezando por el nodo izquierdo del nodo a eliminar 
//buscamos el ultimo nodo derecho que exista, si este tiene un hijo izquierdo se intercambia por el nodo replacement:

replacementParent.right = replacement.left;

//A replacement se le asignan los hijos del nodo a eliminar:

replacement.right = v.current.right;

replacement.left = v.current.left;

//Buscamos si el nodo a eliminar esta del lado izquierdo o derecho y lo remplazamos por replacement:

if (v.current.value < parent.value) {
  v.parent.left = replacement;
} else {
  v.parent.right = replacement;

}

//Contains

//Este método es util para saber si un valor se encuentra en el árbol:

contains: function (value) {
  return this.findValue(value, this._root);
}

findValue: function(value, current) {
  if (current === null) {
    return false;
  }

  if (value < current.value) {
    return this.findValue(value, current.left);
  } else if (value > current.value) {
    return this.findValue(value, current.right);
  } else {
    return true;
  }
},

//a contains se le pasa el valor que queremos buscar y este ejecuta la función findValue que de manera 
//recursiva buscara el valor y regresara true si lo encuentra o false si no existe.

//Traverse:
//Este método sirve para recorrer todo el árbol y obtener los valores de cada nodo:


traverse: function(process) {
    function inOrder(node) {
      if (node) {
        if (node.left !== null) {
          inOrder(node.left);
        }
        process.call(this, node);

        if (node.right !== null) {
       inOrder(node.right);
        }
      }
    }
    inOrder(this._root);
}

//a este método se le pasa un callback como parámetro y dentro se declara una función recursiva para buscar
// cada valor en los nodos (izquierda y derecha) si el nodo existe se ejecuta el callback pasándole el nodo.
//Este método nos permite crear las siguientes funciones:
//Size:

size: function () {
  var length = 0;
 
  this.traverse(function(node) {
    length++;
  });
  return length;
}

//Cuenta el numero de nodos:
//ToArray

toArray: function () {
  var result = [];

  this.traverse(function(node) {
    result.push(node.value);
  });
  return result;
}

//Regresa un array con los valores de cada nodo de menor a mayor:
//ToString

toString: function() {
  return this.toArray().toString();

}
//Regresa la lista de números en formato string.
//Como podemos notar el método traverse ejecuta el callback cada vez que encuentra un nodo, de esta 
//manera podemos manejar el nodo como queramos, obtener su valor, agregarlo a un array, imprimirlo, etc.

//Creando un árbol
//Para finalizar crearemos un nuevo árbol:
var tree = new BinarySearchTree();

//podemos agregar nuevos valores:
tree.add(7);
tree.add(6);
tree.add(4);
tree.add(2);
tree.add(3);
tree.add(10);

//imprimirlo en array:
console.log(tree.toArray());

//eliminar nodos:
tree.remove(3);






