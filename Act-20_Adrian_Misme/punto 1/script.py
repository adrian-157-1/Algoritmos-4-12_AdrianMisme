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

Palabras=[]


def Calcular_Carcteres(p):
    mas=0
    
    for x in range(len(p)):
        if len(p[x]) > mas :
            mas=p[x]
            
            n=p[x]
    return n



def cargar_cadena():
    for x in range(6):
        P=input("ingresa texto : ")
        Palabras.append(P)

    print()
    mayor=Calcular_Carcteres(Palabras)
    print("mayor : ", mayor)


cargar_cadena()

