//VARIABLES
/* 1) Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una variable y para qué sirve?
- Es un espacio resevado en memoria.
¿Cuál es la diferencia entre declarar e inicializar una variable?
- La primera le indica a JS que existe la variable, mientras que inicializarlo la iguala a un valor.
¿Cuál es la diferencia entre sumar números y concatenar strings?
- Una suma estas calculado un valro entre dos números; concatenar es unir dos líneas literales.
¿Cuál operador me permite sumar o concatenar?
- +
*/

/*
2) Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
Nombre - String
Apellido - String
Nombre de usuario en Platzi - string
Edad - number
Correo electrónico - string
Mayor de edad - booleano
Dinero ahorrado - number
Deudas - number

3) Traduce a código JavaScript las variables del ejemplo anterior
*/
  var nombre = "Ricardo";
  var apellido = "Sanoja";
  var nombreDeUsuarioEnPlatzi = "Ricardo Sanoja";
  var edad = 20;
  var correoElectronico = "rsanojasossa@gmail.com"
  var mayorDeEdad = true;
  var dineroAhorrado = 100;
  var deudas = 30;

/*
4) Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)
*/

var nombreCompleto = nombre + apellido;
var dineroReal = dineroAhorrado - deudas;

//FUNCIONES

/*
1) Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función?
Es una sección de código donde se indica una acción, tarea, procedimiento a realizar
¿Cuándo me sirve usar una función en mi código?
Cuando es necesario realizar un procedimiento y este es repetitivo.
¿Cuál es la diferencia entre parámetros y argumentos de una función?
Los parámetros son indicados cuando la función se crea. Cuando la misma es llamada, los parámtros dejan de serlo
y pasan a ser argumentos.

2) Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes
por parámetros y argumentos en una función:
*/

var nickname = "Facundo";
function saludo( nombre, apellido , "nickname"){
  console.log("Mi nombre es " + nombre + apellido ", pero prefiero que me digas " + nickname + ".");
};

//CONDICIONALES
/*
1)Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?
- Es una funcion que se aplica cuando se cumple una condicion, sea por una condicion de verdad, igualdad o
una condicion donde si no se aplica esto, entonces lo otro.
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
- Con el condicional If…Else podemos tener diferentes expresiones para evaluar dependiente del caso, y generar
tantos If o else como sea necesario. Mientras que Switch case toma una sola expresión de entrada pero puede
evaluar todos los casos como sea necesario de una forma más ordenada.
¿Puedo combinar funciones y condicionales?
- si se puede. De hecho, es una buena practica inclusive. Sin embargo, no se pueden juntar dos condiciones en
una sola sentencia; en tal caso, se crea la segunda condicion a partir del resultado de la primera.

2) Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
*/
var tipoDeSuscription = "toma un plan, adelante";

function plan(tipoDeSuscription) {
 if(tipoDeSuscription == "Free"){
 console.log("Solo puedes tomar los cursos gratis que te ofrece Platzi")
 } else if (tipoDeSuscription == "basic"){
 console.log("Puedes tomar parte de los cursos en Platzi por un mes")
 } else if (tipoDeSuscription == "expert"){
 console.log("Puedes tomar la gran mayoria de los cursos en Platzi por un año!!")
 } else if (tipoDeSuscription  =="expertduo"){
 console.log("Puedes tomar todos los cursos de Platzi con un amigo durante un año")
 } else {
 console.log("Suscribete a Platzi para que puedas ver todos los cursos y planes que tenemos")
 }
};

//CICLOS
/*

2) Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```

for (let i = 0; i < 5; i++) {
console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

*/

let i = 0;
while(i < 5){
  console.log("El valor de i es" + i)
  i++;
}

let y = 10;
while(y >= 2){
  y--
  console.log("El valor de y es " + y )
}

/*
3) Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2.
Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
*/

let pregunta = prompt("Cuanto es 2 + 2?");
while(pregunta != 4){
    pregunta = prompt("Cuidado, te equivocaste. Cuanto es 2 + 2?");
}
alert("Excelente, sabes sumar!");

// como se resuelve el mismo problema pero con for?

//LISTAS
/*
2) Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

3) Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos
uno por uno (no se vale imprimir el array completo).
*/

var numeros = [1,2,3,4,5,6,7,8,9]

function lista(arr){
 console.log(arr[1]);
}

function iXi(arr){
 for(var i=0; i < arr.length; i++);{
 console.log(arr[i]);
 }
}

let carro = {
  modelo: "corolla",
  marca: "Chevorolet",
  anno: "2021",
}

function vehiculo(obj) {
    var arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
