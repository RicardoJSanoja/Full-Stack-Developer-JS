console.log("hola mundo");

/* Constants*/

const navbarMenu = document.querySelector(".navbar-email"); //imagen

const desktopMenu = document.querySelector(".desktop-menu");

const movilMenuHamburger = document.querySelector(".menu"); //imagen

const movilMenu = document.querySelector(".mobile-menu");

const carrito = document.querySelector(".navbar-shopping-cart"); //imagen

const productoDetallado = document.querySelector("#detalle-producto");

const cardsContainer = document.querySelector(".cards-container");

/* Events Listeners*/

navbarMenu.addEventListener("click", menuRetractil);

movilMenuHamburger.addEventListener("click", menuHamburguesaRetractil);

carrito.addEventListener("click", productoDetailRetractil);

/*Functions*/

// Interacción entre Menus

function menuRetractil(){
  const isProductoClose = productoDetallado.classList.contains("inactive");

  if (!isProductoClose) {
    productoDetallado.classList.add("inactive");
  };

  desktopMenu.classList.toggle("inactive");
}

function menuHamburguesaRetractil(){
  const isProductoClose = productoDetallado.classList.contains("inactive");

  if (!isProductoClose) {
    productoDetallado.classList.add("inactive");
  }

  movilMenu.classList.toggle("inactive");
}

function productoDetailRetractil(){
  const isMovilMenuClose = movilMenu.classList.contains("inactive");
  
    if (!isMovilMenuClose) {
      movilMenu.classList.add("inactive");
    };

  const isDesktopMenuClose = desktopMenu.classList.contains("inactive");

    if (!isDesktopMenuClose) {
      desktopMenu.classList.add("inactive")
    };

  productoDetallado.classList.toggle("inactive");
}


/*  Segunda Solución a la interacción entre menus

function menuRetractil()
{
    movilMenu.classList.add('inactive');
    productoDetallado.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function menuHamburguesaRetractil()
{
    desktopMenu.classList.add('inactive');
    productoDetallado.classList.add('inactive');
    movilMenu.classList.toggle('inactive');
}

function productoDetailRetractil()
{
    desktopMenu.classList.add('inactive');
    movilMenu.classList.add('inactive');
    productoDetallado.classList.toggle('inactive');
}
*/

// Integración de Productos con JS

const  productList = [];

productList.push({
    name: "bicicleta",
    price: 100,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "PC",
    price: 160,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "iphone",
    price: 1000,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

for(product of productList){

  //product card div - 1º
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  //imagen del product card - 2º
  const img = document.createElement("img");
  img.setAttribute("src", product.imagen);

  //product-info div - 3º
  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  // div contenedor de <p> - 4º
  const productInfoDiv = document.createElement("div");

  // <p> price - 5º
  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + product.price;

  // <p> name - 6º
  const productName = document.createElement("p");
  productName.innerText = product.name;

  //figure donde va el icono - 7º
  const productInfoFigure = document.createElement("figure");

  //icono img - 8º
  const imgInfo = document.createElement("img");
  imgInfo.setAttribute("src", "./icons/bt_add_to_cart.svg");

  /* fusión */

    productInfoFigure.appendChild(imgInfo);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(img);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
}

console.log(productList);
