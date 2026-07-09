"""
33. Solicitar por teclado la cantidad de empleados que tiene la empresa. Crear
y cargar una lista con todos los sueldos de dichos empleados. Imprimir la
lista de sueldos ordenamos de menor a mayor.   
"""

e=int(input("Ingrese la cantidad de empleados : "))

S=[]

for x in range(e):
    s=int(input(f"ingrese sueldo del empleado {x+1}: "))
    S.append(s)


for k in range(e-1):
    for x in range(e-1):

        if S[x] > S[x+1]:
            a=S[x]
            S[x]=S[x+1]
            S[x+1]=a

print("lista de empleados de menor a mayor : ")
for x in range(e):
    print(S[x])