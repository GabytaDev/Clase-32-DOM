// Necesitamos hacer un programa que al iniciarse pregunte mediante un prompt por una temperatura, 
// y con ese dato modifique un h1 en el documento HTML, de forma tal que diga, por ejemplo, 
// Temperatura actual: 20°y cambie el color siguiendo la siguiente tabla:

// Temperatura	                        Color
// Menor a 0°	                        Azul
// Mayor o igual a 0° y menor a 15°	    Celeste
// Mayor o igual a 15° y menor a 25°	Verde
// Mayor o igual a 25° y menor a 30°	Amarillo
// Mayor o igual a 30° y menor a 35°	Naranja
// Mayor a 35°	Rojo

const tempUsuario = prompt("Ingrese una temperatura");

const titulo = document.querySelector(".titulo")

const mostrarTemp = (tempUsuario) =>{

    if (tempUsuario < 0){
        titulo.textContent = "Temperatura actual: " + tempUsuario + "°" 
        titulo.style.color = "rgb(0, 0, 255)"
    }else if (tempUsuario >= 0 && tempUsuario < 15){
        titulo.textContent = "Temperatura actual: " + tempUsuario + "°" 
        titulo.style.color = "rgb(0, 170, 228)"
    }else if (tempUsuario >= 15 && tempUsuario < 25){
        titulo.textContent = "Temperatura actual: " + tempUsuario + "°" 
        titulo.style.color = "rgb(0, 255, 0)"
    }else if (tempUsuario >= 25 && tempUsuario < 30){
        titulo.textContent = "Temperatura actual: " + tempUsuario + "°" 
        titulo.style.color = "rgb(255, 255, 0)"
    }else if (tempUsuario >= 30 && tempUsuario < 35){
        titulo.textContent = "Temperatura actual: " + tempUsuario + "°" 
        titulo.style.color = "rgb(255, 128, 0)"
    }else if(tempUsuario > 30 ){
        titulo.textContent = "Temperatura actual: " + tempUsuario + "°" 
        titulo.style.color = "rgb(255, 0, 0)"
    }
};

mostrarTemp(tempUsuario);




