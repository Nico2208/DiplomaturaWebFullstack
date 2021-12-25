
var alumnos = [

  {

    nombre: 'Juan Gomez',

    nota: 7

  }, {

    nombre: 'Pedro Rodriguez',

    nota: 4

  }, {

    nombre: 'Roxana García',

    nota: 8

  }, {

    nombre: 'Luciano Lopez',

    nota: 5

  }, {

    nombre: 'Fernanda Gimenez',

    nota: 6

  }, {

    nombre: 'Florencia Martinez',

    nota: 10

  }, {

    nombre: 'Raul Sanchez',

    nota: 7

  }, {

    nombre: 'Sandra Figueroa',

    nota: 8

  }

];

for (var i = 0; i < alumnos.length; i++){
    if(alumnos[i].nota >= 7){
        document.write(alumnos[i].nombre + " aprobó");
        document.write('<br>');
    } else { 
        document.write(alumnos[i].nombre + " no aprobó.");
        document.write('<br>');
    }

}