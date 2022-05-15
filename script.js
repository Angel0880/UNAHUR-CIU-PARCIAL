//BOTONES MODAL

const abrirCrear = document.querySelector(".modal-abrir-boton")
const abrirEditar = document.querySelector(".modal-2-abrir-boton")
const modalCrear = document.querySelector(".modal")
const modalEditar = document.querySelector(".modal-2")
const cerrarCrear = document.querySelector(".modal-cerrar-boton")
const cerrarEditar = document.querySelector(".modal-2-cerrar-boton")
const crear = document.querySelector(".modal-crear-serie")
const editar = document.querySelector(".modal-editar-serie")
const tabla = document.getElementById("tabla")
const mas = document.getElementById("mas")
const menos = document.getElementById("menos")
const eliminar = document.getElementById("eliminar")
const botonBuscar = document.getElementById("botonBusqueda")

abrirCrear.addEventListener("click",(e)=>{

    modalCrear.classList.toggle("hidden")
    modalCrear.classList.add(".modal--show");

})

abrirEditar.addEventListener("click",()=>{

    modalEditar.classList.toggle("hidden")
    modalEditar.classList.add(".modal--show");

})

cerrarCrear.addEventListener("click", ()=>{

    modalCrear.classList.toggle("hidden");
    modalCrear.classList.remove(".modal--show");

})

cerrarEditar.addEventListener("click", ()=>{
    
    modalEditar.classList.toggle("hidden");
    modalEditar.classList.remove(".modal--show");

})

// BIENVENIDA

var nombre = prompt("Hola, cual es tu nombre?")

alert("Encantado de conocerte " + nombre)

alert("Bienvenido a Tus Series!")
alert("En este programa vas a poder llevar un registro de tus series")
alert("Antes de comenzar vamos a tirar unos tips")
alert("Primero: Una vez creada una serie, para buscarla debes escribirla en el recuadro y darle al boton buscar")
alert("Segundo: Antes de editar tu serie debes hacer doble clik en la que quieres editar")
alert("Tercero: Utiliza los + y - para agregar o sacar una temporada vista a tu serie. Tambien debe estar seleccionada")
alert("Eso es todo. Que lo disfrutes!!!")

// VALIDAR "CREAR UNA SERIE"

crear.addEventListener("click", () => {
  const nombreSerie = document.getElementById("crearNombre").value
  const cantTemporadas = document.getElementById("crearTemporada").value
  if (nombreSerie == "" || cantTemporadas == ""){
    alert("No puedo crear si no escribes en todos los campos")
    return false
  } 
  else if (isNaN(cantTemporadas)){
    alert("'Temporadas' debe ser un numero")
    return false
  }
  else if (cantTemporadas == 0 ) {
    alert("'Temporadas' debe ser mayor a 0")
    return false
  } 
  else if (!isNaturalNumber(cantTemporadas)) {
    alert("'Temporadas' debe ser un numero natural")
    return false
  }
  
  crearSerie(nombreSerie,cantTemporadas);
  modalCrear.classList.toggle("hidden");
  modalCrear.classList.remove(".modal--show");
  
})

// VALIDAR "EDITAR UNA SERIE"

editar.addEventListener("click", () => {

  var nombreACambiar = document.getElementById("editarNombre").value
  var temporadasACambiar = document.getElementById("editarTemporadas").value
  var temporadasVistasACambiar = document.getElementById("editarTemporadasVistas").value
  
  if (nombreACambiar == "" || temporadasACambiar == "" || temporadasVistasACambiar == ""){
    alert("No puedo crear si no escribes en todos los campos")
    return false
  } 
  else if (isNaN(temporadasACambiar) || isNaN(temporadasVistasACambiar)){
    alert("'Temporadas' y 'Temporadas Vistas' deben ser numeros")
    return false
  }
  else if (temporadasACambiar == 0 ) {
    alert("'Temporadas' debe ser mayor a 0 ")
    return false
  } 
  else if (!isNaturalNumber(temporadasACambiar) || !isNaturalNumber(temporadasVistasACambiar)) {
    alert("'Temporadas' y 'Temporadas Vistas' deben ser numeros naturales")
    return false
  }
  else if (temporadasVistasACambiar < temporadasACambiar){
    alert("Las temporadas vistas no pueden ser mayor al numero de temporadas")
    return filaRoja
  } 
  else if(filaRoja == null){
    alert("Debes selecionar la serie que quieres editar")
  } 
  else{
    editarSerie(nombreACambiar,temporadasACambiar,temporadasVistasACambiar);
    modalEditar.classList.toggle("hidden");
    modalEditar.classList.remove(".modal--show");
  }

})

function isNaturalNumber(n) {
  n = n.toString();
  var n1 = Math.abs(n),
      n2 = parseInt(n, 10);
  return !isNaN(n1) && n2 === n1 && n1.toString() === n;
}

//CREAR UNA SERIE
  
function crearSerie(nombreSerie, cantTemporadas) {
  var nuevoTbody = document.querySelector("tbody");

  var nuevoTr = document.createElement("tr");

  var celdanro1 = document.createElement("td");
  var celdanro2 = document.createElement("td");
  var celdanro3 = document.createElement("td");
  var celdanro4 = document.createElement("td");


  var celdas = [celdanro1, celdanro2, celdanro3, celdanro4]

  nuevoTbody.appendChild(nuevoTr);
  
  celdanro1.innerHTML = nombreSerie.toUpperCase()
  celdanro2.innerHTML = cantTemporadas
  celdanro3.innerHTML = 0
  celdanro4.innerHTML = 0 + "%"

  for (let i = 0; i < celdas.length; i++) {
    nuevoTr.appendChild(celdas[i]);
  }

}

//EDITAR UNA SERIE

function editarSerie(nombreSerie, cantTemporadas, temporadasVistas) {
  console.log(cantTemporadas)
  console.log(temporadasVistas)
  var tdSeleccionados = filaRoja.querySelectorAll("td");

  tdSeleccionados[0].textContent = nombreSerie.toUpperCase()
  tdSeleccionados[1].textContent = cantTemporadas
  tdSeleccionados[2].textContent = temporadasVistas

  modificarPorcentaje(tdSeleccionados)

}

//SELECCIONAR UNA SERIE

var filaRoja = document.querySelector(".fila")

var seleccionSerie = () => {
    for(let i = 1; i < tabla.rows.length; i++){
        tabla.rows[i].addEventListener("click", function(){
            if(filaRoja != null){
              filaRoja.classList.remove("fila")
            }

            tabla.rows[i].classList.toggle("fila")
            filaRoja = tabla.rows[i]
            
        })
    
    }
}

tabla.addEventListener("click", seleccionSerie)


// AGREGAR UNA TEMPORADA A TEMPORADAS VISTAS

mas.addEventListener("click", function(){

  if(filaRoja == null){
      alert("No hay una fila seleccionada")
  } else {
      var celdasFilaSelecc = filaRoja.querySelectorAll("td");
      var num = parseInt(celdasFilaSelecc[2].innerHTML) + 1;
  
      if(num <= parseInt(celdasFilaSelecc[1].innerHTML)){
          celdasFilaSelecc[2].innerHTML = num
      } else {
          alert("No se puede agregar, supera la totalidad de temporadas de la serie")
      }

      modificarPorcentaje(celdasFilaSelecc)
  }
  
})

// SACAR UNA TEMPORADA A TEMPORADAS VISTAS

menos.addEventListener("click", function(){

  if(filaRoja == null){
      alert("No hay una fila seleccionada")
  } else {
      var celdasFilaSelecc = filaRoja.querySelectorAll("td");
      var num = parseInt(celdasFilaSelecc[2].innerHTML) - 1;
  
      if(num >= 0){
          celdasFilaSelecc[2].innerHTML = num
      } else {
          alert("Las temporadas vistas no pueden ser menores a 0")
      }

      modificarPorcentaje(celdasFilaSelecc)
  }
})

// SACAR PORCENTAJE DE TEMPORADAS VISTAS

function modificarPorcentaje(celdas){
  var numCelda = parseInt(celdas[2].innerHTML)
  var porcentaje = 
      (numCelda * 100) / parseInt(celdas[1].innerHTML)

  celdas[3].textContent = porcentaje.toFixed(1) + "%"
}


// BUSCAR UNA SERIE CREADA

buscarInput = document.getElementById("textoBusqueda")

const buscar = function(){
  const texto = buscarInput.value.toLowerCase();

  for(let i = 1; i < tabla.rows.length; i++){
      let found = false;
      const celdasDeLaFila = tabla.rows[i].querySelectorAll("td");
      const compararCon = celdasDeLaFila[0].textContent.toLowerCase();

      if(compararCon.indexOf(texto) !== -1){
          found = true;
      }

      if(found){
          tabla.rows[i].style.display = '';
      } else {
          tabla.rows[i].style.display = 'none';
      }

  }
}

botonBuscar.addEventListener("click", buscar)



