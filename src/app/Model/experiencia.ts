export class Experiencia {
    id? : number;
    nombreE : string; 
    descripcionE : string; 
    aniosE : string;

    constructor (nombreE: string, descripcionE: string, aniosE: string) {
            this.nombreE = nombreE;
            this.descripcionE = descripcionE;
            this.aniosE = aniosE;
    }
}
