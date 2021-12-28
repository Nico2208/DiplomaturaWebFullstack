var comentario = document.getElementById('comentario');

var contador = document.getElementById('contador');

comentario.addEventListener('input', function(e){
    var target = e.target;
    var longMaxima = target.getAttribute('maxlength');
    var longActual = target.value.length;
    contador.innerHTML = `${longActual}/${longMaxima}`;
}, false);



