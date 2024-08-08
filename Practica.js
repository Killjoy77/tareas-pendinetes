// var apellido = "Zavaleta" // 
/* comentarios para mas largos */
console.log('Hola consola');
//alert('Hola desde un alert');


// let nombre = "Ximena Nicolee";

// const pi = 3.14;
// String nombre = ""; es una 
// Tipos de datos 

// No definido --> let noDefinido;
// Numero (No se colocan las comillas)--> let cantidad = 50;
// Cadena de texto o String --> string nombre = ""; let bebiba = "agua";
// booleanos --> let activo = true;

//Objeetos
// persona: nombre, apellido, edad, peso
let persona = {Nombre :'Nicolee', Apellido : 'Zavaleta', Edad : 23,}
console.log(persona);
//Arrays coleccion
let personas = [
    {Nombre : 'Leonardo', Apellido : 'Olea', Edad
        : 25,},
    {Nombre : 'Rocio', Apellido : 'Olozagaste', Edad
            : 45,},
    {Nombre : 'Citlali', Apelido : 'Martinez', Edad
                : 27,},
]
console.log(personas);
console.log(personas[0]);

//Funciones JS --> Listado de instrucciones
function suma(params) {
    return 2+2;
}
let resultado = suma( 2, 2);
console.log(resultado);

// Operadores aritmeticos
function suma(a, b) {
    return a + b;
}
let resultadoDeSuma = (9,7);
console.log(resultadoDeSuma);


function multiplicacion(a, b) {
    return a * b
}
let ResultadoDeMultiplicacion = multiplicacion(5, 7);
console.log(ResultadoDeMultiplicacion);