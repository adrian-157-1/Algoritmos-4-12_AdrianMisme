# 3. Realizar un programa que permita cargar dos listas de 15 valores cada una.
#   Informar con un mensaje cuál de las dos listas tiene un valor acumulado mayor
#   (mensajes &quot;Lista 1 mayor&quot;, &quot;Lista 2 mayor&quot;, &quot;Listas iguales&quot;) Tener en cuenta que
#   puede haber dos o más estructuras repetitivas en un algoritmo.


t1=0
t2=0

for x in range(15):   
    L1 = int(input("LISTA 1. Ingrese valor"))
    
    L2 = int(input("LISTA 2. Ingrese valor"))

    t1 = t1 + L1
    t2 = t2 + L2


if  t1 > t2:
    print("Lista 1 MAYOR")
    
if  t1 < t2:
    print("Lista 2 MAYOR")
    
if  t1 == t2:
    print("Listas IGUALES")