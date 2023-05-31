const { Queue, LinkedList, BinarySearchTree } = require('./DS');
/*
​
--------------------------------------- REPASO M1 ----------------------------------
​
? Abordaremos los siguientes temas: Closures, Recursion, Queues, Linkedlist, BST
​
------------------------------------------------------------------------------------
!IMPORTANTE: No debes modificar el nombre de las funciones
​
EMPECEMOS:
​
                                        ? CLOSURE
​
 1. En este ejercicio debes implementar una closure de manera que retornes una funcion que:
 - Cuando sea invocada con un valor MAYOR a 50 devuelva un valor decreciente,
 - Cuando sea invocada con un valor MENOR a 50 devuelva un valor creciente.
​
 *Ejemplo 1: 
 const newCounter = arribaArbajo(49);
 newCounter(); // 50
 newCounter(); // 51
 newCounter(); // 52
 newCounter(); // 53
​
 *Ejemplo 2: 
 const newCounter = arribaArbajo(52)
 newCounter(); // 51
 newCounter(); // 50
 newCounter(); // 49
 newCounter(); // 48
​
*/

function arribaAbajo(num) {
    // Tu codigo aqui:
    //49
    if (num < 50) {
        return function () {
            return num ++
        }
    }else {
        return function () {
            return "chao"
        }
    }
}

/*  ------- Ese fue para entrar en calor ¡Vamos con otra! --------------------
​
2. Debes implementar una closure para desarrollar una funcion closureNacionality a quien le consultaremos por la nacionalidad de una persona y nos respondera con true o false segun corresponda.
​
Esa funcion recibe como parametro:
- Un array de caracteristicas de la nacion (nacTips)
- Un numero minimo de caracteristicas que tiene que tener la persona ( para poder encontrar su nacionalidad )
​
*Ejemplo:
​
var persona1 = {
    name: 'Ronaldo',
    tips: ['aguacate', 'caribe', 'Shakira', 'Tayrona']
}
​
var persona2 = {
    name: 'Marcelina',
    tips: ['fresa', 'Tayrona', 'mate', 'palta']
}
​
Estas serian las nacionalidades: 
var colombia = ['fresa', 'Tayrona', 'Caribe', 'aguacate', 'cafe', 'piña', 'Shakira'];
​
var argentina = ['frutilla', 'Cataratas', 'mate', 'palta', 'Tonolec', 'anana' ] 
​
Creamos la instancia:
var sosColombia = closureNacionality(colombia, 3)
​
Probamos:
let Ronaldo = sosColombia(persona1)
--> true
​
let Marcelina = sosColombia(persona2)
--> false
​
! Demasiado complejo? 
​
Tomate tu tiempo para leer el enunciado y analizar los ejemplos. 
Recuerda hacer un esquema con pseudo codigo para tener el plan a seguir.
Ahora si! A codear!
​
  */
  
function closureNacionality(nac, min) {
    // Tu codigo aqui:
    
}

/* -------------------------------------------------------------------------------------------
​
                                            ? RECURSION
​
--------------------------------------------------------------------------------------------*/

/*
​
3. Realizar una funcion que invierta el orden del string recibido
Ejemplo: espejo("hola susuna")
        --> 'anusus aloh'
​
*/

function espejo(str) {   
}

// ---------------------------------------------------------------------------------- //

/* 
​
4. Implementar una funcion que reciba un numero y utilice recursion para que devuelva un array con los numeros enteros positivos que son iguales y menores al numero dado
​
La funcion recibe dos parametros:
- Un numero
- Un array
​
*Ejemplo: 
​
restar(6)
--> [1,2,3,4,5,6]
​
!Reto: Piensa como usar parametros por defecto para resolverla
​
*/

function restar(num, array = []) {
    // Tu codigo aqui:
}

/* ----------------------------------------------------------------------------
​
                                            ? QUEUE
​
--------------------------------------------------------------------------------*/

/*
​
5. Debes implementar una funcion que va a recibir un array y debe filtrar los elementos que no sean numeros y devuelve una queue con los elementos filtrados
​
* Ejemplo:
​
let array = [1, "a", 2, "b", [1, 2, 3]]  
​
filtraQueue(array)
--> ["a", "b", [1, 2, 3]]
​
*/

function filtraQueue(arg) {
    // Tu codigo aqui:
}

/* ------------------------------------------------------------------------------------
​
                                            ? LINKEDLIST
​
---------------------------------------------------------------------------------------*/

/*
​
/* 
​
6. Vamos a sumar al prototipo de LinkedList el metodo size, cuya funcion es devolver la cantidad de nodos de una linkedList
​
*Ejemplo: 
​
    [head] 
  ["first"] -> ["second"] -> ["the last nodito"] ->   null                                                  
    1              2                   3
​
Creamos la instancia y llenamos la lista enlazada:
​
myLinkedlist = new Linkedlist()
myLinkedlist.add("first")
myLinkedlist.add("second")
myLinkedlist.add("the last nodito")
​
Al ejecutar dicho metodo:
myLinkedList.size()
--> 3
​
*/


LinkedList.prototype.size = function () {
    // Tu codigo aqui:
};

/*  ------------------------------------------------------------------------------
​
                                    ? ARBOLES 
​
----------------------------------------------------------------------------------*/

/* 
​
Vamos con uno famoso y un poco mas complicado ejercicio...
​
7. Deberas ahora implementar el metodo height, una funcion que devuelva la altura de un arbol (es decir la cantidad de niveles que tiene)
​
​
                        0                  Nivel 0
                    /  \
                    -1   5                Nivel 1
                    /    / \
                -2    3    7            Nivel 2
                        \
                        4                 Nivel 3
​
                        La altura de este arbol es 3.
​
!Sugerencia: Pensar en el metodo size, y utilizar Math.max()    
​
*/

BinarySearchTree.prototype.height = function () {
    // Tu codigo aqui:
};



// NO MODIFICAR NADA DEBAJO DE ESTA LÍNEA
module.exports = {
  arribaAbajo,
  closureNacionality,
  espejo,
  restar,
  filtraQueue,
  LinkedList,
  BinarySearchTree
}