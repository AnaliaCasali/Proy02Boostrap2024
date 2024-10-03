/// foreach recorre el array 
let asistencia= ["Ramiro", "Guido","Elian","rodrigo", "Denise" ];

asistencia.forEach(
    (nombre)=>{ console.log("Hoy asistio:"+  nombre);}
)

asistencia.forEach(
    (a)=> { saludar(a);}

);

function saludar(nombre){
    console.log("hola mundo" + nombre);
}
//MAP  para hacer transformaciones

//  transforme la lista de nombres a todo en mayuscula y
// la guardo en la listaMayustula
let listaMayuscula = asistencia.map(
    (a)=> {return a.toUpperCase(); }
);
//mostrando
listaMayuscula.forEach(
    (e)=> {console.log(e);}
);

let edades= [22,23,24,20,18];

let nuevaEdad= edades.map(
    (edad)=> { return edad=edad+1; }
); 

nuevaEdad.forEach( 
    (e)=>{console.log(e);}
);

console.log("////////// FILTER PARA FILTRAR")

console.log("////////// mayores de 20")

let mayores =edades.filter(
    (e)=>{return e= e>20; }
);

mayores.forEach(
    (e)=> {console.log(e);}
);

console.log("///filtro los nombres que comienzan con R")

let algunoConR= asistencia.filter(
    (a)=>{ return a.startsWith('R') || a.startsWith('r');} 
);

algunoConR.forEach(
        e=>console.log(e));

console.log("///FIND BUSCA ELEMENTO Y DEVUELVE VALUE")

console.log(
    "Buscando a Denise:" +  asistencia.find( 
        e=>{return e=='Denise';}
        )
);

console.log(
    "Buscando el indice de  Denise:" +
       asistencia.findIndex(
        e=>{return e=='Denise'; }
       )
);

console.log("///ordenando la asistencia y mostrando")

asistencia.sort().forEach(
    e=>{console.log(e)}
);

console.log("///reduce")

let promedio=    
    edades.reduce(
    (edad1, edad2)=>{return edad1+edad2;} )
    / edades.length;

console.log("el promedio de edades es: " + promedio)
