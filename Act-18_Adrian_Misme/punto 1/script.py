"""
1. Desarrollar un programa que solicite la carga de tres valores y muestre el
menor. Desde el bloque principal del programa llamar 2 veces a dicha
función (sin utilizar una estructura repetitiva)
"""

def mostrar_menor(v1,v2,v3):

    print("El menor de los tres es : ")

    if v2 > v1 and v3 > v1:
        print(v1)

    else:    
        if v1 > v2:
            print(v2)

        else:
            print(v3) 


def cargar_valor():
    valor1=int(input("ingresa valor : "))
    valor2=int(input("ingresa valor : "))
    valor3=int(input("ingresa valor : "))

    mostrar_menor(valor1,valor2,valor3)


    
cargar_valor()