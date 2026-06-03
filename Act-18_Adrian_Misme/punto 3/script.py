"""
3. Confeccionar una función que calcule la superficie de un rectángulo y la
retorne, la función recibe como parámetros los valores de dos de sus lados:
def retornar_superficie(lado1,lado2):
En el bloque principal del programa cargar los lados de dos rectángulos y
luego mostrar cuál de los dos tiene una superficie mayor.
"""


def retornar_superficie(lado1,lado2):
    sup = lado1*lado2
    return sup

print("rectangulo 1 :")
l1_rect1=int(input("ingrese valor de Lado1 : "))
l2_rect1=int(input("ingrese valor de Lado2 : "))

print("rectangulo 2 :")
l1_rect2=int(input("ingrese valor de Lado1 : "))
l2_rect2=int(input("ingrese valor de Lado2 : "))

rectangulo_1 = retornar_superficie(l1_rect1,l2_rect1)
rectangulo_2 = retornar_superficie(l1_rect2,l2_rect2)

 
if rectangulo_1 > rectangulo_2:
    print("El rectangulo 1 es el que tiene mayor superficie")

else:
    print("El rectangulo 2 es el que tiene mayor superficie")
