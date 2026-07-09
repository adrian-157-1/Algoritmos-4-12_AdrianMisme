/*

Ejercicio 4: Simulador de Apuestas

Crear un juego en el que el usuario elija un número del 1 al 10. El sistema generará un
número aleatorio con Math.random() y determinará si ganó o perdió. El programa
debe:
1. Comparar ambos números y mostrar un mensaje personalizado con alert() si
acertó o no.
2. Mostrar en consola cuántos intentos lleva el usuario (usar un bucle para
permitir 3 intentos).
3. Si gana en algún intento, mostrar un mensaje final con su nombre en
mayúsculas, de lo contrario mostrar “Intente la próxima”.

*/


let n = prompt("ingrase su nombre")

let num 
let a = Math.floor(Math.random() * 10) + 1
let i = 0
let g = false
let c = 0

while(i < 3 && !g){
    num = prompt("Elija un número del 1 al 10")
    if(num == a){
        alert("¡Felicidades " + n.toUpperCase() + "! Has ganado!")
        g = true
    }
    else{
        alert("Lo siento, has perdido. Intenta de nuevo")
        i++
    }
    c++
}

if(!g){
    alert("Intente la próxima")
}   
console.log("Cantidad de intentos : ", c)