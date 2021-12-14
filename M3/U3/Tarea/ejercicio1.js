/*Crear el código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:

0 a 1000 metros = pie

1000 a 10000 metros = bicicleta

10000 a 30000 metros = colectivo

30000 a 100000 metros = auto

+100000 = avion*/

function determinarMdeTransporte (distancia){
    switch (distancia) {
        case distancia <= 1000:
            console.log('Medio de transporte: pie');
            break;
        case (distancia > 1000 && distancia <= 10000):
            console.log('Medio de transporte: bicicleta');
            break;
        case (distancia > 10000 && distancia <= 30000):
            console.log('Medio de transporte: colectivo');
            break;    
        case (distancia > 30000 && distancia <= 100000):
            console.log('Medios de transporte: auto');
            break;
        case distancia > 100000:
            console.log('Medio de transporte: avion');
            break;
        default:
            break;
    }
}

let distancia = prompt('Indique una distancia a evaluar: ');

determinarMdeTransporte(distancia);