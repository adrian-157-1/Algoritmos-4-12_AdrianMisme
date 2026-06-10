"""
2. Una empresa tiene dos turnos (mañana y tarde) en los que trabajan 8
   empleados (4 por la mañana y 4 por la tarde) Confeccionar un programa
   que permita almacenar los sueldos de los empleados agrupados en dos
   listas. Imprimir las dos listas de sueldos.
"""     

TM=[]
TT=[]

for x in range(5):
    tm = int(input(f"TM. Ingrese sueldo del empleado {x+1} :"))
    TM.append(tm)

for x in range(5):
    tt = int(input(f"TT. Ingrese sueldo del empleado {x+1} :"))
    TT.append(tt)

print("Turno Mañana : ")
print(TM)

print("Turno Tarde : ")
print(TT)