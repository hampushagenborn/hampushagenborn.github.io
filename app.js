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






var itemdata_modal = document.getElementById("itemtable__modal");

var itemdata_span = document.getElementsByClassName("itemtable__close")[0];

itemdata_span.onclick = function() {
    itemdata_modal.style.display = "none";
}

var itemdata_images = document.getElementsByClassName("itemdata__datatable__img");
var itemdata_modalImg = document.getElementById("itemtable__modal__img");
var itemdata;
for (itemdata = 0; itemdata < itemdata_images.length; itemdata++) {
    itemdata_images[itemdata].onclick = function() {
        itemdata_modal.style.display = "block";
        itemdata_modalImg.src = this.src;
    }
}

var tooltip_modal = document.getElementById("tooltipclass__modal");

var tooltip_span = document.getElementsByClassName("tooltipclass__close")[0];

tooltip_span.onclick = function() {
    tooltip_modal.style.display = "none";
}

var tooltip_images = document.getElementsByClassName("tooltipclass__img");
var tooltip_modalImg = document.getElementById("tooltipclass__modal__img");
var tooltip;
for (tooltip = 0; tooltip < tooltip_images.length; tooltip++) {
    tooltip_images[tooltip].onclick = function() {
        tooltip_modal.style.display = "block";
        tooltip_modalImg.src = this.src;
    }
}