// Necesitamos hacer un programa para completar los datos de una card, para ello al iniciar el mismo debe 
// pedir mediante prompts por:

// un título h1;
// una url de una imagen;
// una url a un artículo.

// Previamente en un documento HTML haremos una card que tenga:
// una clase card;
// una imagen, con la url de la imagen ingresada;
// un título, con el texto del título ingresado;
// un link que diga Leer más, con la url al artículo ingresado.

const tituloUsuario = prompt("Ingrese un título");
const imagenUsuario =prompt("Ingrese una url de una imagen");
const articuloUsuario = prompt("Ingrese una url a un artículo");

//selecciono titulo, imagen y link
const titulo = document.querySelector(".titulo")
const rutaImagen = document.querySelector("img")
const linkLeer = document.querySelector("a")

titulo.textContent = tituloUsuario;
rutaImagen.src = imagenUsuario;
linkLeer.href = articuloUsuario; 