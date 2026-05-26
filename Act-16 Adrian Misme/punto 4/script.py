"""

4. Se realiza una evaluación a 6 docentes por parte de sus alumnos. Se registran
sus nombres y puntajes promedio obtenidos (de 1 a 10).
Cargar sus datos en vectores paralelos, mostrar docente con calificación más
alta y más baja, ordenar los vectores de mayor a menor de acuerdo con la
calificación y mostrar en pantalla la cantidad de docentes que aprobaron y
desaprobaron (tomando como base que se aprueba con una nota mayor o
igual a 6)

"""


d=[]
c=[]
for x in range(6):
    doct=input("Ingrese nombre de docente : ")
    calf=int(input(f"Ingrese calificacion promedio de {doct} : "))
    d.append(doct)
    c.append(calf)


mayor=c[0]
menor=c[0]
mejor=d[0]
peor=d[0]

for x in range(1, 5):
    if c[x] > mayor:
        mayor=c[x]
        alta=d[x]

    if c[x] < menor:
        menor=c[x]
        baja=d[x]

print(f"El docente con calificacion mas alta es {alta} con una calificacion de {mayor}")
print(f"El docente con calificacion mas baja es {baja} con calificacion de {menor}")



for k in range(6):
    for x in range(5):
        if c[x] < c[x+1]:
            a=c[x]
            c[x]=c[x+1]
            c[x+1]=a
            b=d[x]
            d[x]=d[x+1]
            d[x+1]=b

print("Docente ordenados de mayor a menor segun su calificacion : ")
for x in range(6):
    print(f"Docente {d[x]}, calificacion {c[x]}")


aprobados=0
desaprobados=0
for x in range(6):
    if c[x] >= 6:
        aprobados = aprobados + 1
    else:
        desaprobados = desaprobados + 1

print(f"La cantidad de docentes que aprobaron es: {aprobados}")
print(f"La cantidad de docentes que desaprobaron es: {desaprobados}")
