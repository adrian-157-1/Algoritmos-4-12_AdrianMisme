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

let sala = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
]
console.log(sala)

let fila = parseInt(prompt("ingrese en que fila reserva los asientos : "))
let cantidad = parseInt(prompt("ingrese la cantidad de asientos : "))


function reservar_consecutivos(sala, fila, cantidad){
    let ocupado=1
    
    for(let i=0; i<cantidad; i++){
        let columna = parseInt(prompt("ingrese la asiento que quiere ocupar : "))
        if(sala[fila][columna] == 0){
            sala[fila][columna]=ocupado
        }

        if(sala[fila][columna] == 1){
            columna = parseInt(prompt("este asiento ya esta ocupado ingrese otro : "))
        }
    }

    console.log(sala)
}

reservar_consecutivos(sala, fila, cantidad)















let sala = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
];

console.log(sala);

let fila = parseInt(prompt("Ingrese en qué fila reserva los asientos: "));
let cantidad = parseInt(prompt("Ingrese la cantidad de asientos: "));


function reservar_consecutivos(sala, fila, cantidad) {

    let consecutivos = 0;
    let inicio = -1;

    for (let columna = 0; columna < sala[fila].length; columna++) {

        if (sala[fila][columna] == 0) {
            consecutivos++;

            if (consecutivos == 1) {
                inicio = columna;
            }

            if (consecutivos == cantidad) {

                for (let i = inicio; i < inicio + cantidad; i++) {
                    sala[fila][i] = 1;
                }

                console.log("Reserva realizada correctamente.");
                console.log(sala);
                return;
            }

        } else {
            consecutivos = 0;
            inicio = -1;
        }
    }

    console.log("No hay suficientes asientos consecutivos");
}

reservar_consecutivos(sala, fila, cantidad);