"""

1. Desarrollar una función que reciba una lista de string y nos retorne el que
tiene más caracteres. Si hay más de uno con dicha cantidad de caracteres
debe retornar el que tiene un valor de componente más baja.
En el bloque principal iniciamos por asignación la lista de string:
palabras=["enero", "febrero", "marzo", "abril", "mayo", "junio"]
print("Palabra con mas caracteres:",mascaracteres(palabras))
(La lista debe tener la misma cantidad de elementos, pero los textos los
eligen ustedes)

"""

palabras = ["casa", "avion", "edificio", "calendario", "autos", "personas"]


def mas_caracteres(l):
    if len(l) == 0:
        return ""

    mayor = l[0]
    for i in range(1, len(l)):
        palabra = l[i]
        if len(palabra) > len(mayor):
            mayor = palabra
    return mayor


print("Palabra con mas caracteres:", mas_caracteres(palabras))

