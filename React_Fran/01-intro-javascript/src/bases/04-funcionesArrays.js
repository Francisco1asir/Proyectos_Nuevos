// const datos =  new Array();
// const valores1 = [23,45,12,45,21,25]; 

let valores = [] ;
valores.push(2);
valores.push(45);
valores.push(67);
valores.unshift(11); //añadir al principio del array
// valores.pop(100);
// let edades = valores;
const edades = [300, ...valores]; //duplicado en condiciones
// console.log(valores, edades);


let datos = [88, ...valores, 100, 105]
datos.push(99);
// console.log(valores);
console.log(datos);

//metodos sobre arrays
//recorrer los elementos de un array
// datos.forEach(function(valor){ 
//     console.log("valor =", valor);
// })
    
datos.forEach((valor) =>{
    console.log(valor * 2);

})
 


