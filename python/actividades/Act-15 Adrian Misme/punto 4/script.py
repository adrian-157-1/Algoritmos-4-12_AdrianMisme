"""
4. Cargar una lista con 5 elementos enteros. Ordenar de menor a mayor y
mostrarla por pantalla, luego ordenar de mayor a menor e imprimir
nuevamente.     
"""

N=[]
for x in range(5):
    n=int(input("Ingrese numero : "))
    N.append(n)


for k in range(4):
    for x in range(4):

        if N[x] > N[x+1]:
            a=N[x]
            N[x]=N[x+1]
            N[x+1]=a

print("lista de menor a mayor : ")
for x in range(5):
    print(N[x])



for k in range(4):
    for x in range(4):

        if N[x] < N[x+1]:
            a=N[x]
            N[x]=N[x+1]
            N[x+1]=a

print("lista de mayor a menor : ")
for x in range(5):
    print(N[x])