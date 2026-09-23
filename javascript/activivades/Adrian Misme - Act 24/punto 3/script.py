"""
3-
Un sistema de hogar inteligente monitorea qué electrodomésticos consumen más energía
en cada habitación de la casa.
 Crear un diccionario donde la Clave sea el nombre del ambiente (ej: &quot;Cocina&quot;,
&quot;Dormitorio&quot;) y el Valor sea una lista de tuplas, donde cada tupla represente un
dispositivo activo y su consumo: [(nombre_dispositivo, consumo_watts)].
Desarrollar las siguientes funciones:
1. Cargar dispositivos: Solicitar la carga de 3 habitaciones. Para cada habitación,
ingresar el nombre de los dispositivos activos y su consumo en Watts hasta que el
operador decida no cargar más para ese ambiente.
2. Consumo por habitación: Imprimir el listado de habitaciones y el consumo total
en Watts acumulado en cada una de ellas.
3. Dispositivo crítico: Buscar e informar el nombre del electrodoméstico que más
energía consume de toda la casa (el valor máximo individual dentro de todas las
listas del diccionario), indicando en qué habitación se encuentra.
"""


casa = {}


def cargar_dispositivos():
    for i in range(3):
        habitacion = input("ingrese el nombre de la habitación: ")

        dispositivos = []

        continuar = "si"

        while continuar == "si":
            nombre = input("ingrese el nombre del dispositivo: ")

            consumo = float(input("ingrese el consumo en Watts: "))

            dispositivos.append((nombre, consumo))

            continuar = input("desea cargar otro dispositivo? si/no: ")

        casa[habitacion] = dispositivos


def consumo_por_habitacion():
    for habitacion in casa:
        total = 0

        for dispositivo in casa[habitacion]:

            total = total + dispositivo[1]

        print(habitacion, "->", total, "Watts")


def dispositivo_critico():
    mayor = 0
    nombre_mayor = ""
    habitacion_mayor = ""

    for habitacion in casa:
        for dispositivo in casa[habitacion]:

            if dispositivo[1] > mayor:

                mayor = dispositivo[1]
                nombre_mayor = dispositivo[0]
                habitacion_mayor = habitacion

    print("Dispositivo que mas consume:", nombre_mayor)
    print("Habitacion:", habitacion_mayor)
    print("Consumo:", mayor, "Watts")


cargar_dispositivos()

print("CONSUMO POR HABITACIÓN:")
consumo_por_habitacion()

print("DISPOSITIVO CRITICO:")
dispositivo_critico()