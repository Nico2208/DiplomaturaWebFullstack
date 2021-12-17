/*Crear el código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

0 a 1000 metros = pie

1000 a 10000 metros = bicicleta

10000 a 30000 metros = colectivo

30000 a 100000 metros = auto

+100000 = avion*/


//FUNCION QUE EVALUA QUE MEDIO TRANSPORTE CORRESPONDE A CADA DISTANCIA INGRESADA  

function determinarMdeTransporte (distancia){
    if (distancia <= 1000){
      console.log('Medio de transporte: pie');
    }
    else if (distancia > 1000 && distancia <= 10000){
        console.log('Medio de transporte: bicicleta');
      }
      else if (distancia > 10000 && distancia <= 30000){
        console.log('Medio de transporte: colectivo');
      }
        else if (distancia > 30000 && distancia <= 100000){
            console.log('Medio de transporte: auto');
        }
          else console.log('Medio de transporte: avion');
  }
  
  distAEvaluar = parseInt(prompt('Por favor, ingrese distancia a evaluar: ')); 
  
  determinarMdeTransporte (distAEvaluar);

