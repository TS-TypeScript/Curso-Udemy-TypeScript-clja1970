/*
    ===== Código de TypeScript =====
*/
//Correcta colocación de los argumentos
function sumar(a:number, b: number): number{
return (a + b);
}
// La siguiente es una función de flecha es la misma sólo que se declara de otra manera
const sumarFlecha = (a:number, b: number): number => {
    return a + b;
}
//El orden es el siguiente los obligatorios, los opcionales y por último los argumentos
function multiplicar(numero: number, otroNumero?: number, base:number = 2): number {
    return numero * base;
}
/*
const resultado = multiplicar(5,0,10);

console.log(resultado);
*/

interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}
function curar (personaje:PersonajeLOR, curarX:number): void{
    personaje.pv += curarX;
}
const nuevoPersonaje: PersonajeLOR = {
    nombre:'Obdulio',
    pv:50,
    mostrarHp() {
        console.log( this.nombre,' Puntos de vida: ', this.pv);
    }
}
curar( nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();