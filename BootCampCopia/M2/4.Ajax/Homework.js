//1
const [boton] = $('#boton');
//10
const [search] = $('#search');
//20
const [deleteBtn] = $('#delete');
//15
const url = 'http://localhost:5000/amigos';


//4
const listFriends = (response) => {
//5
const [lista] = $('#lista');
//26
lista.innerText = '';
//6
      response.forEach((friend) => {
      const newLi = document.createElement('li');
//7
        newLi.innerText = friend.name;
//8
        lista.appendChild(newLi);
   })
}


//3
const showFriends = () => {
//9
     $('#lista').empty();
     $.get(url, listFriends )
}


//12
const searchFriend = () => {
//13
const [input] = $('#input');
//14
const id = input.value; //number
//19
      input.value = '';
//16
     $.get(`${url}/${id}`, (response) => {
//17
const [amigo] = $('#amigo');
//18 
      amigo.innerText = response.name;
})
}


//22
const deleteFriend = () => {
//23    
    const [inputDelete] = $('#inputDelete');
//24    
    const id = inputDelete.value;
//27
     inputDelete.value = '';    
//25
    $.ajax({
        type: 'DELETE',
        url: `${url}/${id}`,
        success: (response) => {
             listFriends(response)
//28 
             const [success] = $('#success');
//29
            success.innerText = 'Tu amigo ha sido borrado con éxito.'                         
    }
})
}

//2
boton.addEventListener('click', showFriends);
//11
search.addEventListener('click', searchFriend);
//21
deleteBtn.addEventListener('click', deleteFriend);


/* 
ORDEN:
CONSTANTES arriba (excepto las que utilizo una sola vez para algo en especifico)
FUNCIONES
EVENTOS
Utiliza el evento click en un boton para hacer que al hacer click en el mismo aparezca en el
 DOM una lista con todos los amigos que el servidor nos devolvera al hacer un GET a la 
 ruta http://localhost:5000/amigos  :
$('#lista') ---> es un arr, cuando llamamos un elemento con jquery nos devuelve un arr.
1.me traigo el elemento, boton
2.creo un eventoListener('click', )
3.creo una consta que es una función, para pasarle como parámetro de cb
//donde le agrego el $.get, que es la ruta del servidor y una cb que recibe por parametro
//la respuesta a esa ruta.
4. creo la const de listFriend que es una funcion y recibe a response,
5.Agarramos los nombres de todos los objetos del array y los enlistamos
utilizando la ul(del html)
6. (response es un arr de objetos), le aplicamos un forEach y le aplicamos una cb(lo que vamos a recorrer, uno por uno)
luego hacemos una li por cada amigo
7.le agregamos texto a cada li, utilizando el nombre que sale de friend(CADA OBJETO)
8. agrego un appendchild al newLi(aviso que va a haber una nueva lista)
9.agregamos empty(metodo) directamente al arr $# y no a una const, permite que se frene la reproduccion del 
msj, sino que se limpia antes de que se haga el llamado y vuelve a cargar la lista(para que ésta no se repita).

Un campo de busqueda (input) que reciba el id de un amigo y un boton "buscar". Al hacer click en el boton,
 buscaremos el amigo que tiene ese id en el servidor, y lo mostraremos en el DOM. Para conseguir los datos de un amigo
  en particular del servidor, puedes hacer un GET nuestro servidor concatenando el id del amigo que queremos encontrar:
10.creo una const search y que nos traiga ese elemento $#search (lo sacamos del html)
11. creo un evento de click para $#search y poder clickear
12. qué va a buscar ese boton? un amigo, creamos una const que pasamos como cb.
NECESITO TENER UN VALOR PARA CADA AMIGO Y ASÍ PODER BUSCARLO POR UN NÚMERO DE ACUERDO
A SU LUGAR EN LA LISTA...
13.para eso nos traemos el elemento $# que tiene éste input de html 
14. creamos una const de id, que será el número(value) que queremos que vaya al input.
15. creamos una const con la url para poder reutilizar en el get
16. aplicamos el get para hacerle la petición a la ruta(url declarada anteriormente), utilizamos comillas invertidas porque
vamos a concatenar la url con la id (número de amigo) y le pasamos una respuesta (objeto) a la cb.
17. Ese objeto tiene información de un amigo, la cual saco del span y le pedimos a jquery el elemento
$#amigo.
18. le pedimos al elemento que agregue como texto el nombre del objeto (response.name)
19. limpiamos el id del buscador luego de que se ejecuta la busqueda pasandole un string vacio.

Un input que reciba el id de un amigo y un boton "borrar". Al hacer click en el boton, borraremos el amigo del
 servidor haciendo un DELETE a nuestro servidor, concatenando el id del usuario que queremos borrar:
(Lo que cambia es la sintaxis de como hago una petición del tipo delete)*tiene que cambiar el metodo de http.
20.llamar al elemento que va a tener el boton (delete), a traves de una const.
21.agregamos el evento de clickeo con listener, pasandole una función creada en la const en el siguiente punto.
22. creo una const con la acción borrar amigo.
23. nos traemos el elemento $# input delete del html en una const
24. creamos la const del id del elemento $#
¿cómo hago un delete con ajax?
25. invocas el jquery ajax y le pasas un objeto, respetando el nombre de las propiedades
(type, url, success que recibe una cb<response>, )
26. limpiamos la lista y la devuelve actualizada(de lo contrario agregaria la lista corregida a la anterior)
cada uno con su mismo id.
27.limpiamos el input del delete para que quede vacio para una nueva ejecución de borrar
28. traigo en una const el elemento de success
29. le agrego un texto de retorno a la ejecución del suceso delete

*/