function agregarMensaje(){


    let textoIngresado= document.getElementById("txtMensaje");

    let parrafoMensaje=document.createElement("p");
    parrafoMensaje.innerHTML= "mensaje:"+  textoIngresado.value;

    console.log( parrafoMensaje.innerHTML);

    let contenedor= document.getElementById("areaMensajes");

    contenedor.appendChild(parrafoMensaje);
}

// paso 1 agarro el elemento
let  boton1= document.getElementById("mostrar2");
//paso2  agregar evento: tiene 2 valores
 //  1. que evento
 // 2. que function llama al accionar el evento
boton1.addEventListener('click',
                        ()=> {mensajeBienvenida();} 
                        )

function mensajeBienvenida(){
        console.log("Hola");
}

let boton2= document.getElementById("mostrar3");
boton2.addEventListener( 'click',()=>{  
    
    let elemento = document.getElementById("mih1");
    elemento.style.color="blue";
});
                      