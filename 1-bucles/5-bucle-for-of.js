// ej 5
// crea un array con la gente que empieza por J
// Sin utilizar el método filter de los arrays
// Utilizad el bucle for of
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
var the_name;
var new_gente = [];
//console.log(the_name.charAt(0));
for (var i = 0; i < gente.length; i++) {
    the_name = gente[i].nombre;

    if (the_name.charAt(0) === "J") {
        new_gente[contador] = {
            nombre: gente[i].nombre,
            edad: gente[i].edad,

        }


        contador++;
    }


}
console.log(new_gente);