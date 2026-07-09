"""

2-
Confeccionar un programa con las siguientes funciones:
1)Cargar el nombre de un empleado y su sueldo. Retornar una tupla con dichos
valores
2)Una función que reciba como parámetro dos tuplas con los nombres y sueldos
de empleados y muestre el nombre del empleado con sueldo mayor.
En el bloque principal del programa llamar dos veces a la función de carga y
seguidamente llamar a la función que muestra el nombre de empleado con sueldo
mayor.
# bloque principal
empleado1=cargar_empleado()
empleado2=cargar_empleado()
mayor_sueldo(empleado1,empleado2)

"""

def cargar_empleados():
    nombre=input("ingrese nombre de empleado : ")
    sueldo=int(input("ingrese su sueldo : "))
    
    return(nombre, sueldo)

def sueldo_mayor(empleado1, empleado2):
    if empleado1[1] > empleado2[1]:
        print("Empleado con mayor sueldo es : ", empleado1[0])
        print("Sueldo : ", empleado1[1])

    else:
        print("Empleado con mayor sueldo es : ", empleado2[0])
        print("Sueldo : ", empleado2[1])

empleado1 = cargar_empleados()
empleado2 = cargar_empleados()

sueldo_mayor(empleado1, empleado2)