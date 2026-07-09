"""
4. Elaborar una función que muestre la tabla de multiplicar del valor que le
enviemos como parámetro. Definir un segundo parámetro llamado termino
que por defecto almacene el valor 10. Se deben mostrar tantos términos de
la tabla de multiplicar como lo indica el segundo parámetro.
Llamar a la función desde el bloque principal de nuestro programa con
argumentos nombrados.
"""


def tabla(v, t=10):
    print(f"Tabla de multiplicacion del {v} hasta el {t} : ")

    for i in range(1, t + 1):
        print(f"{v} x {i} = {v * i}")



num = int(input("Ingrese el número para la tabla del multiplicacion : "))
terminos = int(input("Ingrese cantidad de términos para mostrar (por defecto 10) : "))

tabla(v=num, t=terminos)

