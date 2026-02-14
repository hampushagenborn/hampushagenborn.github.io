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






let struct_slideIndex = 0;
struct_auto_showSlides();

function struct_plusSlides(n) {
    struct_showSlides(struct_slideIndex += n);
}

function struct_currentSlide(n) {
    struct_showSlides(struct_slideIndex = n);
}

function struct_showSlides(n) {
    let struct;
    let struct_slides = document.getElementsByClassName("struct__imgslide");
    let struct_dots = document.getElementsByClassName("struct__dot");
    if (n > struct_slides.length) {struct_slideIndex = 1}
    if (n < 1) {struct_slideIndex = struct_slides.length}
    for (struct = 0; struct < struct_slides.length; struct++) {
        struct_slides[struct].style.display = "none";
    }
    for (struct = 0; struct < struct_dots.length; struct++) {
        struct_dots[struct].className = struct_dots[struct].className.replace(" active", "");
    }
    struct_slides[struct_slideIndex-1].style.display = "block";
    struct_dots[struct_slideIndex-1].className += " active";
}

function struct_auto_showSlides() {
    let struct;
    let struct_slides = document.getElementsByClassName("struct__imgslide");
    let struct_dots = document.getElementsByClassName("struct__dot");
    for (struct = 0; struct < struct_slides.length; struct++) {
        struct_slides[struct].style.display = "none";
    }
    for (struct = 0; struct < struct_dots.length; struct++) {
        struct_dots[struct].className = struct_dots[struct].className.replace(" active", "");
    }
    struct_slideIndex++;
    if (struct_slideIndex > struct_slides.length) {struct_slideIndex = 1}
    struct_slides[struct_slideIndex-1].style.display = "block";
    struct_dots[struct_slideIndex-1].className += " active";
    setTimeout(struct_auto_showSlides, 5000);
}



let inventory_slideIndex = 0;
inventory_auto_showSlides();

function inventory_plusSlides(n) {
    inventory_showSlides(inventory_slideIndex += n);
}

function inventory_currentSlide(n) {
    inventory_showSlides(inventory_slideIndex = n);
}

function inventory_showSlides(n) {
    let inv;
    let inv_slides = document.getElementsByClassName("handlestackableitems__imgslide");
    let inv_dots = document.getElementsByClassName("inventory__dot");
    if (n > inv_slides.length) {inventory_slideIndex = 1}
    if (n < 1) {inventory_slideIndex = inv_slides.length}
    for (inv = 0; inv < inv_slides.length; inv++) {
        inv_slides[inv].style.display = "none";
    }
    for (inv = 0; inv < inv_dots.length; inv++) {
        inv_dots[inv].className = inv_dots[inv].className.replace(" active", "");
    }
    inv_slides[inventory_slideIndex-1].style.display = "block";
    inv_dots[inventory_slideIndex-1].className += " active";
}

function inventory_auto_showSlides() {
    let inv;
    let inv_slides = document.getElementsByClassName("handlestackableitems__imgslide");
    let inv_dots = document.getElementsByClassName("inventory__dot");
    for (inv = 0; inv < inv_slides.length; inv++) {
        inv_slides[inv].style.display = "none";
    }
    for (inv = 0; inv < inv_dots.length; inv++) {
        inv_dots[inv].className = inv_dots[inv].className.replace(" active", "");
    }
    inventory_slideIndex++;
    if (inventory_slideIndex > inv_slides.length) {inventory_slideIndex = 1}
    inv_slides[inventory_slideIndex-1].style.display = "block";
    inv_dots[inventory_slideIndex-1].className += " active";
    setTimeout(inventory_auto_showSlides, 5000);
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
