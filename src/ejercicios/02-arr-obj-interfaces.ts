/*
    ===== Código de TypeScript =====
*/
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string [];
    //la interrogación hace que sea opcional el campo requerido
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Maolo',
    hp: 100,
    habilidades : ['Bash', 'Counter', 'Healing']
}
personaje.puebloNatal = 'Marchena';
console.table(personaje);