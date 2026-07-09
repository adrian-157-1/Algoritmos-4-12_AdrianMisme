/*

3. Pedir al usuario que ingrese las puntuaciones obtenidas en 6 partidas seguidas
de un videojuego.
El programa debe:
● Mostrar la puntuación más alta y la más baja.
● Calcular el promedio de puntuación.
● Contar cuántas veces superó los 500 puntos.

*/

let u = []
let s = 0
let m = 0
let s = 0
let c = 0

for(let i = 0; i < 6; i++){
u[i] = parseInt(prompt(`ingrese la puntuacion de la partida ${i+1}` ))

s = s + u[i]

if(u[i] > 500){
c++
}

}

let a = Math.max(...u)
let b = Math.min(...u)

let p = s / 6


console.log("puntuacion mas alta : ", a)
console.log("puntuacion mas baja : ", b)
console.log("promedio de la puntuacion : ", p)
console.log("veses que supero los 500 : ", c)
