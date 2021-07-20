// Ale también nos pidió un programa para trabajar con los colores en sistema rgb, 
// para ello vamos a crear una página que al iniciar pida mediante tres prompts los valores 
// correspondientes al sistema rgb, y una vez ingresados ponga el color de fondo del body con dicho color. 
// Los valores van del 0 al 255 y corresponden a rojo, verde y azul.

const rojo = prompt("ingresa un color de 0 al 255 rgb()")
const verde = prompt("ingresa un color de 0 al 255 rgb()")
const azul = prompt("ingresa un color de 0 al 255 rgb()")

const colorConvertido = "rgb(" + rojo + "," + verde + "," + azul + ")";

const colorFondo = document.querySelector("boby")

colorFondo.style.backgroundColor = colorConvertido

