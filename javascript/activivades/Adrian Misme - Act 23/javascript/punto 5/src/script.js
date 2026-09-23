/*

Ejercicio 5: Gestión de Triaje en Guardia Médica (Prioridad)
Contexto: Un hospital atiende pacientes según la gravedad de su condición (Triaje), no
únicamente por orden de llegada. Los niveles de urgencia son: 1 (Normal), 2 (Moderado) y 3
(Crítico).
Consigna: La sala de espera se representa como una lista de registros sin diccionarios:
[[&quot;Paciente&quot;, Prioridad], ...]. Crear la función atender_siguiente(cola_espera) que seleccione
al próximo paciente en ser atendido.
Requisitos:
● Buscar al paciente que posea la prioridad más alta (mayor número).
● En caso de empate en la prioridad, se debe atender al primero que haya llegado a
la guardia (criterio FIFO).
● Eliminar al paciente seleccionado de la lista de espera y devolver un mensaje
indicando su nombre y nivel de urgencia.
Ejemplo de Entrada: [[&quot;Carlos&quot;, 1], [&quot;Ana&quot;, 3], [&quot;Roberto&quot;, 2], [&quot;Lucía&quot;, 3]] Salida
Esperada: Atiende primero a Ana (Nivel 3). Si se vuelve a llamar a la función,
la siguiente será Lucía (Nivel 3).

*/

let cola_espera = [];

let cantidad = parseInt(prompt("ingrese cuantos pacientes hay: "))

for (let i = 0; i < cantidad; i++) {
    let nombre = prompt("ingrese el nombre del paciente: ");
    let prioridad = parseInt(prompt("ingrese la prioridad (1, 2 o 3): "))

    cola_espera.push([nombre, prioridad])
}


function atender_siguiente(cola_espera) {
    let mayor = 0
    let posicion = 0

    for (let i = 0; i < cola_espera.length; i++) {

        if (cola_espera[i][1] > mayor) {
            mayor = cola_espera[i][1]
            posicion = i
        }
    }

    let paciente = cola_espera[posicion]

    cola_espera.splice(posicion, 1)

    return `Atiende a ${paciente[0]} (Nivel ${paciente[1]})`
}


console.log(atender_siguiente(cola_espera))

console.log(atender_siguiente(cola_espera))