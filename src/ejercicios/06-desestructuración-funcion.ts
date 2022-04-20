/*
    ===== Código de TypeScript =====
*/
 export interface Producto {
     desc: string;
     precio: number;
 }

 const telefono:Producto = {
     desc: 'Nokia A1',
     precio: 150
 }

 const tablet:Producto = {
    desc: 'Nokia iPad Air',
    precio: 350
}

export function calcularIVA (productos: Producto[]): [number, number]{
    let total = 0;
//({precio}) es lo mismo que (producto: Producto) lo mismo que (producto)
    productos.forEach (({precio}) =>{
        total += precio;
    })
    return [total, total * 0.15];
}
const articulos = [telefono, tablet];
const [total, iva] = calcularIVA(articulos);

//Desestructuración del objeto teléfono

const {desc} = telefono;

console.log('Total', total);
console.log('ISV: ', iva);
console.log(' El iva de ' + desc + " es de: " + iva);