/*

Ejercicio 1: Sistema de Reserva de Butacas (Matrices 2D)
Contexto: Un cine necesita un módulo automatizado para vender entradas. La sala se
representa como una matriz (lista de listas) de N filas por M columnas, donde un 0
representa un asiento libre y un 1 uno ocupado.
Consigna:
Escribir una función llamada reservar_consecutivos(sala, fila, cantidad) que reciba la matriz
de la sala, el número de fila deseado y la cantidad de entradas que desea comprar el grupo
de clientes.
Requisitos:
● Debe buscar si existen suficientes asientos libres y contiguos (juntos) en esa
misma fila.
● Si los encuentra, debe cambiar sus valores a 1 (ocupados) y retornar un mensaje
confirmando la reserva con los números de columna asignados.
● Si no hay espacio consecutivo suficiente, debe indicar que no fue posible realizar la
reserva sin modificar la sala.
Ejemplo de Entrada:
Sala de 3x5. En la fila 0, la columna 1 ya está ocupada: [ [0, 1, 0, 0, 0], ... ]
Intentar reservar 3 asientos en la fila 0.
Salida Esperada: Confirmación de reserva para las columnas 2, 3 y 4.

*/

const sala = [
    [1,0,0,0,0,0],
    [0,0,1,1,0,0],
    [0,0,0,0,1,0],
    [0,1,0,0,0,0]
]

const fila = parseInt(prompt("ingrese en qué fila reserva los asientos: "))
const cantidad = parseInt(prompt("ingrese la cantidad de asientos: "))


function reservar_consecutivos(sala, fila, cantidad) {
    if (fila < 0 || fila >= sala.length || cantidad <= 0) {
        return "La fila o la cantidad no es correcta"
    }

    let consecutivos = 0
    let inicio = -1

    for (let columna = 0; columna < sala[fila].length; columna++) {

        if (sala[fila][columna] == 0) {
            consecutivos++

            if (consecutivos == 1) {
                inicio = columna
            }

            if (consecutivos == cantidad) {
                let columnas = ""

                for (let asiento = inicio; asiento < inicio + cantidad; asiento++) {
                    sala[fila][asiento] = 1
                    columnas += asiento

                    if (asiento < inicio + cantidad - 1) {
                        columnas += ", "
                    }
                }

                return `Reserva exitosa en la fila: ${fila} en los asientos: ${columnas}`
            }

        } else {
            consecutivos = 0
            inicio = -1
        }
    }

    return "No fue posible realizar la reserva: no hay suficientes asientos consecutivos"
}

const resultado = reservar_consecutivos(sala, fila, cantidad)
console.log(resultado)
console.log(sala)