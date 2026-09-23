"""
Ejercicio 4: Algoritmo de Compresión de Texto (RLE)
Contexto: En telecomunicaciones se utiliza el algoritmo Run-Length Encoding (RLE) para
comprimir secuencias de caracteres repetidos y ahorrar ancho de banda.
Consigna: Escribir la función comprimir_rle(texto) que reciba una cadena de caracteres en
mayúsculas y devuelva su versión comprimida.
Requisitos:
● Contar las apariciones consecutivas de cada carácter.
● Construir una cadena resultante intercalando el carácter con su cantidad de
apariciones consecutivas.
Ejemplo de Entrada: &quot;AAABBCDDDD&quot; Salida Esperada: &quot;A3B2C1D4&quot;
"""

texto = input("Ingrese una cadena de texto en mayúsculas: ")

def comprimir_rle(texto):
    resultado = ""
    cantidad = 1

    for i in range(len(texto)):

        if i + 1 < len(texto) and texto[i] == texto[i + 1]:
            cantidad = cantidad + 1

        else:
            resultado = resultado + texto[i] + f"{cantidad}"
            cantidad = 1

    return resultado


resultado = comprimir_rle(texto)

print(resultado)