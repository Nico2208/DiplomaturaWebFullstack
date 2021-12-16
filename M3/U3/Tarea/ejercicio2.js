/* Crear el código que reciba como parámetro un array de números y devuelva el mayor. */


/* Crear el código que reciba como parámetro un array de números y devuelva el mayor. */

/* FUNCIONES: la primera funcion permite que el usuario cargue los elementos del array,
mientras que la segunda funcion determina cual es el mayor elemento del array 
*/

function cargarArray (array, elemArray) {
    for (let i = 0; i < elemArray; i ++){
      let num = parseInt(prompt('Ingrese valor ', i+1));
      array.push(num);
    }
  }
  
  function devolverMayor (array, elemArray) {
    let mayor = 0;
    for (let i = 0; i < elemArray; i ++){
      if(array[i]>mayor)
        mayor = array[i];
    }
    console.log('El elemento mayor es ', mayor);
  }

// FIN FUNCIONES

let vector = [];

cantElemArray = parseInt(prompt("Ingrese cantidad de elementos del array: "));

cargarArray(vector, cantElemArray);

devolverMayor (vector, cantElemArray);
