"""

1. Se desea desarrollar un programa que permita registrar los nombres y las
calificaciones de 6 estudiantes. Luego de cargar los datos, se debe mostrar el
nombre del estudiante con la nota más alta, junto con su nota. Al igual que el
estudiante con la nota más baja. Informar si hay estudiantes con la misma nota
máxima o mínima.

"""


e=[]
c=[]



for x in range(6):
    estd=input("Ingrse nombre de estudiante : ")
    calf=int(input(f"Ingrese calificacion de {estd} : "))
    e.append(estd) 
    c.append(calf)


mayor=c[0]
menor=c[0]
minEst=e[0]
maxEst=e[0]

for x in range(1, 6):
    if c[x] > mayor:
        mayor = c[x]
        maxEst = e[x]

    if c[x] < menor:
        menor = c[x]
        minEst = e[x]


print("estudiantes con misma nota maxima :")
for x in range(6):
    if c[x] == mayor:
        print(f"{e[x]}, con nota : {c[x]}")


print("estudiantes con misma nota minima :")
for x in range(6):
    if c[x] == menor:
        print(f"{e[x]}, con nota : {c[x]}")
