const persona = {
    nif: "24500877F",
    nombre: "Francisco",
    apellidos: "Parra Navarro",
    edad: 19,
    cadado: false,
    direccion:{
        calle: "C/La Pimienta",
        numero: 9,
        codpostal: "04640", //es string porque si lo metemos en una BBDD el 0 se va a tomar porculo
        ciudad: "La Fuente",
        pais: "Españita"
    },
    aficciones: ['maquetar', 'programacion', 'diseñar']
}

//DUPLICAR BIEN EL OBJETO
console.log({...persona});
// consele.log( ...persona.aficciones);
const persona3 = { ...persona};
persona3.nombre = "Alfonso";
persona3.edad = 23;
delete(persona3.aficciones);
console.log(persona3);



//HACER COPIA DEL OBJETO
// const persona2 = persona;
// persona2.nombre = 'María';
// persona2.edad = 25;
// console.log(persona.nombre)
// console.log(persona2.nombre)

// console.log(persona);
// console.log(persona.direccion);
// console.log(persona.aficciones[0]);
// console.log(persona.aficciones.length);
// console.log(persona.aficciones.length - 1);

let ultimo = persona.aficciones.length -1;
console.log(persona.aficciones[ultimo]);
// console.log(persona.apellidos);
// console.table(persona);