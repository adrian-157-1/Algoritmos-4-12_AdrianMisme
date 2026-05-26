"""

3. Definir una lista y almacenar los nombres de 3 empleados.
Por otro lado definir otra lista y almacenar en cada elemento una sublista con los
números de días del mes que el empleado faltó.
Imprimir los nombres de empleados y los días que faltó.
Mostrar los empleados con la cantidad de inasistencias.
Finalmente mostrar el nombre o los nombres de empleados que faltan menos
días.

"""

nombres=["juan","ian","ana"]
faltas=[[1,9,13,24,30],[12,19,23],[15,19,24,25,27,29,31]]

print("Empleados con los días que falto : ")
for x in range(3):
    print("Empleado : ",nombres[x])
    print("Días que faltó : ",faltas[x])


print("Empleados con la cantidad de inasistencias : ")
for x in range(3):
    print("Empleado : ", nombres[x])
    print("Cantidad de inasistencias : ",len(faltas[x]))

menor=len(faltas[0])
empleado=nombres[0]
for x in range(3):
    if len(faltas[x])<menor:
        menor=len(faltas[x])
        empleado=nombres[x]
print("El empleado que faltó menos días es : ",empleado)
