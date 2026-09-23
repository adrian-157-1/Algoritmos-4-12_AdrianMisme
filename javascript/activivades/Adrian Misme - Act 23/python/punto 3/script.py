"""
Ejercicio 3: Tabla de Posiciones con Desempate (Listas Paralelas)
Contexto: Se está organizando un torneo deportivo y se necesita generar la tabla de
posiciones a partir de tres listas paralelas sincronizadas por índice: equipos, puntos y
diferencia_gol.
Consigna: Diseñar un algoritmo de ordenamiento que reorganice las tres listas de mayor a
menor según el desempeño de cada equipo.
Requisitos:
● Criterio Principal: Mayor cantidad de puntos.
● Criterio de Desempate: Si dos o más equipos empatan en puntos, la posición se
define por el equipo que tenga la mayor diferencia de gol.
● Mantener la sincronización perfecta entre las tres listas al realizar los intercambios.
Ejemplo de Entrada: equipos = [&quot;Boca&quot;, &quot;River&quot;, &quot;Racing&quot;] puntos = [12, 15, 12]
diferencia_gol = [8, 5, 10] Salida Esperada: 1° River (15 pts), 2° Racing (12 pts,
DG 10), 3° Boca (12 pts, DG 8).
"""


equipos = []
puntos = []
diferencia_gol = []

cantidad = int(input("muestra cantidad de participantes: "))
for x in range(cantidad):
    Eq=input("nombre de equipo: ")
    Pts=int(input("cantidad de puntos: "))
    Dg=int(input("Diferencias de gol: "))

    equipos.append(Eq)
    puntos.append(Pts)
    diferencia_gol.append(Dg)


def ordenar_tabla(Eq, Pts, Dg):
    for i in range(len(Eq)):
        for j in range(len(Eq) - 1):
            if (
                Pts[j + 1] > Pts[j]
                or (Pts[j + 1] == Pts[j] and Dg[j + 1] > Dg[j])
            ):
                Eq[j], Eq[j + 1] = Eq[j + 1], Eq[j]
                Pts[j], Pts[j + 1] = Pts[j + 1], Pts[j]
                Dg[j], Dg[j + 1] = Dg[j + 1], Dg[j]

    return Eq, Pts, Dg


Eq, Pts, Dg = ordenar_tabla(equipos, puntos, diferencia_gol)

print("Tabla de posiciones: ")
for i in range(len(equipos)):
    print(f"{i + 1}° {Eq[i]} ({Pts[i]} pts, DG {Dg[i]})")