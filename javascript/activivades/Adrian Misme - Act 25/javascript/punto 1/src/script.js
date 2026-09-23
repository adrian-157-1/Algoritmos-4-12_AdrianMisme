/*
1-
Confeccionar un programa que permita registrar las temperaturas máximas de las últimas
6 horas en una lista.
Desarrollar las siguientes funciones:
1. Carga: Solicitar al operador el ingreso por teclado de las 6 temperaturas y
almacenarlas en una lista.
2. Procesar Extremos: Recibir la lista como parámetro y retornar una tupla que
contenga en su primer componente el valor máximo y en el segundo el valor
mínimo.
3. Bloque Principal: Desempaquetar la tupla devuelta por la función anterior en dos
variables individuales (máxima y mínima) y mostrarlas en pantalla con un mensaje
descriptivo.
*/

function carga() {
    let temperaturas = []

    for (let i = 0; i < 6; i++) {
        let temp = parseInt(prompt("ingrese la temperatura: "))
        temperaturas.push(temp)
    }

    return temperaturas
}


function procesar_extremos(temperaturas) {
    let maximo = temperaturas[0]
    let minimo = temperaturas[0]

    for (let temp of temperaturas) {
        if (temp > maximo) {
            maximo = temp
        }

        if (temp < minimo) {
            minimo = temp
        }
    }

    return [maximo, minimo]
}


let temperaturas = carga()

let [maxima, minima] = procesar_extremos(temperaturas)

console.log("Temperatura maxima: ", maxima)
console.log("Temperatura minima: ", minima)