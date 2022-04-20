import { calcularIVA, Producto } from "./06-desestructuración-funcion";


/*
    ===== Código de TypeScript =====
*/
 const carritoCompras: Producto[] = [
     {
         desc: 'Telefono 1',
         precio: 100
     },
     {
         desc: 'Telefono 2',
         precio: 150
     },
 ];

 const [total, iva] = calcularIVA(carritoCompras);
 console.log('Total: ', total);
 console.log('IVA: ', iva);
 console.log('Prueba');




