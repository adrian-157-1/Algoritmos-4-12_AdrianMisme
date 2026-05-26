"""

1. Se tiene la siguiente lista:
lista=[[100,7,85,8], [4,8,56,25], [67,89,23,1], [78,56]]
Imprimir la lista. Luego cam todos los elementos mayores a 50 del primer
elemento de &quot;lista&quot;.
Volver a imprimir la lista.

"""


lista = [[100,7,85,8], [4,8,56,25], [67,89,23,1], [78,56]]
print("LISTA :")
print(lista)

for k in range(1, len(lista)):
    mover=0

    while mover < len(lista[k]):

        if lista[0][mover] < 50:
            lista[3].append(lista[0].pop(mover))

        if lista[k][mover] > 50:
            lista[0].append(lista[k].pop(mover))
        else:
            mover=mover+1
         

print("LISTA con todos los valores mayores a 50 movidos a lista[0] :")
print(lista)

