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
