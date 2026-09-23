"""
2-
En un videojuego multijugador en línea, los jugadores se agrupan en clanes o gremios
para realizar misiones cooperativas.
 Diseñar un diccionario donde la Clave sea el nombre del Gremio (ej:
&quot;DragonesDeFuego&quot;) y el Valor sea una lista de cadenas con los nombres de
los jugadores (nicknames) que lo integran.
Desarrollar las siguientes funciones:
1. Registrar gremios: Cargar por teclado 3 gremios. Para cada gremio, se debe
preguntar cuántos integrantes posee para cargar sus respectivos nombres de
usuario en la lista interna.
2. Listar clanes: Mostrar los nombres de todos los gremios junto a la cantidad total
de miembros que posee cada uno.
3. Buscar jugador: Solicitar por teclado el nombre de un jugador y buscar en qué
gremio está registrado. Informar el gremio encontrado o indicar si el jugador es
&quot;Solitario&quot; (no pertenece a ningún clan).
"""


gremios = {}

def registrar_gremios():
    for i in range(3):
        g = input("ingrese nombre del gremio: ")

        cantidad = int(input("ingrese cantidad de integrantes: "))

        jugadores = []

        for j in range(cantidad):
            nombre = input("ingrese nombre del jugador: ")

            jugadores.append(nombre)

        gremios[g] = jugadores


def listar_clanes():
    for g in gremios:
        cantidad = len(gremios[g])

        print(g, "-", cantidad, "miembros")


def buscar_jugador():
    jugador = input("ingrese nombre del jugador a buscar: ")

    encontrado = False

    for g in gremios:
        if jugador in gremios[g]:

            print(jugador, "pertenece al gremio", g)

            encontrado = True

    if encontrado == False:
        print(jugador, "es Solitario")


registrar_gremios()

print("LISTA DE CLANES:")
listar_clanes()

print("BUSCAR JUGADOR:")
buscar_jugador()