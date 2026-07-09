/*

Punto 3:
Crear una función llamada promedioTemperaturas que reciba un arreglo de números y
devuelva el promedio.
Luego, simular la carga de temperaturas diarias durante una semana (7 días), calcular el
promedio y mostrar si cada día estuvo por encima o por debajo del promedio.

*/



function promedioTemperaturas(suma) {
    return suma / 7
}

let suma = 0

for (let i = 1; i <= 7; i++) {
    let t = parseFloat(prompt("Temperatura día " + i + ":"))
    suma += t
}

let p = promedioTemperaturas(suma)
console.log("Promedio:", p)



for (let i = 1; i <= 7; i++) {
    let t = parseInt(prompt("Reingrese temperatura día " + i + ":"))

    if (t > p) {
        console.log("Día " + i + ": arriba del promedio")
    } 
    
    else {
        console.log("Día " + i + ": abajo del promedio")
    }
}