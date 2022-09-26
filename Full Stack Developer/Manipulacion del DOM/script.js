console.log("Hello, world");
/*
const h1 = document.querySelector('h1');//se usa para leer HTML desde JavaScript y optener elementos del mismo.
//Lo mejor es guardalo en una variable
const p = document.querySelector('p');//el elemento sin niguna etiqueta
const paragraf = document.querySelector('.paragraf'); // elemento con una clase
const pID = document.querySelector('#pID'); // elemento con un ID
const input = document.querySelector('input');
*/
const formulario = document.querySelector("#formulario");
const variable_a = document.querySelector("#variable_a");
const variable_b = document.querySelector("#variable_b");
const calcular = document.querySelector("#calcular");
const pr = document.querySelector("#parrafo_resultado");

formulario.addEventListener('submit',sumarInputValues);

//addEventListenner() lleva dos argumentos, el nombre del evento que se va a ejecutar y el códig js que se va a ejecutar

function sumarInputValues(event) {
  event.preventDefault();
  let resultado = Number(variable_a.value) + Number(variable_b.value);
  pr.innerText = "El resultado de tu operacion es: " + resultado;
}



/*
________________________________________________________________________________________________________________________
function calcularOnClick(){
  let resultado = variable_a.value + variable_b.value;
  //console.log(variable_a.value + variable_b.value)
  pr.innerText = "El resultado de tu operacion es: " + resultado;
// la funcion .value nos permite acceder al valor de las variables.
//tarea: covertir esos valores en numeros y sumarlos:
- let resultado = Number(variable_a.value) + Number(variable_b.value);
 console.log("Cambió el contenido");
}

/*
_____________________________________________________________________________________________________________________
console.log({
  h1,
  p,
  paragraf,
  pID,
  input,
}) // es para inspeccionar cada uno de los elementos.

console.log(input.value) tipea esto en consola despues de escribir en el cuadro de input dentro de la pagina

h1.innerHTML = "Hola <br> mundo". Esto convierte todo el script a HTML
h1.innerHTML = "Hola <br> mundo". Lo convierte a texto normal
______________________________________________________________________________________________________________
*/
