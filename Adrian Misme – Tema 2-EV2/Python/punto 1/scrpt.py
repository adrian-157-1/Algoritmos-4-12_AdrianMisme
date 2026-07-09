"""
Monitoreo Logístico - Tiempos de Entrega
Una empresa de mensajería urbana necesita controlar los tiempos de viaje de sus
repartidores para detectar demoras inusuales en las entregas del día.
Consignas:
1. Carga de datos: Diseñar una función que solicite por teclado el nombre de 4
cadetes y sus respectivos tiempos de entrega del último pedido medidos en
minutos. Almacenar esta información en dos listas/arrays paralelos (una para
nombres de cadetes y otra para los tiempos).
2. Reporte: Mostrar en pantalla cada repartidor junto a su tiempo de demora
correspondiente.
3. Filtro de Alerta: Recorrer las estructuras e informar los nombres de aquellos
cadetes cuyo pedido demoró más de 45 minutos para emitir un reporte de
demora excesiva.

"""


def cargar():
    nombres=[]
    tiempos=[]

    for x in range(4):
        n=input("ingrese nombre de cadete : ")
        t=int(input("ingresa su tiempo de entrega : "))
        nombres.append(n)
        tiempos.append(t)
    return nombres, tiempos

def reporte(n, t):
    print("Cadetes y sus Tiempos de demora :")
    for x in range(4):
        print(n[x], " - ", t[x], "min")

def filtro_alerta(n, t):
    print("Cadetes cuyo pedido demoró más de 45 minutos es : ")

    for x in range(4):
        if t[x] > 45 :
            tmp=t
            nmb=n
            print(nmb[x], " - ", tmp[x], "min")

n, t = cargar()
print(n)
print(t)

reporte(n, t)
filtro_alerta(n, t)
