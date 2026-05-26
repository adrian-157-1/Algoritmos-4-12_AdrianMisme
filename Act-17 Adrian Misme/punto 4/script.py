"""

4. Crear dos listas paralelas. En la primera ingresar los nombres de empleados y
en la segunda los sueldos de cada empleado.
Ingresar por teclado cuando inicia el programa la cantidad de empleados de la
empresa.
Borrar luego todos los empleados que tienen un sueldo mayor a 10000 (tanto el
sueldo como su nombre)

"""

cantidad=int(input("Ingrese la cantidad de empleados : "))

empleados=[]
sueldos=[]

for x in range(cantidad):
    e=input("Ingrese el nombre del empleado : ")
    s=int(input("Ingrese su sueldo : "))
    empleados.append(e)
    sueldos.append(s)

print("Empleados : ")
print(empleados)
print("Sueldos : ")
print(sueldos)



eliminar=0

while eliminar<len(sueldos):
    if sueldos[eliminar]>10000:
       
        sueldos.pop(eliminar)
        empleados.pop(eliminar)
    else:
        eliminar=eliminar+1



print("Empleado que no tiene un sueldo mayor a 10000 : ")
print("Empleados : ")
print(empleados)
print("Sueldos : ")
print(sueldos)
