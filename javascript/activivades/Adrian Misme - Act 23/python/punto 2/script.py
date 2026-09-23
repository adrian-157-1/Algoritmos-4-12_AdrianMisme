"""
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
● Transacciones sospechosas: ['TX103']
"""

transacciones = []

def procesar_transacciones(cadena_texto):
    balance = 0
    sospechosas = []

    for i in range(len(cadena_texto)):
        id = cadena_texto[i][0]
        tipo = cadena_texto[i][1]
        monto = cadena_texto[i][2]

        if tipo == "I" or tipo == "i":
            balance = balance + monto
        
        
        elif tipo == "E" or tipo == "e":
            balance = balance - monto
            if monto > 50000:
                sospechosas.append(id)
            
        
    

    return balance, sospechosas 


cantidad = int(input("Cantidad de transacciones:"))

for x in range(cantidad):
    id = input("ID:")
    tipo = input("Tipo:")
    monto = int(input("Monto:"))

    transacciones.append([id, tipo, monto])

for i in range(len(transacciones)):
    print(transacciones[i][0], ":", transacciones[i][1], ":", transacciones[i][2])


balance, sospechosas = procesar_transacciones(transacciones)
print("Balance final: ", balance)
print("Transacciones sospechosas: ", sospechosas)