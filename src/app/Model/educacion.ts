export class Educacion {
    id? : number;
    nombreEdu : string; 
    descripcionEdu : string; 
    aniosEdu : string;

    constructor (nombreEdu: string, descripcionEdu: string, aniosEdu: string) {
            this.nombreEdu = nombreEdu;
            this.descripcionEdu = descripcionEdu;
            this.aniosEdu = aniosEdu;
    }
}
