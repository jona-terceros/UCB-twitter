export class Post{
    constructor(titulo, detalle){
        this.titulo = titulo;
        this.detalle = detalle;

    }
    agregarDetalle(detalle){
        this.detalle = detalle;
    }
    getTitulo(){
        return this.titulo;
    }
    getDetalle(){
        return this.detalle;
    }

    
}