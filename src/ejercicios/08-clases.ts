//Maneras de hacer los constructores y las clases
//Clase vacia

class PersonaNormal{

    constructor(
        public nombre: string,
        public direccion: string)
    {}
}


class Heroe extends PersonaNormal{
    
    //constructor con los parámetros que definen los atributos de la clase a la vez
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string)
        {
            super(nombreReal, 'Marchena')
        }
}

const ironman = new Heroe('Ironman', 45, 'Tony');
console.log(ironman);





