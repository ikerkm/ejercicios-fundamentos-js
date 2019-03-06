// ej 6
// crea un array con la gente que su nombre tiene 4 letras
// utilizando el método filter de los arrays
// y muéstralo por consola.

let gente = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Paco',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 14
    },
    {
        nombre: 'Pilar',
        edad: 24
    },
    {
        nombre: 'Laura',
        edad: 24
    },
    {
        nombre: 'Jenny',
        edad: 10
    },
]
var contador = 0;
var result = [];
for (var i = 0; i < gente.length; i++) {
    var the_name = gente[i].nombre;
    var medida = the_name.length;
    if (medida === 4) {
        result[contador] = {
            nombre: gente[i].nombre,
            edad: gente[i].edad,
        }
        contador++;
    }
}
// let elarray = gente.filter(personas => personas.nombre.length ===4);


console.log(result);