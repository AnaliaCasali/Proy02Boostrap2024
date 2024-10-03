
let elementoH2 =document.getElementById("titulo");
elementoH2.innerHTML="TRABAJANDO CON JS";
elementoH2.style.color="#AABBCC";

let elementosRojos = document.getElementsByClassName("rojos");
for (let i = 0; i < elementosRojos.length; i++) {
  elementosRojos[i].style.color = "red"; // Cambiar color a rojo
}

// Hacer obligatorio el campo DNI
let elementoDni = document.getElementById("txtDni");
// edito el atributo requerido para hacer que el campo sea de ingreso obligatorio
elementoDni.required = true;

// Modificar el valor del botón de envío
let btn = document.getElementById("btnEnviar");
btn.value = "Guardar";


// creo un nuevo elemento h4
let titulo4=document.createElement("h4");
titulo4.innerHTML="Titulo h4 agregado desde JS ";

// atrapo el  elemento al cual le voy a agregar el nuevo elemento
let miContenedor=document.getElementById("contenedor");

// agrego el h4 al aside
miContenedor.appendChild(titulo4);

