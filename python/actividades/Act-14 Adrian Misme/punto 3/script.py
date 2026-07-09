"""
3. Cargar una lista con 5 elementos enteros. Imprimir el mayor y un mensaje
   si se repite dentro de la lista (es decir si dicho valor se encuentra en 2 o
   más posiciones en la lista)    
"""

L=[]
m=0
c=0

for x in range(5):
    l=int(input("ingrese numero : "))
    L.append(l)

    if L[x] > m:
        m=L[x]
        c=1

    else:
        if L[x]==m:
            c=c+1
        
print("mayor : ", m)
print("cantidad que se repite : ", c)
