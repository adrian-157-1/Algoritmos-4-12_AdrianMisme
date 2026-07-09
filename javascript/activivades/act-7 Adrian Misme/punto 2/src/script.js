/*

Ejercicio 2: Simulador de Sorteo con Nombres
Pedir al usuario 5 nombres. Luego, crear una función que:
1. Seleccione un nombre al azar y lo convierta a mayúsculas.
2. Mostrar el nombre ganador por consola y con alert().
3. Incluir una función extra que informe cuántas letras tiene el nombre ganador.
4. Si el nombre tiene más de 6 letras, mostrar un mensaje especial en consola.

*/
let n = []
for(let i = 0; i < 5; i++){
    n[i] = prompt("Ingrese un nombre")
}

let i = Math.floor(Math.random() * n.length)

alert("El nombre ganador es : " + n[i].toUpperCase())
console.log("El nombre ganador es : ", n[i].toUpperCase())

let c = n[i].length
console.log("El nombre ganador tiene ", c, " letras")
if(c > 6){
    console.log("El nombre ganador tiene más de 6 letras!")
}

