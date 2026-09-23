"""
4-
Una empresa de e-commerce utiliza drones autónomos para realizar entregas a domicilio
y necesita rastrear las coordenadas geográficas de sus rutas de vuelo.
 Diseñar un diccionario donde la Clave sea el identificador único del dron (ej:
&quot;DRON-01&quot;) y el Valor sea una lista de tuplas que almacene las coordenadas de
las paradas programadas: [(latitud, longitud)].
Desarrollar las siguientes funciones:
1. Cargar planes de vuelo: Ingresar la información de 3 drones. Solicitar para cada
uno la cantidad de paradas que va a realizar y cargar sus respectivas coordenadas
geográficas.
2. Imprimir rutas: Mostrar el listado completo de los drones junto con sus paradas
de coordenadas asociadas.
3. Ruta más larga: Determinar y mostrar el identificador del dron que tiene la mayor
cantidad de paradas registradas en su ruta de vuelo (la lista con mayor cantidad
de elementos).
"""


drones = {}


def cargar_planes():
    for i in range(3):
        dron = input("ingrese identificador del dron: ")

        cantidad = int(input("ingrese cantidad de paradas: "))

        paradas = []

        for j in range(cantidad):
            latitud = float(input("ingrese latitud: "))

            longitud = float(input("ingrese longitud: "))

            paradas.append((latitud, longitud))

        drones[dron] = paradas


def imprimir_rutas():
    for dron in drones:

        print(dron, "-", drones[dron])


def ruta_mas_larga():
    mayor = 0
    dron_mayor = ""

    for dron in drones:
        cantidad = len(drones[dron])

        if cantidad > mayor:

            mayor = cantidad
            dron_mayor = dron

    print("El dron con más paradas es:", dron_mayor)
    print("Cantidad de paradas:", mayor)


cargar_planes()

print("RUTAS:")
imprimir_rutas()

print("RUTA MAS LARGA:")
ruta_mas_larga()