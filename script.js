const abrirCrear = document.querySelector(".modal-abrir-boton")
const abrirEditar = document.querySelector(".modal-2-abrir-boton")
const modalCrear = document.querySelector(".modal")
const modalEditar = document.querySelector(".modal-2")
const cerrarCrear = document.querySelector(".modal-cerrar-boton")
const cerrarEditar = document.querySelector(".modal-2-cerrar-boton")
const crear = document.querySelector(".modal-crear-serie")

var valorNombre = document.getElementById("crearNombre").value
var valorTemporada = document.getElementById("crearTemporada").value

const tabla = document.getElementById("tabla")

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
    modalCrear.classList.toggle("hidden");
    modalCrear.classList.remove(".modal--show");

})

cerrarEditar.addEventListener("click", (e)=>{

    e.preventDefault();
    modalEditar.classList.toggle("hidden");
    modalEditar.classList.remove(".modal--show");

})

crear.addEventListener("click",(e)=>{
    
    e.preventDefault();
    crearSerie(valorNombre,valorTemporada);
    modalCrear.classList.toggle("hidden");
    modalCrear.classList.remove(".modal--show");
    tabla.classList.toggle("hidden");

})

function crearSerie(nombreSerie, cantTemporadas) {

    const bodyTable = document.getElementById("tabla");
    const nuevoTr = document.createElement("tr");

    var celdanro1 = document.createElement("td");
    var celdanro2 = document.createElement("td");
    var celdanro3 = document.createElement("td");
    var celdanro4 = document.createElement("td");

    var textnro1 = document.createElement("p");
    var textnro2 = document.createElement("p");
    var textnro3 = document.createElement("p");
    var textnro4 = document.createElement("p");

    var celdas =[celdanro1,celdanro2,celdanro3,celdanro4]

    bodyTable.appendChild(nuevoTr);

    textnro1.value = nombreSerie
    textnro2.value = cantTemporadas

    celdanro1.appendChild(textnro1)
    celdanro2.appendChild(textnro2)
    celdanro3.appendChild(textnro3)
    celdanro4.appendChild(textnro4)

    for (let i=0; i < celdas.length; i++) {

        nuevoTr.appendChild(celdas[i]);

    }
    
}