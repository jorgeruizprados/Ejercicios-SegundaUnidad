let arrayNotas = [1,2,2.4,3,3.3,4,5,5.5,6,7,8,8.9,9,9.8,10];
let aprobados = arrayNotas.filter(function(nota){
 if(nota>=5){
     return true;
 }else{
    return false;
 }

});
console.log(aprobados);

/**
 * 
 * 
 */
let valorCinco = (Element)=> Element ==5.5;
console.log(arrayNotas.findIndex(valorCinco));

/**
 * 
 */
let arrayNotas = [1,2,2.4,3,3.3,4,5,5.5,6,7,8,8.9,9,9.8,10];

let todos = arrayNotas.every(palabra => palabra[0] >5);
console.log(todos);

/***
 * 
 */
let arrayPalabras=["hola","adios","camion","Alberto","baño","ordenador","jorge"]
let caracteres = arrayPalabras.filter(palabra => arrayPalabras.length<=6);
  
console.log(caracteres);

let ooo = arrayPalabras.find(palabra=> palabra[0]==o)ç
cosole.log(ooo);

/**
 * 
*/
let arrayNumeros=[124124,1243,1243124,1234122,12341223,3526345,32543,4542]
let ultimo = arrayNumeros.some(telefono=>{
    let numeroTelfono = telefono.toString();
    return(numeroTelfono[numeroTelfono.length-1]=="3");
})

/**
 * 
 *  */


let mapArray = arrayNumeros.reduce(function(acumulador,siguienteValor)){
    retuen
}
