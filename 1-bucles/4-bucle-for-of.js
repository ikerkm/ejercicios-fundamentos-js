// ej 4
// crea un array con la gente mayor de 25 años.
// y muéstralo por consola.
// Sin utilizar el método filter de los arrays
// Utilizad el bucle for of

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
/*Aquí creamos dos variables, un array y una var numerica, el nuevo array se utiliza para guardar los
nombres de los mayores de 25(gente_mayor), y luego la variable contador para que a la hora de guardar 
los nombres en el nuevo array podamos recorrer el array gente_mayor de forma correcta, si en vez de el
contador usasemos "i" para recorrer ambos array, en vez de llenarse solo de personas mayores de 25 se 
rellenaria también con huecos vacios, con el contador aseguramos que solo recorra cuando alguien es mayor
de 25 */
/* .length sacamos el tamaño total del array y asi el bucle sabe hasta donde tiene que ir */
var gente_mayor = [];
var contador = 0;
for (var i = 0; i < gente.length; i++) {
    var edad = gente[i].edad;
    if (edad > 25) {

        gente_mayor[contador] = {
            nombre: gente[i].nombre,
            edad: gente[i].edad,

        }




        contador++;
    }


}


console.log(gente_mayor);