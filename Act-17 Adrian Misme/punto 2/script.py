"""

2. Se desea saber la temperatura media trimestral de cuatro países. Para ello se
tiene como dato las temperaturas medias mensuales de dichos países. Se debe
ingresar el nombre del país y seguidamente las tres temperaturas medias
mensuales.
Seleccionar las estructuras de datos adecuadas para el almacenamiento de los
datos en memoria.

● Cargar por teclado los nombres de los países y las temperaturas
medias mensuales.
● Imprimir los nombres de los países y las temperaturas medias
mensuales de las mismas.
● Calcular la temperatura media trimestral de cada país.
● Imprimir los nombres de los países y las temperaturas medias
trimestrales.
● Imprimir el nombre del país con la temperatura media trimestral
mayor.

"""     

pais=[]
temp=[]

for x in range(4):
    p=input("Ingrese el nombre del país : ")
    pais.append(p)
    t1=float(input("Ingrese la temperatura media mensual 1 : "))
    t2=float(input("Ingrese la temperatura media mensual 2 : "))
    t3=float(input("Ingrese la temperatura media mensual 3 : "))
    temp.append([t1,t2,t3])

for x in range(4):
    print("País : ",pais[x])
    print("Temperaturas medias mensuales : ",temp[x])

temptrimestral=[]


for x in range(4):
    total=0
    for k in range(3):
        total=total+temp[x][k]
    temptrimestral.append(total/3)
    
for x in range(4):
    print("País : ",pais[x])
    print("Temperatura media trimestral : ",temptrimestral[x])


mayor=0

for x in range(4):
    if temptrimestral[x]>mayor:
        mayor=temptrimestral[x]
        paismayor=pais[x]
print("El país con la temperatura media trimestral mayor es : ",paismayor)
