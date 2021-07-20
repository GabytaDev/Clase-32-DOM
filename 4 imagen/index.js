// Queremos crear una página que nos permita modificar el tamaño de una imagen que fue agregada 
// previamente en el documento HTML. Para ello se debe poder ingresar mediante un prompt alguna de 
// las opciones posibles (chica, mediana y grande) y dependiendo de la opción elegida modifique el 
// tamaño de una imagen . Por ejemplo:
// Opción elegida	Ancho de imagen
// chica	        200px
// mediana      	500px
// grande	        800px


const eleccionUsuario = prompt("Ingrese el tamañao de la imagen: chica, mediana o grande");

const tamanioImagen = document.querySelector("imagen-gatito");

const cambiarDeTamanio = (eleccionUsuario) =>{

    if (eleccionUsuario === "chica"){
        tamanioImagen.style.width = "200px"

    }else if (eleccionUsuario === "mediana"){
        tamanioImagen.style.width = "500px"

    }else if (eleccionUsuario === "grande"){
        tamanioImagen.style.width = "800px"
    }
};

cambiarDeTamanio(eleccionUsuario);




