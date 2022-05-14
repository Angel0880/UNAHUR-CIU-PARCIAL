const abrirCrear = document.querySelector(".modal-abrir-boton")
const abrirEditar = document.querySelector(".modal-2-abrir-boton")
const modalCrear = document.querySelector(".modal")
const modalEditar = document.querySelector(".modal-2")
const cerrarCrear = document.querySelector(".modal-cerrar-boton")
const cerrarEditar = document.querySelector(".modal-2-cerrar-boton")

abrirCrear.addEventListener("click",(e)=>{

    e.preventDefault();
    modalCrear.classList.toggle("hidden")
    modalCrear.classList.add(".modal--show");

})

abrirEditar.addEventListener("click",(e)=>{

    e.preventDefault();
    modalEditar.classList.toggle("hidden")
    modalEditar.classList.add(".modal--show");

})

cerrarCrear.addEventListener("click", (e)=>{

    e.preventDefault();
    modalCrear.classList.toggle("hidden")
    modalCrear.classList.remove(".modal--show");

})

cerrarEditar.addEventListener("click", (e)=>{

    e.preventDefault();
    modalEditar.classList.toggle("hidden")
    modalEditar.classList.remove(".modal--show");

})
