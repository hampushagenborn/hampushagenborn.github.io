const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");


const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
}

menu.addEventListener("click", mobileMenu);



const hideMobileMenu = () => {
    const menuBars = document.querySelector(".is-active")
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle("is-active")
        menuLinks.classList.remove("active")
    }
}


menuLinks.addEventListener("click", hideMobileMenu)
navLogo.addEventListener("click", hideMobileMenu)






let slideIndex = 0;
auto_showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("struct__imgslide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function auto_showSlides() {
    let i;
    let slides = document.getElementsByClassName("struct__imgslide");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(auto_showSlides, 5000);
}






var modal = document.getElementById("itemtable__modal");

var span = document.getElementsByClassName("itemtable__close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

var images = document.getElementsByClassName("itemdata__datatable__img");
var modalImg = document.getElementById("itemtable__modal__img");
var i;
for (i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}