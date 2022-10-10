const slide = [
  {
    img: "./_ (1).jpeg",
    name: "1"
  },
  {
    img: "./_ (1).jpeg",
    name: "2"
  },
  {
    img: "./_ (1).jpeg",
    name: "3"
  },
  {
    img: "./_ (1).jpeg",
    name: "4"
  }
];
console.log(slide);
/*const slide = document.querySelectorAll(".slide")

const nextButton =document.querySelector(".next_button");

const prevButton = document.querySelector(".prev_button");

slide.forEach((function (slide, index) {
  slide.style.left = `${index * 100}%`;
}));

let counter = 0;

nextButton.addEventListener("click", function () {
  counter++;
  carrusel()
});

prevButton.addEventListener("click", function(){
  counter--;
  carrusel();
})

function carrusel() {

  if (carrusel === slide.length) {
    counter = 0;
  }
  if (counter < 0 ) {
    counter = slide.length - 1;
  }


  slide.forEach((function(slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`
  }));

}
*/
