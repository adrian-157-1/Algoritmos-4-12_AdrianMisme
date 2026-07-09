"""

3. Confeccionar un programa que permita:
1) Cargar una lista de 10 elementos enteros.
2) Generar dos listas a partir de la primera. En una guardar los valores
positivos y en otra los negativos.
3) Imprimir las dos listas generadas.

"""


def cargar_lista():
    lista=[]
    for x in range(10):
        l=int(input("ingrese numero : "))
        lista.append(l)
    
    print("LISTA : ")
    print(lista)
    print()
    
    generar_listas(lista)

    
def generar_listas(l):
    positivos=[]
    negativos=[]
    for x in range(10):
        if l[x] > 0 :
            positivos.append(l[x])
            
        else :
            negativos.append(l[x])
    
    print("Lista con valores POSITIVOS")
    print(positivos)
    print()
    print("Lista con valores NEGATIVOS")
    print(negativos)

cargar_lista()