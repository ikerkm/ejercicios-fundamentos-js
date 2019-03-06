// crea la función convierteString
// debe recibir un tipo number y devolver el numero como string

// Si la función no recibe un dato tipo number debe
// devolver el string 'Debo ser ejecutada con un numero'

// Ha de pasar los test adjuntados.

var numero = Math.random() > 0.5 ? Math.random() : "The String";
let convierteString = (numero) => {
    // Aquí tu código.  Desde aquí:
    if (typeof numero === 'number') {
        var elstring = numero + "";
        return elstring;

    } else {
        var mensaje = "Debo ser ejecutada con un numero";
        return mensaje;
    }

    // Hasta aquí.
}


let test = require('../test.js');
//  test(functionTotest, [argumento1,argumento2, etc..],  expectedOutput) 
// comprueba si: convierteString(1) === '1'
test(convierteString, [1], '1');
test(convierteString, [0], '0');
test(convierteString, [-2], '-2');
test(convierteString, ['hola'], 'Debo ser ejecutada con un numero');
test(convierteString, [true], 'Debo ser ejecutada con un numero');
test(convierteString, [], 'Debo ser ejecutada con un numero');