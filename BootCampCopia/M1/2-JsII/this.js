var a=2

const obj = {
    a: [1,2],
    b:{},
    d: "hola",
    f: function(val, key, tercer){
        this.a.push(val)
        this.b[key]= val
        if(tercer){
            this.d = tercer
        }
        return "oki"
    }
}
console.log(obj)
console.log(obj.f(2,"wewe", "wwww"))

console.log(obj)
