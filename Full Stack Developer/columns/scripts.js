console.log("Hola mundo");

let columna_activa = 1;

//Columnas
const columnas = document.querySelectorAll(".column");

//Seleccion de columnas
columnas.forEach((columnas, index) => {
  columnas.addEventListener("click", function(){
   columnaActiva(index)
 });
});

//Cambiar el tamaño de las columnas

function columnaActiva(index) {
  columnas[columna_activa].classList.remove("activa");
  columnas[index].classList.add("activa");
  columna_activa = index;
}
