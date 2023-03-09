import sumar from "./sumador";
import {Posts} from "./posts";
import {Post} from "./post";

const titulo = document.querySelector("#detalle");
const detalle = document.querySelector("#titulo");
const form = document.querySelector("#post-form");

const result = document.querySelector("#detalle-resultado");
const result2 = document.querySelector("#titulo-resultado");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  //result.innerHTML = "<p>" + titulo.value + "</p>";
  //result2.innerHTML = "<p>" + detalle.value + "</p>";
  const posts = new Posts();
  const poste = new Post(titulo.value , detalle.value);
  posts.agregarPost(poste);
  posts.mostrarPost();
  
  
});
