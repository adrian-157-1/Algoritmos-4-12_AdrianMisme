/*

Ejercicio 2: Detector de Transacciones Sospechosas (Parseo)
Contexto: Un banco recibe un lote diario de movimientos en un único texto largo con el
formato &quot;ID:TIPO:MONTO&quot;, donde TIPO puede ser I (Ingreso) o E (Egreso), separados por
comas.
Consigna: Crear una función procesar_transacciones(cadena_texto) que reciba el texto de
movimientos y realice el procesamiento completo.
Requisitos:
● Parsear la cadena de texto separando cada registro.
● Calcular y retornar el balance total de la cuenta (Ingresos suman, Egresos restan).
● Generar y retornar una lista con los IDs de las transacciones consideradas
&quot;sospechosas&quot;. Una transacción es sospechosa si es un Egreso superior a
$50.000.
Ejemplo de Entrada: &quot;TX101:I:120000, TX102:E:15000, TX103:E:85000,
TX104:I:3000&quot; Salida Esperada:
● Balance final: $23.000
● Transacciones sospechosas: [&#39;TX103&#39;]

*/

const transacciones = []

function procesar_transacciones(cadena_texto) {
    let balance = 0
    let sospechosas = []

    for (let i = 0; i < cadena_texto.length; i++) {
        let id = cadena_texto[i][0]
        let tipo = cadena_texto[i][1]
        let monto = cadena_texto[i][2]

        if (tipo === "I" || tipo === "i") {
            balance = balance + monto
        } 
        else if (tipo === "E" || tipo === "e") {
            balance = balance - monto

            if (monto > 50000) {
                sospechosas.push(id)
            }
        }
    }

    return { balance, sospechosas }
}

let cantidad = parseInt(prompt("Cantidad de transacciones:"))

for (let i = 0; i < cantidad; i++) {
    let id = prompt("ID:")
    let tipo = prompt("Tipo:")
    let monto = parseInt(prompt("Monto:"))

    transacciones.push([id, tipo, monto])
}
for(let i=0; i<=transacciones.length; i++){
    console.log(transacciones[i][0], ":", transacciones[i][1], ":", transacciones[i][2])
}

const resultado = procesar_transacciones(transacciones)
console.log("Balance final: ", resultado.balance)
console.log("Transacciones sospechosas: ", resultado.sospechosas)