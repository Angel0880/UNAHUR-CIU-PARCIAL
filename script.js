const abrirCrear = document.querySelector(".modal-abrir-boton")
const abrirEditar = document.querySelector(".modal-2-abrir-boton")
const modalCrear = document.querySelector(".modal")
const modalEditar = document.querySelector(".modal-2")
const cerrarCrear = document.querySelector(".modal-cerrar-boton")
const cerrarEditar = document.querySelector(".modal-2-cerrar-boton")
const crear = document.querySelector(".modal-crear-serie")

const tabla = document.getElementById("tabla")

abrirCrear.addEventListener("click",(e)=>{

    modalCrear.classList.toggle("hidden")
    modalCrear.classList.add(".modal--show");

})

abrirEditar.addEventListener("click",(e)=>{

    modalEditar.classList.toggle("hidden")
    modalEditar.classList.add(".modal--show");

})

cerrarCrear.addEventListener("click", (e)=>{

    modalCrear.classList.toggle("hidden");
    modalCrear.classList.remove(".modal--show");

})

cerrarEditar.addEventListener("click", (e)=>{

    modalEditar.classList.toggle("hidden");
    modalEditar.classList.remove(".modal--show");

})

crear.addEventListener("click",(e)=>{
    const valorNombre = document.getElementById("crearNombre").value
    const valorTemporada = document.getElementById("crearTemporada").value
    crearSerie({nombreSerie: valorNombre,cantTemporadas: valorTemporada});
    modalCrear.classList.toggle("hidden");
    modalCrear.classList.remove(".modal--show");
    tabla.classList.toggle("hidden");

})

function crearSerie({nombreSerie, cantTemporadas}) {
    const nombreSinEspacios = `${nombreSerie.split(" ").join("")}`;
    document.getElementById("tabla").insertAdjacentHTML(
      "beforebegin",
      `
    <tr>
        <td "text-center border-4 border-black px-8 py-4 text-lg">
            <p id="nombre${nombreSinEspacios}" class="text-gray-900 whitespace-no-wrap">
                ${nombreSerie}
            </p>
        </td>
        <td "text-center border-4 border-black px-8 py-4 text-lg">
            <p id="temporadasTotales${nombreSinEspacios}" class="text-center text-lg rounded-lg w-32 py-1 px-3 text-sm text-black-600">${cantTemporadas}</p>
        </td>
        <td "text-center border-4 border-black px-8 py-4 text-lg">
            <p class="text-center text-lg rounded-lg w-32 py-1 px-3 text-sm text-black-600" id="temporadasVistas${nombreSinEspacios}">
                0
            </p>
        </td>
        <td "text-center border-4 border-black px-8 py-4 text-lg">
            <p id="porcentaje${nombreSinEspacios}" class="text-center text-lg rounded-lg w-32 py-1 px-3 text-sm text-black-600">
                0
            </p>
        </td>
    </tr>
      `
    );
  };