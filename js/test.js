//declaracion de una variable
let mensaje;

// asigno un valor a la variable
mensaje = "Hola Mundo";

//muestro la variable por consola
console.log(mensaje);

//tipo number
let edad = 18;
//tipo string
let nombreCompleto = "Juan Jose Hernandez";
//boolean
let estudiante = false;
//number
let legajo = 45655;

console.log("estudiante " + nombreCompleto);
console.log("es estudiante " + estudiante);
console.log("edad " + edad);
console.log("legajo " + legajo);

//objeto
let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 25,
  estudiante: true,
};

console.log(
  "persona " +
    persona.nombre +
    " " +
    persona.apellido +
    " edad:" +
    persona.edad +
    " es estudiante:" +
    persona.estudiante
);

// arreglos en javascript
const paises = [
  "Argentina",
  "Chile",
  "Peru",
  "Guatemala",
  "Colombia",
  "Uruguay",
];

console.log("Paises: " + paises[3]);

console.log("comparando numeros:");

let nroSetenta = 70;
let letraSetenta = "70";
// siempre las comparaciones devuelven V o F
console.log("son == 70 y '70':" + (nroSetenta == letraSetenta));
// ^ true porque  coincide valor
console.log("son === 70 y '70':" + (nroSetenta === letraSetenta));
// ^ false porque  coincide valor pero NO tipo de dato

console.log("son distintos != 70 y '70':" + (nroSetenta != letraSetenta));
console.log("son distintos !== 70 y '70':" + (nroSetenta !== letraSetenta));

let esMayor =
  persona.edad > edad && persona.nombre.length > nombreCompleto.length;

console.log("es mayor:" + esMayor);

let seCumpleAlMenosUna =
  persona.edad > edad && persona.nombre.length > nombreCompleto.length;

console.log(" se Cumple Al Menos Una:" + seCumpleAlMenosUna);

console.log(" se Cumple Al Menos Una (NEGADO):" + !seCumpleAlMenosUna);

console.log(" se Cumple Al Menos Una (DOBLE NEGADO):" + !!seCumpleAlMenosUna);

let indumentaria = {
  tipo: "remera",
  talle: "S",
  stock: 100,
  color: "rojo",
  marcaPropia: false,
};
//agrego una propiedad precio a indumentaria
indumentaria.precio = 552200;

console.log(
  "precio indumentaria: " + indumentaria.tipo + " $" + indumentaria.precio
);

// borro una propiedad color de indumentaria
delete indumentaria.color;

// al estar borrado color pasa a ser undefined
console.log("color " + indumentaria.color);

let proveedor = {
  marca: "Proveedor VVBB",
  compraMinima: 2000,
};

// agrego un objeto proveedor a indumentaria
indumentaria.prov = proveedor;

console.log("proveedor indumentaria: " + indumentaria.prov.marca);

// crear  objetos con CONSTRUCTOR asi puedo agregar metodos al objeto
let alumno = new Object({
  nombre: "maria",
  apellido: "Gonzalez",
  edad: 25,
  inscribir: () => {
    console.log("Se ha inscripto correctamente ");
  },
  saludar: () => {
    console.log("Bienvenida maria gonzalez");
  },
});

// llamo al metodo inscribir del alumno
alumno.inscribir();

alumno.saludar();

// key claves
// values valores
// tanto keys como values devuelven un array
console.log("keys de alumno " + Object.keys(alumno));

console.log("values de alumno " + Object.values(alumno));

// entries : par key/value de un  object
console.log("ENTRIES: " + Object.entries(alumno));

console.log("KEYS DE INDUMENTARIA" + Object.keys(indumentaria));
console.log("VALUES DE INDUMENTARIA" + Object.values(indumentaria));
console.log(
  "PARES ATRIBUTO VALOR (ENTRADA) DE INDUMENTARIA" +
    Object.entries(indumentaria)
);

// creamos arrays

let provincias = [
  "santa Fe",
  "San Luis",
  "Chaco",
  "Corrientes",
  "Buenos Aires",
];

let asistente = [
  { nombre: "Julia", dni: 98765411 },
  { nombre: "Maria", dni: 22222222 },
  { nombre: "Juan", dni: 33333333 },
  { nombre: "Pedro", dni: 44455566 },
  { nombre: "Julian", dni: 28885552 },
  { nombre: "Luis", dni: 55522255 },
];

//mostrar el largo array
console.log("La cantidad de provincias ingresadas son " + provincias.length);
console.log("La cantidad de asistentes ingresadas son " + asistente.length);

// shift elimina el primero
console.log(provincias[0]);
provincias.shift();
console.log(provincias[0]);

//pop elimina el ultimo
console.log("ultimo elemento" + provincias[provincias.length - 1]);
provincias.pop();
console.log(
  "borre ultimo y quedo elemento" + provincias[provincias.length - 1]
);

//push agrega al ultimo
provincias.push("Santa Fe");
console.log("agregue ultimo elemento" + provincias[provincias.length - 1]);

// unshift agrega como primer elemento
console.log(" primer elemento" + provincias[0]);
provincias.unshift("Catamarca");
console.log(" agregue primer elemento" + provincias[0]);

console.log(Object.values(provincias));

console.log(Object.keys(provincias));

asistente.unshift({ nombre: "Teresa", dni: 98765455 });
asistente.push({ nombre: "Mario", dni: 55522244 });

console.log(Object.values(asistente));

console.log("BUSCANDO ELEMENTOS EN ARRAY con includes");

console.log(
  "Hay alguien llamada Mario como asistente:" +
    asistente.includes({ nombre: "Mario", dni: 55522244 })
);
console.log("esta Chaco " + provincias.includes("Chaco"));

console.log("BUSCANDO ELEMENTOS EN ARRAY con indexOf");

console.log(
  "El indice de Mario es:" +
    asistente.indexOf({ nombre: "Mario", dni: 55522244 })
);
console.log(
  "el index o posicion de  es Chaco es " + provincias.indexOf("Chaco")
);

// COMIENZAN CON FUNCTION nombreFuncion (parametros){instrucciones}
function sumar(nro1, nro2) {
  return nro1 + nro2;
}
// para llamar a la funcion  y que se ejecute por su nombre
console.log("suma function " + sumar(5, 10));

// funciones anonimas(NO TIENEN NOMBRE) y el resultado
// de la ejecucion se guarda en la variable
const resultado = function (nro1, nro2) {
  return nro1 + nro2;
};
console.log("resultado " + resultado);

function esMayorEdadMenor90(edad) {
  if (edad > 18 && edad < 90) {
    return true;
  } else {
    return false;
  }
}

console.log(" es mayor de edad " + esMayorEdadMenor90(20));
console.log(" es mayor de edad " + esMayorEdadMenor90(91));

function queDiaCobroBeca(ultdni) {
  switch (ultdni) {
    case 1:
      console.log("cobra lunes");
      break;
    case 2:
      console.log("cobra martes");
      break;
    case 3:
      console.log("cobra miercoles");
      break;
    case 4:
      console.log("cobra jueves");
      break;
     default: console.log("fecha no especificada"); 
  }
}
 queDiaCobroBeca(2);
 queDiaCobroBeca(8);

// 
let asistencia = ["Ramiro", "Agustin", "Elian", "Guido", "Denise", "Cristian"];

function mostrarAsistenciadeHoy(asistencia){
        for (let i=0; asistencia.length-1;  i++)
        {
               console.log("Hoy vino " + asistencia[i] );
        }
}
function cuantosAsistencieron(asistencia){
        console.log( asistencia.length);
}
let edades = [18,19,20,22,24,23,22];
function promedioEdades(edades){
        let i=0;
        while(i<edades.length)
        {
            i++;
            console.log(    edades[i]);
            sumaEdades= sumaEdades+edades[i];    
        }
        console.log("el promedio de edades es " + sumaEdades/sumaEdades.length);
}

mostrarAsistenciadeHoy(asistencia);
cuantosAsistencieron(asistencia);
promedioEdades(edades);
