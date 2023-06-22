1️⃣ ***** EJERCICIO 1 ***** - henryHospital() 1️⃣
¡Tenemos complicaciones! 
En nuestro hospital se formó una fila de personas quede deben ser atendidas. Tendrás que filtrar a los pacientes.
Aquellos pacientes que ya fueron atendidos deberás agregarlos a una nueva Queue llamada "Atendidas". Quienes aún
no han sido atendidos serán agregados a otra Queue llamada "EnEspera".

¿Cómo saber quienes serán atendidos? La doctora del hospital solo atiende a las personas:
 - Con una edad igual o mayor a 18 años. 
 - Además su altura sea superior a 150 cm.
Las personas que no cumplan con estos requisitos quedarán en espera.

📝 EJEMPLO 📝
(INPUT) ➡
Queue {
 array: [
   { nombre: 'Carol', edad: 24, altura: 146 },
   { nombre: 'Gonzalo', edad: 24, altura: 184 },
   { Nombre: 'Micaias', edad: 20, altura: 181 },
   { Nombre: 'Coraline', edad: 22, altura: 165 },
   { Nombre: 'Marcos', edad: 19, altura: 154 },
   { nombre: 'Mati', edad: 14, altura: 175 }
 ]
}

(OUTPUT) ➡
let ejemplo = {
 Atendidas: Queue {
   array: [
     { nombre: 'Gonzalo', edad: 24, altura: 184 },
     { Nombre: 'Micaias', edad: 20, altura: 181 },
     { Nombre: 'Coraline', edad: 22, altura: 165 },
     { Nombre: 'Marcos', edad: 19, altura: 154 }
   ]
 },
 EnEspera:  Queue {
   array: [
     { nombre: 'Carol', edad: 24, altura: 146 },
     { nombre: 'Mati', edad: 14, altura: 175 }
   ]
 }
}

REQUISITOS
 🟢 La función debe retornar el objeto con las propiedades Atendidas y EnEspera, sus valores son QUEUE con los datos esperados.
 🟢 Las QUEUE que retorna la función deben ser una instancia de la clase QUEUE.
*/

function henryHospital(lista) {
  // Tu código aquí:
  const atendidas = new Queue();
  const enEspera = new Queue();

  lista.array.forEach((paciente) => {
   if (paciente.edad >= 18 && paciente.altura > 150) {
      atendidas.enqueue(paciente);
  } else {
    enEspera.enqueue(paciente);
  }
  });
    
  return { Atendidas: atendidas, EnEspera: enEspera };
}


/ 2️⃣ ***** EJERCICIO 2 ***** - BuscandoError() 2️⃣
// En el hospital unas de las maquinas empezó a fallar y lanzan un error por pantalla, debemos identificar cuáles tienen un patron de inicio y cierre:
// Necesitamos que determines si el error esta balanceado en cuanto a paréntesis, corchetes y llaves.
// La función debe devolver true si los paréntesis, corchetes y llaves están balanceados y false en caso contrario.
// Se considera que los paréntesis, corchetes y llaves están balanceados si para cada uno de estos símbolos de apertura hay un símbolo de cierre correspondiente y los símbolos están correctamente anidados.

// Ejemplo:

// Input: "{[()()]}"
// Output: true

// Input: "([)]"
// Output: false
//
//
// REQUISITOS:
//  🟢 Respetar el principio de LIFO que tienen los stacks
//  🟢 Retornar true o false, dependiendo de lo que corresponda.
//  🟢 Investigar que hace el metodo charAt, les puede servir

function BuscandoError(expresion) {
  // Tu código aquí
  const stack = [];
  for (let i = 0; i < expresion.length; i++) {
const char = expresion.charAt(i);
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      const last = stack.pop();

    if ((char === ')' && last !== '(') ||
        (char === ']' && last !== '[') ||
        (char === '}' && last !== '{')) {
        return false;
      }
    }
  }

        return stack.length === 0;
}

    
    /* 3️⃣ ***** EJERCICIO 3 ***** - sumarCostos() 3️⃣

    Necesitamos cerrar las cuentas del hospital antes de que termine el mes. Hay que calcular el total de los gastos 
    medicos del paciente. Para esto, crea una función que recibe un número (precio) y devuelva otra función. Esta
    segunda función, a su vez, debe recibir otro número. Finalmente se deben sumar ambos números y retornar el resultado.
    Estarás construyendo una closure.
    
    📝 EJEMPLO 📝
    const suma = sumarCostos(15)
    suma(5) ------> 20
    
    REQUISITOS
    🟢 Si la función recibe por parámetro un cero, entonces debe devolver false.
    */
    
    function sumarCostos(precio) {
      // Tu código aquí:
      return function(nuevoPrecio) {
        if (precio === 0) {
          return false;
        } else 
          return precio + nuevoPrecio;
        };
      }
    

/* 4️⃣ ***** EJERCICIO 4 ***** - contarPacientes() 4️⃣

¡El sistema del hospital se ha caído! Ahora necesitamos llevar un registro manual de todos los pacientes 
del hospital. Para lograr esto te pedimos que contruyas una función que utilice recursión para calcular 
la cantidad de pacientes.

📝 EJEMPLO 📝
(INPUT) ➡ ["Juan", "Maria", "Pedro", "Luisa", "Ana"];
(OUTPUT) ➡ 'La cantidad de pacientes en la planta son: 5'

(INPUT) ➡ ["Juan", "Maria"];
(OUTPUT) ➡ 'La cantidad de pacientes en la planta son: 2'

REQUISITOS
🟢 La función debe retornar un mensaje que diga "No hay pacientes en la planta" si array recibido está vacío.
🟢 La función debe retornar un mensaje que diga "La cantidad de pacientes en la planta son: ${cantidadDePacientes}".
🟢 Puedes utilizar un default parameter para ayudarte.
*/

function contarPacientes(pacientes) {
    // Tu código aquí:
    const cantidadDePacientes = pacientes.length;
    if (cantidadDePacientes === 0) {
      return 'No hay pacientes en la planta';
  }
      return 'La cantidad de pacientes en la planta son: ' + cantidadDePacientes;
  }


  /* 5️⃣ ***** EJERCICIO 5 ***** - ordenarInstrumentos 5️⃣

Antes de cada cirujía el médico necesita tener una lista con todos los instrumentos quirúrjicos. Te pedimos que
crees una función que nos ayude a ordenar estos instrumentos. La función recibirá un arreglo de instrumentos.
Tendrás que crear un algoritmo de ordenamiento que permita ordenar todos los instrumentos de forma alfabética
y ascendente. Es decir, de la A a la Z.

📝 EJEMPLO 📝
(INPUT) ➡ ['bisturí', 'espéculos', 'abrebocas', 'diapasones']
(OUTPUT) ➡ ['abrebocas', 'bisturí', 'diapasones', 'espéculos']

REQUISITOS
🟢 Si lo que se recibe por parámetro no es un arreglo la función debe devolver un string que diga: "Debe recibir un array de strings".
🟢 En caso de recibir un array vacío, la función debe retornar "El array no debe estar vacio".
⛔️ No puedes utilizar el método SORT.
*/

function ordenarInstrumentos(instrumentos) {
    // Tu código aquí:
    if (!Array.isArray(instrumentos)) {
        return 'Debe recibir un array de strings';
      }
      if (instrumentos.length === 0) {
        return 'El array no debe estar vacio';
      }
     let n = instrumentos.length;
      for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
      if (instrumentos[j] > instrumentos[j + 1]) {
      
        let temp = instrumentos[j];
            instrumentos[j] = instrumentos[j + 1];
            instrumentos[j + 1] = temp;
        }
      }
      }
    
          return instrumentos;
    }

    /* 6️⃣ ** EJERCICIO 6 ** - Recursión numHabitaciones() 6️⃣

A los pacientes de nuestro hospital se les asigna una abitación de forma secuencial. Cada habitación tiene una 
capacidad máxima de pacientes. Si una habitación está llena se debe abrir una nueva. Necesitamos que escribas 
una función que reciba dos números por parámetros:
  - La cantidad de pacientes.
  - La capacidad de pacientes por habitación.

De forma recursiva debe calcular el número total de habitaciones necesarias que se deben abrir para acomodar 
a todos los pacientes en un hospital. 

📝 EJEMPLO 📝
(INPUT) ➡ numHabitaciones(30, 4)
(OUTPUT) ➡ 8

(INPUT) ➡ numHabitaciones(35, 5)
(OUTPUT) ➡ 7

REQUISITOS
🟢 Este ejercicio debe ser resuelto utilizando RECURSIÓN. Si utilizas los métodos Math.ceil o Math.floor, los tests fallarán
*/

function numHabitaciones(pacientes, capacidad) {
    // Tu código aquí:
    if (pacientes <= 0) {
        return 0; // No se necesitan habitaciones = 0 pacientes
      } else {
        return 1 + numHabitaciones(pacientes - capacidad, capacidad); 
      }
    }


  ***** EJERCICIO 07 ***** - pacientesConMasDeUnaEnfermedad() 7️⃣ 

Necesitamos darle mayor prioridad a los pacientes que tienen más de una enfermedad. Para esto necesitamos que
agregues un nuevo método a la LinkedList. Este método debe crear y devolver una nueva LinkedList.

Esta nueva LinkedList debe contener solo a aquellos pacientes que posean más de una enfermedad.
Cada nodo (paciente) contiene las propiedades: id, nombre, enfermedad (esta ultima es un array con las enfermedades). 

📝 EJEMPLO 📝 
(INPUT) ➡ LinkedList {[{id: 1, nombre: 'María', enfermedad: ['Bronquitis']},
            {id: 2, nombre: 'Lucas', enfermedad: ['Neumonía', 'Hipertensión']}]}

(OUTPUT) ➡ LinkedList { array: [{id: 2, nombre: 'Lucas', enfermedad: ['Neumonía', 'Hipertensión']}] }

REQUISITOS
 🟢 Devolver una nueva lista de los pacientes que tienen más de una enfermedad.
 🟢 Si no hay pacientes con más de una enfermedad, devolver una lista vacía.
*/

LinkedList.prototype.pacientesConMasDeUnaEnfermedad = function (lista) {
  // Tu código aquí:
  const nuevaLista = new LinkedList();
  let nodo = this.head;
  while (nodo !== null) {
  if (nodo.value.enfermedad.length > 1) {
  nuevaLista.add(nodo.value);
 }
   nodo = nodo.next;
 }
  return nuevaLista;
};
  

8️⃣ ***** EJERCICIO 8 ***** - pacienteEnMayorEspera() 8️⃣

Para lograr agilizar el orden de atención de los pacientes necesitamos que construyas una función que nos
permita encontrar qué paciente es el que más tiempo a estado en espera. Esta función debe ser un método 
de nuestra lista enlazada.

Cada nodo (paciente) en su {value} tiene un objeto con dos propiedades: 
 - **nombre**: nombre del paciente.
 - **espera**: cantidad  de segundos (número) transcurridos desde el inicio del día.

📝 EJEMPLO 📝
(INPUT) ➡ Head ➡ ({nombre: "Franco", espera: 123})
                ➡ ({nombre: "Martin", espera: 5235}) 
                ➡ ({nombre: "Lucía", espera: 2344}) 
                ➡ ({nombre: "Marta", espera: 1423})

(OUTPUT) ➡ {nombre: "Martin", espera: 5235}

REQUISITOS:
🟢 Devolver al paciente que ha estado esperando más tiempo en la lista.
🟢 Devolver null si la lista está vacía.

*/

LinkedList.prototype.pacienteEnMayorEspera = function () {
  // Tu código aquí
  if (this.head === null) {
    return null;
  }

   let nodo = this.head;
   let maxEspera = nodo.value.espera;
   let pacienteMaxEspera = nodo.value;
  while (nodo !== null) {
    if (nodo.value.espera > maxEspera) {
      maxEspera = nodo.value.espera;
      pacienteMaxEspera = nodo.value;
    }
      nodo = nodo.next;
  }
  return pacienteMaxEspera;
};


***** EJERCICIO 9 ***** - buscandoAlDoctor() 9️⃣ 

Agrega un nuevo método llamado buscandoAlDoctor al árbol binario. Este recibirá como parámetro un ID que
pertenece a un doctor. Debe devolver el nodo que representa al doctor buscado. 
Cada nodo es un objeto con las propiedades: id, nombre, edad y especialidad.

📝 EJEMPLO 📝
Dado el siguiente árbol (solo mostramos el id pero los demás datos si están):
               13
            /      \
          7         24
        /          /   \
       6         16     27
     /                    \
    3                     45
     \
      4

(INPUT) ➡ 45
(OUTPUT) ➡ Toda la información de este doctor.

(INPUT) ➡ 5
(OUTPUT) ➡ null, ya que no existe.

REQUISITOS
🟢 La función debe retornar el nodo completo que representa al doctor encontrado.
🟢 La función debe retornar null si no lo encuentra.
*/

BinarySearchTree.prototype.buscandoAlDoctor = function (id) {
  // Tu código aquí:
  const buscaDoc = function(node) {
    if(node !== null) {
    if(node.value.id === id) {
         return node;
   }
    const izquierda = buscaDoc(node.left);
    if(izquierda !== null) {
         return izquierda;
   }
    const derecha = buscaDoc(node.right);
    if(derecha !== null) {
         return derecha;
   }
     }
     return null;
   }
   return buscaDoc(this);
 };

***** EJERCICIO 10 ***** - agregarEmpleado() 🔟

Dentro de nuestro hospital tenemos un árbol binario que nos permite tener registrado a todos nuestros empleados.
Este mes necesitamos ordenar este árbol a partir de los años de antiguedad del empleado. Para esto crea un
nuevo método que agregue a los empleados de un arreglo a partir de este dato.
  - Los empleados con menor cantidad de años de antiguedad van a la izquierda.
  - Los empleados con más cantidad años de antiguedad van a la derecha.

📝 EJEMPLO 📝
[{ nombre: maría, años: 7 }, { nombre: Pedro, años: 5 }, { nombre: maría, años: 9 }]

(INPUT) ➡ { nombre: Juan, años: 8 }

(OUTPUT) ➡ 
                María
                /     \
              Pedro    Luis
                      /
                    Juan
// ACLARACION si los años de antiguedad son menor debe ir a la izquierda y si es mayor o igual a la derecha.
REQUISITOS
🟢 En caso de querer insertar un empleado que ya se encuentra en el árbol, debe retornar el
string: "No se puede agregar el mismo empleado".
🟢 En caso de insertar el empleado correctamente si los años de antiguedad son menor debe ir a la izquierda y si es mayor o igual a la derecha.
🟢 Debe retornar el nuevo nodo que ha sido insertado.
*/

BinarySearchTree.prototype.agregarEmpleado = function (empleado) {
  // Tu código aquí:
  const nuevoNodo = new Node(empleado);
  if (this.root === null) {
    this.root = nuevoNodo;
    return nuevoNodo;
  } else {
    const insertar = (nodo) => {
      if (empleado.años < nodo.value.años) {
        if (nodo.left === null) {
          nodo.left = nuevoNodo;
          return nuevoNodo;
        } else {
          return insertar(nodo.left);
        }
      } else if (empleado.años > nodo.value.años) {
        if (nodo.right === null) {
          nodo.right = nuevoNodo;
          return nuevoNodo;
        } else {
          return insertar(nodo.right);
        }
      } else {
        return "No se puede agregar el mismo empleado";
      }
    };
    return insertar(this.root);
  }
};

/*const { BinarySearchTree } = require("../checkpoint/10");

describe("Ejercicio 10 - agregarEmpleado", () => {
    let arbolDeEmpleados;
    let empleado;
  
    beforeEach(() => {
      empleado = { nombre: "María", años: 7 };
      arbolDeEmpleados = new BinarySearchTree(empleado);
    });
  
    test("Debe agregar al empleado con la menor antiguedad de forma correcta.", () => {
      const nuevoEmpleado = { nombre: "Pedro", años: 5 };
      expect(arbolDeEmpleados.agregarEmpleado(nuevoEmpleado)).toEqual(
        arbolDeEmpleados.left
      );
      expect(arbolDeEmpleados.left.value).toEqual(nuevoEmpleado);
    });
  
    test("Debe agregar al empleado con la mayor antiguedad de forma correcta.", () => {
      const nuevoEmpleado = { nombre: "Luis", años: 9 };
      expect(arbolDeEmpleados.agregarEmpleado(nuevoEmpleado)).toEqual(
        arbolDeEmpleados.right
      );
      expect(arbolDeEmpleados.right.value).toEqual(nuevoEmpleado);
    });
  
    test( test("Devolver error al agregar el mismo empleado.", () => {
      expect(arbolDeEmpleados.agregarEmpleado(empleado)).toEqual(
        "No se puede agregar el mismo empleado"
      );
      expect(arbolDeEmpleados.value).toEqual({ nombre: "María", años: 7 });
    });"Debe agregar al empleado con igual antiguedad al empleado existente de forma correcta.", () => {
      const nuevoEmpleado = { nombre: "Juan", años: 7 };
      expect(arbolDeEmpleados.agregarEmpleado(nuevoEmpleado)).toEqual(
        arbolDeEmpleados.right
      );
      expect(arbolDeEmpleados.right.value).toEqual(nuevoEmpleado);
    });
  
   
  });*/  