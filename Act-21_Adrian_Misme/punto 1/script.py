"""

1-
Confeccionar un programa con las siguientes funciones:
1)Cargar una lista de 5 enteros.
2)Retornar el mayor y menor valor de la lista mediante una tupla.
Desempaquetar la tupla en el bloque principal y mostrar el mayor y menor.

"""
def cargar_enteros():
    lista=[]

    for x in range(5):
        n=int(input("ingrese numeros :"))
        lista.append(n)

    return lista

def mayor_menor(lista):
    mayor=lista[0]
    menor=lista[0]

    for num in lista:
        if num > mayor:
            mayor=num

        if num<menor:
            menor=num

    return(mayor, menor)

lista=cargar_enteros()
mayor, menor = mayor_menor(lista)

print("Mayor valor: ", mayor)
print("Menor valor: ", menor)