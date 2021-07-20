// Queremos hacer una barra de progreso, para ello crearemos un programa que al iniciarse pregunte 
// mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso 
// respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora).

//  Consideraciones:

// el documento HTML debe tener una barra de progreso representada con un div que tenga como identificador 
//contenedor y dentro de ese div otro con el identificador barra;
// el porcentaje de la barra debe estar entre 0% y 100%.

const porcentajeUsuario = prompt("Ingrese un porcentaje entre 0% y 100%");

const barraProgreso = document.getElementById ("barra");

const anchoBarraProgreso = (porcentajeUsuario)=>{
   if (porcentajeUsuario >= 0 && porcentajeUsuario <= 100){

    barraProgreso.style.width = (porcentajeUsuario + "%")

   }else if (porcentajeUsuario > 100){
    barraProgreso.style.width = ("100%")
   } 
};

anchoBarraProgreso (porcentajeUsuario);
