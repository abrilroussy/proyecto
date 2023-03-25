
export class persona {
    id: number;
    nombre: String;
    apellido: String;
    img: String;
    titulo: String; 
    descripcion: String; 
    header: String; 

    public constructor(id: number, nombre: String, apellido: String, img: String, titulo: String, descripcion: String, header: String){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.titulo = titulo; 
        this.descripcion = descripcion;
        this.header = header;
    }

    public getNombre(){
        return this.nombre;
    }
}