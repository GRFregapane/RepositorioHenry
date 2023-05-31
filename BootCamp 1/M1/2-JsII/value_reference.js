var aVar = 11;
var obj = {
  nombre: "Jimy",
};
//                         value
function changeValueReference(a, o) {
  console.log(a); // 11
  a = 76; // crea una nueva variable de key a en un nuevo entorno léxico
  console.log(a); // 76
  o.nombre = "Fufu";
}
//                   11    SAS222 
changeValueReference(aVar, obj);
console.log(aVar); // 11
console.log(obj); // {nombre: 'Fufu}

// Tipos de Datos Primitivos
// str num bool null undf
// value
const num1 =7
const numCopy = num1

// Tipos de datos espeiales
// obj arr f() <- objetos
// ref

const obj1 = {a:1} // <- BY555

const copyObj = {...obj1} // <- AS212
copyObj.b =88
console.log(obj1)// 
console.log(copyObj)

// spread operator s {} d ->{...s}

const arrOrigin = [1,2,"hi"]
const newARr = [...arrOrigin] // copiamos, clonamos <- x valor


console.log(global)


const arrayA = [1,2,3]

const arrayB = arrayA
// ... spread operator
const arrC = [...arrayA]

arrayB.push("algo")
console.log(arrayA)
console.log(arrayB)
console.log(arrC)


// Los tipos Primitivos se pasan siempre ya sea por copiar con = o por params
// el value
// los objs {} [] f() siempre se pasa la referencia -> id del espacio en memoria