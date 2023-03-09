import {Post} from "./post.js";

export class Posts{
    constructor(){
        this.posts = []
    }
    agregarPost(){
        this.posts.push(Post);
    }
    getTamanio(){
        return this.posts.length;
    }
    mostrarPost(){


        const tituloDiv = document.getElementById("titulo-resultado");
        const detalleDiv = document.getElementById("detalle-resultado");

        tituloDiv.innerHTML = '';
        detalleDiv.innerHTML = '';
      
        for (let i = 0; i < this.getTamanio(); i++) {
          const newContentTitulo = document.createTextNode("titulo: " + this.posts[i].getTitulo());
          const newContentDetalle = document.createTextNode("detalle: " + this.posts[i].getDetalle());
      
          const postDiv = document.createElement("div");
          const tituloSpan = document.createElement("span");
          const detalleSpan = document.createElement("span");
      
          tituloSpan.appendChild(newContentTitulo);
          detalleSpan.appendChild(newContentDetalle);
      
          postDiv.appendChild(tituloSpan);
          postDiv.appendChild(detalleSpan);
      
          tituloDiv.appendChild(tituloSpan.cloneNode(true));
          detalleDiv.appendChild(detalleSpan.cloneNode(true));
        }
      }
      
    

}