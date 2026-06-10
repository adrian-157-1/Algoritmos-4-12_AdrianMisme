"""
1. Crear una lista de enteros por asignación. Definir una función que reciba
una lista de enteros y un segundo parámetro de tipo entero. Dentro de la
función mostrar cada elemento de la lista multiplicado por el valor entero
enviado.
lista=[3, 7, 8, 10, 2]
multiplicar(lista,3)
"""

lista=[]
mult=[]

def recibir_listas():
    for x in range(5):
        li=int(input("ingrese numero : "))
        lista.append(li)

    n=int(input("ingrese numero con el que multiplican : "))

    for x in range(5):
        m=lista[x]*n
        mult.append(m)

    print("LISTA : ")
    print(lista)
    print(f"LISTA MULTIPLICADA POR {n} : ")
    print(mult)


recibir_listas()

