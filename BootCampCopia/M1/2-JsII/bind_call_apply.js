var a=2

const obj3 = {
    a: [1,2],
    b:{},
    d: "hola",
    
}

// Bind

const fufu = function (val, key, tercer){
    this.a.push(val)
    this.b[key]= val
    if(tercer){
        this.d = tercer
    }
    return "oki"
}
//                               obj
// var instanceFunction = fufu.bind(obj3) // retorna una función
// console.log(instanceFunction(23,"weeee"))
// console.log(obj3)


/*
const obj3 = {
    a: [1,2],
    b:{},
    d: "hola",
    fufu = function (val, key, tercer){
    this.a.push(val)
    this.b[key]= val
    if(tercer){
        this.d = tercer
    }
    return "oki"
}
}
*/


// Call y Apply
//                               obj,
var instanceFunction = fufu.call(obj3,23,"weeee" ) // inserta la función la function en el obj y la ejecuta
console.log(instanceFunction) // retorna el valor
console.log(obj3)

var instanceFunction2 = fufu.apply(obj3,[23,"weeee"]) // inserta la función la function en el obj y la ejecuta


// Function currying
function multiply(a, b) {
    return a * b;
}
//                            obj -> equivalen a los params de la function bindeada
const multTwo = multiply.bind(null, 2)

console.log(multTwo(5))