"""

4. Confeccionar una función que reciba una serie de edades y me retorne la
cantidad que son mayores o iguales a 18 (como mínimo se envía un entero
a la función)

"""


def mayor_edad(e):
    c=0
    for x in range(10):
        if e[x] >= 18 :
            c=1+c
    return c


edades=[]
for x in range(10):
    e=int(input("ingrese edad :"))
    edades.append(e)

print("cantidad de MAYORES a 18 : ", mayor_edad(edades))