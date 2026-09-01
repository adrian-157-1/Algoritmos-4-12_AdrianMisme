/* 
Ejercicio 03: Simulador de Votación en Línea
Plantear una página con 3 botones, cada uno representando un candidato distinto.
Al hacer clic en uno de los botones, se deberá aumentar el contador de votos de ese
candidato y mostrar el total actualizado en pantalla.
Además:
 El sistema debe mostrar en consola quién va ganando cada vez que se registra
un voto.
 Si hay un empate, debe mostrar el mensaje “Hay un empate”.
*/



let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")

let voto1 = document.getElementById("voto1")
let voto2 = document.getElementById("voto2")
let voto3 = document.getElementById("voto3")

let cantidad1=0
let cantidad2=0
let cantidad3=0


function cantidadvotos(){
if(cantidad1 > cantidad2 && cantidad1 > cantidad3){
    console.log("primer candidato va GANANDO")
}

if(cantidad2 > cantidad1 && cantidad2 > cantidad3){
    console.log("segundo candidato va GANANDO")
}

if(cantidad3 > cantidad1 && cantidad3 > cantidad2){
    console.log("tercer candidato va GANANDO")
}

if(cantidad1 == cantidad2 == cantidad3){
    console.log("hay un EMPATE")
}
}






btn1.addEventListener("click", function()
{
cantidad1++
voto1.textContent = cantidad1

}

)
btn2.addEventListener("click", function()
{
cantidad2++
voto2.textContent = cantidad2
}
)
btn3.addEventListener("click", function()
{
cantidad3++
voto3.textContent = cantidad3

cantidadvotos()
},
)
