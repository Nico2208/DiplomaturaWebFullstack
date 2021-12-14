/* Crear el código que reciba como parámetro un array de números y devuelva el mayor. */


/* Crear el código que reciba como parámetro un array de números y devuelva el mayor. */

// FUNCIONES

function cargarArray (array, elemArray) {
    for (let i = 0; i < elemArray; i ++){
      let num = parseInt(prompt('Ingrese valor ', i+1));
      array[i] = num;
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

cantElemArray = parseInt(prompt("Ingrese cantidad de elementos del array: "));

let vector = [cantElemArray]


cargarArray(vector, cantElemArray);

devolverMayor (vector, cantElemArray);
