/* ----------------------------------------------- */
/* MEADGARD */
/* ----------------------------------------------- */

/* ----------------------------------------------- */
/* INTERACTABLE SIGN */
/* ----------------------------------------------- */

var interactable_sign_modal = document.getElementById("interactable_sign__modal");
var interactable_sign_span = document.getElementsByClassName("interactable_sign__close")[0];
var interactable_sign_images = document.getElementsByClassName("interactable_sign__img");
var interactable_sign_modalImg = document.getElementById("interactable_sign__modal__img");

interactable_sign_span.onclick = function() {
    interactable_sign_modal.style.display = "none";
}

for (var i = 0; i < interactable_sign_images.length; i++) {
    interactable_sign_images[i].onclick = function() {
        interactable_sign_modal.style.display = "block";
        interactable_sign_modalImg.src = this.src;
    }
}

// ✅ Close when clicking outside the image
interactable_sign_modal.onclick = function(event) {
    if (event.target === interactable_sign_modal) {
        interactable_sign_modal.style.display = "none";
    }
}



/* ----------------------------------------------- */
/* GUEST ORDERING LOGIC */
/* ----------------------------------------------- */

var guest_ordering_logic_modal = document.getElementById("guest_ordering_logic__modal");
var guest_ordering_logic_span = document.getElementsByClassName("guest_ordering_logic__close")[0];
var guest_ordering_logic_images = document.getElementsByClassName("guest_ordering_logic__img");
var guest_ordering_logic_modalImg = document.getElementById("guest_ordering_logic__modal__img");

guest_ordering_logic_span.onclick = function() {
    guest_ordering_logic_modal.style.display = "none";
}

for (var i = 0; i < guest_ordering_logic_images.length; i++) {
    guest_ordering_logic_images[i].onclick = function() {
        guest_ordering_logic_modal.style.display = "block";
        guest_ordering_logic_modalImg.src = this.src;
    }
}

// ✅ Close when clicking outside the image
guest_ordering_logic_modal.onclick = function(event) {
    if (event.target === guest_ordering_logic_modal) {
        guest_ordering_logic_modal.style.display = "none";
    }
}



/* ----------------------------------------------- */
/* DECORATION SYSTEM */
/* ----------------------------------------------- */

var decoration_system_modal = document.getElementById("decoration_system__modal");
var decoration_system_span = document.getElementsByClassName("decoration_system__close")[0];
var decoration_system_images = document.getElementsByClassName("decoration_system__img");
var decoration_system_modalImg = document.getElementById("decoration_system__modal__img");

decoration_system_span.onclick = function() {
    decoration_system_modal.style.display = "none";
}

for (var i = 0; i < decoration_system_images.length; i++) {
    decoration_system_images[i].onclick = function() {
        decoration_system_modal.style.display = "block";
        decoration_system_modalImg.src = this.src;
    }
}

// ✅ Close when clicking outside the image
decoration_system_modal.onclick = function(event) {
    if (event.target === decoration_system_modal) {
        decoration_system_modal.style.display = "none";
    }
}