const button = document.querySelector("button");
button.addEventListener("click",redes);

function redes() {
    document.querySelector(".red").classList.toggle("visible");
    button.classList.toggle("active-boton")
}