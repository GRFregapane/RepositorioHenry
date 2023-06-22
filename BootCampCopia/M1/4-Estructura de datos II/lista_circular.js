const list = {
    head: {
        data:2,
        next: {
            data:1,
            next: {
                data: 4,
                next: null,
                prev: null
            }
        }
    }
}
console.log(list)

list.head.next.prev = list.head

console.log(list.head.next.prev.next.prev.next)

/*
{ head: 
   { data: 2,
     next: 
      { data: 1,
        next: { data: 4, next: null, prev: null },
        prev: [Circular] } } }
*/