//Caja 1

var caja = document.getElementById('caja1');

caja.addEventListener('click', function(e){
    e.preventDefault();
    var contenido = document.getElementsByClassName('contenedor')[0];
    if(contenido.style.backgroundColor != 'aquamarine')
        contenido.style = 'background-color: aquamarine';
    else
    contenido.style = 'background-color: white';
}, false);

//Caja 2

caja = document.getElementById('caja2');

caja.addEventListener('click', function(e){
    e.preventDefault();
    var contenido = document.getElementsByClassName('contenedor')[0];
    if(contenido.style.backgroundColor != 'salmon')
        contenido.style = 'background-color: salmon';
    else if (contenido.style.backgroundColor == 'salmon'){
        contenido.style = 'background-color: white';}
}, false);

//Caja 3

caja = document.getElementById('caja3');

caja.addEventListener('click', function(e){
    e.preventDefault();
    var contenido = document.getElementsByClassName('contenedor')[0];
    if(contenido.style.backgroundColor != 'burlywood')
        contenido.style = 'background-color: burlywood';
    else if(contenido.style.backgroundColor == 'burlywood'){
        contenido.style = 'background-color: white';}
}, false);


