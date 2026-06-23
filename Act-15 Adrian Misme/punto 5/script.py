"""

5. Crear y cargar en un lista los nombres de 5 países y en otra lista paralela
la cantidad de habitantes del mismo. Ordenar alfabéticamente e imprimir
los resultados. Por último ordenar con respecto a la cantidad de habitantes
(de mayor a menor) e imprimir nuevamente.

"""


P = []
H = []


for i in range(5):
    pais = input("Ingrese nombre de país : ")
    habt = int(input(f"Ingrese cantidad de habitantes de {pais} : "))

    P.append(pais)
    H.append(habt)


for k in range(4):
    for x in range(4):

        if P[x] > P[x+1]:
            a = P[x]
            P[x] = P[x+1]
            P[x+1] = a

            b = H[x]
            H[x] = H[x+1]
            H[x+1] = b


print("Orden alfabéticamente :")
for i in range(5):
    print(F"Pais {P[i]}, habitantes {H[i]}")


for k in range(4):
    for x in range(4):

        if H[x] < H[x+1]:
            a = H[x]
            H[x] = H[x+1]
            H[x+1] = a

            b = P[x]
            P[x] = P[x+1]
            P[x+1] = b


print("Orden por habitantes (mayor a menor):")
for i in range(5):
    print(F"Pais {P[i]}, habitantes {H[i]}")