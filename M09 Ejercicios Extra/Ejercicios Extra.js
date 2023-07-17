/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   return Object.entries(objeto)
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var separar = string.split("")
    var repetido = {};
    separar.forEach(function(el){
       repetido[el] = (repetido[el] || 0) + 1;
    })
    return (repetido);

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var paracaidas = /[A-Z]/g;
   var paraCaidas = /[a-z]/g;
   var separar = string.match(paracaidas);
   var seParar = string.match(paraCaidas);
   var unitr = separar.join("")
   var unir = seParar.join("")
   return (unitr + unir);

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var separar = frase.split(" ");
   var fraseInversa = [];
   for(var i = 0 ; i < separar.length ; i++){
      var argumento = separar[i];
      var separarInterno = argumento.split("");
      var revertir = separarInterno.reverse();
      var stringReversa = revertir.join("")
      fraseInversa.push(stringReversa)
   } 
   return fraseInversa.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var reverso = numero.toString().split("").reverse().join("")
    if(reverso === numero.toString()){
        return "Es capicua"
    } else {
        return "No es capicua"
    }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var eliminables = string.replaceAll(/[A-C]/gi, "");
   return eliminables
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var paco = arrayOfStrings.map(function(el, i){
      return { index: i, value: el.length};
  })
  paco.sort(function(a,b){
      if(a.value > b.value){
          return 1;
      }
      if(a.value < b.value){
          return -1
      }
      return 0
  })

  var sss = paco.map(function(el){
      return arrayOfStrings[el.index];
  })
  return sss;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arregloNuevo = [];
    var arregloGrande = [];
    var arregloChico = [];
    if(array1.length > array2.length){
        arregloGrande = array1.slice();
        arregloChico = array2.slice();
    } else {
        arregloGrande = array2.slice()
        arregloChico = array1.slice()
    }
    var result = arregloGrande.filter(number => arregloChico.includes(number))
    arregloNuevo = result;
    return arregloNuevo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
