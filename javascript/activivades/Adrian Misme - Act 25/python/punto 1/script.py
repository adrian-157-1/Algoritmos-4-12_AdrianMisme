"""
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
"""


def carga():
    temperaturas = []

    for i in range(6):
        temp = int(input("ingrese la temperatura: "))
        temperaturas.append(temp)

    return temperaturas


def procesar_extremos(temperaturas):
    maximo = temperaturas[0]
    minimo = temperaturas[0]

    for temp in temperaturas:
        if temp > maximo:
            maximo = temp

        if temp < minimo:
            minimo = temp

    return maximo, minimo

temperaturas = carga()

maxima, minima = procesar_extremos(temperaturas)

print("Temperatura maxima: ", maxima)
print("Temperatura minima: ", minima)