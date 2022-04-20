/*
    ===== Código de TypeScript =====
*/

function classDecorator<T extends{ new (...args: any[]):{}} >(
    constructor: T
){
    return class extends constructor {
        newProperty = "new propertyr";
        hello = "override";
    };
}
@classDecorator
class MiSuperclase{

    public miPropiedad: string = 'ABCD123';

    imprimir(){
        console.log('Hola Mundo');
    }
}
console.log(MiSuperclase);

const miClase = new MiSuperclase();
console.log(miClase.miPropiedad);

