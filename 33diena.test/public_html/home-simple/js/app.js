document.getElementById('closebtn').addEventListener('click', closeNav);
document.getElementById('openbtn').addEventListener('click', openNav);
console.log("loaded")

  function openNav(){
    document.getElementById("mobile-menu").style.width = "75%";
    console.log("opened")
  }

  function closeNav(){
    document.getElementById("mobile-menu").style.width = "0";
    console.log("closed")
  }

var slide_index = 1;
displaySlides(slide_index);
  function nextSlide(n) {
    displaySlides(slide_index += n);
  }
  function currentSlide(n) {
    displaySlides(slide_index = n);
  }
  function displaySlides(n) {
    var i;
    var slides = document.getElementsByClassName("showSlide");
    if (n > slides.length) { slide_index = 1 }
    if (n <1) { slide_index = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
  }
