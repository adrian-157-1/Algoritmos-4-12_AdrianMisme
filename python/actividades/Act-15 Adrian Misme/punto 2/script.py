"""
2. Realizar un programa que pida la carga de dos listas numéricas enteras
de 4 elementos cada una. Generar una tercera lista que surja de la suma
de los elementos de la misma posición de cada lista. Mostrar esta tercera
lista.
"""     

L1=[]
L2=[]
L3=[]
s1=0
s2=0

for x in range(4): 
    l1=int(input("LISTA 1. Ingrese numero : "))
    L1.append(l1)

    s1 = s1 + L1[x]

L3.append(s1)

for x in range(4):
    l2=int(input("LISTA 2. Ingrese numero : "))
    L2.append(l2)
    
    s2 = s2 + L2[x]

L3.append(s2)

print(L3)