/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let new_array = []
    let keys = Object.keys(objeto)
    let values = Object.values(objeto)
    for (let i = 0; i< keys.length; i++) {
        let temp_array = [keys[i], values[i]]
        new_array.push(temp_array)
    }
    return new_array
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   // Lista de caracteres
   let string_ordenado = string.split('').sort()
   let caracteres = []
   for (let char = 0; char < string_ordenado.length; char++) {
      if (!caracteres.includes(string_ordenado[char])) {
         caracteres.push(string_ordenado[char])
      }
   }

   // creacion del objeto
   let objeto = {}
   
   // Contador de letras
   for (let char = 0; char < caracteres.length; char++) {
       let contador = 0
       for (let char_completo = 0; char_completo < string_ordenado.length; char_completo++) {
           if (string_ordenado[char_completo] === caracteres[char]) {
               contador++
           }
       }
       objeto[caracteres[char]] = contador
   }
   return objeto
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let char_minusculas = []
   let char_mayusculas = []
   for (let i=0; i < string.length; i++) {
      if (string[i] == string[i].toUpperCase()) {
         char_mayusculas.push(string[i])
      }
      else {
         char_minusculas.push(string[i])
      }
   }
   char_mayusculas = char_mayusculas.join('')
   char_minusculas = char_minusculas.join('')
   return `${char_mayusculas}${char_minusculas}`
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let reverse = (string) => {
      let result = []
      for (let i = string.length -1; i >= 0; i--) {
         result.push(string.charAt(i))
      }
      return result.join('')
   }
   // Partimos la frase
   let frase_lista = frase.split(' ')
   let new_frase = []
   for (let i = 0; i < frase_lista.length; i++) {
      new_frase.push(reverse(frase_lista[i]))
   }
   return new_frase.join(' ')
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let reverse = (string) => {
      let result = []
      for (let i = string.length -1; i >= 0; i--) {
         result.push(string.charAt(i))
      }
      return result.join('')
   }
   let str_num = numero.toString()
   if (str_num === reverse(str_num)) {
      return 'Es capicua'
   }
   return 'No es capicua'
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let is_abc = (str) => {
      if (str === 'a' || str === 'b' || str === 'c') {
         return true
      }
      return false
   }
   string = string.split('')
   return string.filter(str => !is_abc(str) ).join('')
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let obj = []
   for (let i = 0; i < arrayOfStrings.length; i++) {
      obj.push({text: arrayOfStrings[i], length: arrayOfStrings[i].length})
   }
   let obj_sorted = obj.sort(function (a,b) {
      if (a.length > b.length) {
         return 1
      }
      if (a.length < b.length) {
         return -1
      }
      return 0
   })
   let result = []
   for (let i = 0; i < obj_sorted.length; i++) {
      result.push(obj_sorted[i].text)
   }
   return result
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let result = []
   let func = (arr1, arr2) => {
      let union = []
      for (let i = 0; i < arr1.length; i++) {
         if (arr2.includes(arr1[i])) {
            union.push(arr1[i])
         }
      }
      return union
   }

   if (array1.length <= array2.length) {
      result = func(array1, array2)
   }
   else { result = func(array2, array1) }

   return result
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
