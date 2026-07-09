/*

1. Desarrollar un programa que permita ingresar un vector de 8 elementos, e
informe:
● El valor acumulado de todos los elementos del vector.
● El valor acumulado de los elementos del vector que sean mayores a 36.
Cantidad de valores mayores a 50.

*/

let v = [39, 87, 3, 18, 32, 27, 77, 9]

let t = 0  
let c = 0  
let n = 0  

for (let i = 0; i < v.length; i++) {
    t = t + v[i]
    if (v[i] > 36) {
        c = c + v[i]
    }
    if (v[i] > 50) {
        n++
    }
}

console.log("Valor acumulado de todos los elementos:", t)
console.log("Valor acumulado de elementos mayores a 36:", c)
console.log("Cantidad de valores mayores a 50:", n)