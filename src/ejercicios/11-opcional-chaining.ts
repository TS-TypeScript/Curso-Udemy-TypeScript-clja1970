/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
nombre: string;
hijos?: string[];
}

const pasajeroUno: Pasajero = {
    nombre: "Fernando"
}

const pasajeroDos: Pasajero = {
    nombre: "Obdulia",
    hijos: ["Natalia", "Maolo"]
}

function imprimirHijos(pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimirHijos(pasajeroUno);