/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento:T){
    return argumento;
}
let soyString = queTipoSoy("Hola Mundo");
let soyNumber = queTipoSoy(100);
let soyArreglo = queTipoSoy( [,12,3,4,5,6,7,8,9,10]);

//Se puede especificar el tipo de la variable a partir de un genérico

let soyExplicito = queTipoSoy<number>(100);
//Voy a darle una salida para c¡verlo todo, según los tipos en la consola van a variar los colores

console.log(soyString, soyNumber,soyArreglo, soyExplicito);
