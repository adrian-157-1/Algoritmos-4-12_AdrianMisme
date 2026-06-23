"""
3. Confeccionar una función que reciba entre 2 y 5 enteros. La misma nos
debe retornar la suma de dichos valores. Debe tener tres parámetros por
defecto.
"""


def sumar_enteros(numeros):
    return sum(numeros)


def pedir_enteros():

    c = int(input("Ingrese la cantidad de números (entre 2 y 5) : "))
    while c < 2 or c > 5:
        c = int(input("Ingrese la cantidad de números (entre 2 y 5) : "))
    
    num = []
    for i in range(c):
        n = int(input(f"Ingrese el número {i+1}: "))
        num.append(n)

    return num


numeros = pedir_enteros()
resultado = sumar_enteros(numeros)
print(f"La suma de los valores es: {resultado}")
