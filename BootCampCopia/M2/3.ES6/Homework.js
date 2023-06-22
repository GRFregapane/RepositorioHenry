var traverseDomAndCollectElements = function (matchFunctionMaker, startEl = document.body) {
    var resultSet = [];
  
    // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
    // usa matchFunc para identificar elementos que matchien
  
    // TU CÓDIGO AQUÍ
  if (matchFunctionMaker(startEl)) resultSet.push(startEl);
  for (let i = 0; i < startEl.children.length; i++) {
    let aux = traverseDomAndCollectElements(matchFunctionMaker, startEl.children[i]);
    resultSet = [...resultSet, ...aux]
  }
   return resultSet; 
  };
  
  // Detecta y devuelve el tipo de selector
  // devuelve uno de estos tipos: id, class, tag.class, tag
  
  var selectorTypeMatcher = function (selector) { // '#hola' '.class' 'div' 'span.hola'  
    // tu código aquí
    if (selector[0] === '#') return 'id';
    if (selector[0] === '.') return 'class';
    if (selector.split('.').length > 1) return 'tag.class'; // ['span', 'hola']
    return 'tag';
  
  };
  
  // NOTA SOBRE LA FUNCIÓN MATCH
  // recuerda, la función matchFunction devuelta toma un elemento como un
  // parametro y devuelve true/false dependiendo si el elemento
  // matchea el selector.
  
  let matchFunctionMaker = function (selector) {
    let selectorType = selectorTypeMatcher(selector);
    let matchFunction;
  
    if (selectorType === "id") {
      matchFunction = (element) =>  `#${element.id}` === selector
  
  
    } else if (selectorType === "class") {
      matchFunction = (element) => {
        let classes = element.classList; //me da un arr con las tres clases
        return classes.contains(selector.slice(1)) //contiene un string que diga...?
      }
  
  
    } else if (selectorType === "tag.class") {
     matchFunction = (element) => {
      const [tag, className] = selector.split('.') //['div', 'buenas']
        // 'div' , 'buenas'
      let match = matchFunctionMaker(tag)
      match(element)
        return matchFunctionMaker(tag)(element) && matchFunctionMaker(`.${className}`)(element)
     }
  
  
    } else if (selectorType === "tag") {
      matchFunction = (element) => element.tagName === selector.toUpperCase()//como el tagNmae nos devuelve en mayusculas, utilizamos el selector y uppercase para tranformar en minusculas y poder comparar.
  }
       return matchFunction;
  };
  
  let $ = function (selector) {
    let elements;
    let selectorMatchFunc = matchFunctionMaker(selector);
    elements = traverseDomAndCollectElements(selectorMatchFunc);
    return elements;
  };
  