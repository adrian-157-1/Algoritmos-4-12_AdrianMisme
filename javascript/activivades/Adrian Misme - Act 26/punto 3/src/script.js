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


let candidato = ["candidato1","candidato2","candidato3"]
let vts = ["voto1", "voto2", "voto3"]
let btn = ["btn1", "btn2", "btn3"]

let cant = [0, 0, 0]

let mayor=0

for (let i = 0; i < 3; i++) {

    let votos = document.getElementById(vts[i])
    let boton = document.getElementById(btn[i])

    boton.addEventListener("click", function() {

        cant[i]++

        votos.textContent = cant[i]

        if(cant[i] == mayor){
            console.log("Hay un empate")
        }

        if(cant[i] > mayor){
            mayor = cant[i]
            console.log("Va ganando el", candidato[i])
        }

    })
}



