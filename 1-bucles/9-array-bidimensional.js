// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [
    [],
    [],
    []
]

/*var lamatriz = [];
console.log(lamatriz[0] = {
    nombre: "placa",
    edad: 30
});*/
for (var i = 0; i < matriz.length; i++) {

    //  for (var j = 0;j)
    for (var e = 0; e < 3; e++) {
        matriz[i][e] = i + "" + e;
    }

}
console.log(matriz);