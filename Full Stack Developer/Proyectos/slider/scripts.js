/*const slide = [
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
];*/
const slide = document.querySelectorAll(".slide");
console.log(slide);

const nextButton =document.querySelector(".next_button");

const prevButton = document.querySelector(".prev_button");

nextButton.addEventListener("click", function () {
  counter++;
  carrusel()
});

prevButton.addEventListener("click", function(){
  counter--;
  carrusel();
})

slide.forEach((function (slide, index) {
  slide.style.left = `${index * 100}%`;
}));

let counter = 0;



function carrusel() {

  /*if (carrusel === slide.length) {
    counter = 0;
  }
  if (counter < 0 ) {
    counter = slide.length-1;
  }*/


  if (counter < slide.length-1) {
    nextButton.style.display = "block";
  } else {
    nextButton.style.display = "none"
  }

  if (counter > 0) {
    prevButton.style.display ="block"
  } else{
    prevButton.style.display = "none"
  }
  slide.forEach((function(slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`
  }));

}
