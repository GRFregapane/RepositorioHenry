var text =
  "JavaScript fue creado por Brendan Eich para el navegador NetScape en 1995, permitiendo interacciones con los usuarios y ofreciendo más versatilidad en el diseño. La creación del elemento XML HttpRequest por Microsoft en 1998 impulsó la carga de contenido y la interacción con el backend sin recargar la página. La invención del formato JSON por Douglas Crockford en 2000 y la incorporación masiva de AJAX por Gmail en 2004 mejoraron la eficacia de los procesos. La creación de la librería JQuery en 2006 por John Resig redujo la complejidad de la sintaxis de JavaScript. El surgimiento de Google Chrome en 2009, con su motor de JavaScript V8, y la creación de NodeJS por Ryan Dahl permitieron utilizar JavaScript como lenguaje de programación cross-platform. En 2012, Windows 8 adoptó JavaScript como su lenguaje nativo y en 2014 se estableció el estándar ES6 o ES2015 para JavaScript.";

var container = document.getElementById("container");
console.log(container);

function changeColor(event) {
  var divTarget = event.target;
  var color1 = "red";
  var color2 = "blue";
  if (divTarget.style.backgroundColor === color1) {
    divTarget.style.backgroundColor = color2;
  } else {
    divTarget.style.backgroundColor = color1;
  }
}

function createDiv(event) {
  console.log(":::event:::::", event);
  var newDiv = document.createElement("div");
  newDiv.className = "myDiv";
  var newP = document.createElement("p");
  newP.innerHTML = text;
  newDiv.appendChild(newP);
  console.log("------->", newDiv);
  newDiv.addEventListener("click", changeColor);
  container.appendChild(newDiv);
  return "holis";
}

var button = document.querySelector("#createButton");

button.addEventListener("click", createDiv); // addEventListener la ejecuta

// var bodyRef = document.getElementsByTagName("body");
// document.body.addEventListener("mousemove", function (event) {
//   console.log("###event is:", event);
// });

//console.log("-----:::----body--->", bodyRef);
// button.addEventListener("click",createDiv() )
// button.addEventListener("click","holis" )

// button.addEventListener("click",function(){
//     createDiv(d, c)
// })
