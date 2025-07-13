let slides = document.querySelectorAll(".slide");
let baricon = document.getElementById("bar");
let ul = document.querySelector("ul");

console.log(slides);
let count = 0;

slides.forEach(function(slide, index){
  slide.style.left = `${index * 100}%`;

})

function slider() {
  slides.forEach(function(curvel){
    curvel.style.transform = `translateX(-${count * 100}%)`;
    console.log(curvel);
  })
}

setInterval(function(){
  count++;
  if (count==slides.length) {
    count = 0;
  }
  slider();
}, 2000);

//navber

baricon.addEventListener("click", function(){
  ul.classList.toggle("showitem");
  if (ul.className == "showitem") {
    baricon.className ="fa-solid fa-xmark";
  }

  else {
    baricon.className = "fa-solid fa-bars";
  }
})
