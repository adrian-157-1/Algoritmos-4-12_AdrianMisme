"""

3-
Almacenar en una lista 5 empleados, cada elemento de la lista es una sub lista
con el nombre del empleado junto a sus últimos tres sueldos (estos tres valores en
una tupla)
El programa debe tener las siguientes funciones:
1)Carga de los nombres de empleados y sus últimos tres sueldos.
2)Imprimir el monto total cobrado por cada empleado.
3)Imprimir los nombres de empleados que tuvieron un ingreso trimestral mayor a
10000 en los últimos tres meses.
Tener en cuenta que la estructura de datos si se carga por asignación debería ser
similar a:
empleados = [[&quot;juan&quot;,(2000,3000,4233)] , [&quot;ana&quot;,(3444,1000,5333)] , etc. ]

"""
# Función para cargar los empleados
def cargar():
    empleados = []

    for x in range(5):
        nombre = input("ingrese nombre del empleado : ")
        sueldo1 = int(input("ingrese primer sueldo : "))
        sueldo2 = int(input("ingrese segundo sueldo : "))
        sueldo3 = int(input("ingrese tercer sueldo : "))

        empleados.append([nombre, (sueldo1, sueldo2, sueldo3)])

    return empleados


def total_cobrado(empleados):

    print("Total cobrado por cada empleado:")

    for emp in empleados:
        total = emp[1][0] + emp[1][1] + emp[1][2]
        print(emp[0], "cobro", total)



def mayores_10000(empleados):

    print("Empleados con ingreso trimestral mayor a 10000:")

    for emp in empleados:
        total = emp[1][0] + emp[1][1] + emp[1][2]

        if total > 10000:
            print(emp[0])



empleados = cargar()

total_cobrado(empleados)

mayores_10000(empleados)