"""
1. Crear una lista de enteros por asignación. Definir una función que reciba
una lista de enteros y un segundo parámetro de tipo entero. Dentro de la
función mostrar cada elemento de la lista multiplicado por el valor entero
enviado.
lista=[3, 7, 8, 10, 2]
multiplicar(lista,3)
"""

lista = [3, 7, 8, 10, 2]


def multiplicar(l, m):
    print("LISTA : ")
    print(l)

    print(f"Lista MULTIPLICADA por {m} : ")
    
    for numero in l:
        print(f"{numero} x {m} = {numero * m}")
        


n = int(input("Ingrese número para multiplicar : "))
multiplicar(lista, n)

