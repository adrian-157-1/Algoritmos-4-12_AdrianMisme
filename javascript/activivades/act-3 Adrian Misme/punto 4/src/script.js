/*

4.
 Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a) La cantidad de valores ingresados negativos.
b) La cantidad de valores ingresados positivos.
c) La cantidad de múltiplos de 5.
d) El valor acumulado de los números ingresados que son pares.

*/

let n = 0
let p = 0
let m5 = 0
let s = 0

for (let i = 1; i < 11; i++) {
    let v = parseInt(prompt(`Ingrese el valor ${i} :`))

    if (v < 0) {
        n++
    }

    if (v > 0) {
        p++
    }

    if (v % 5 === 0) {
        m5++
    }

    if (v % 2 === 0) {
        s = v + s
    }
}

console.log("Cantidad de valores negativos:", n)
console.log("Cantidad de valores positivos:", p)
console.log("Cantidad de múltiplos de 5:", m5)
console.log("Suma de los números pares:", s)