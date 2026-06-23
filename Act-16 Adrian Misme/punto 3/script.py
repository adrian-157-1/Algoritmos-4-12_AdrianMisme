"""

3. Se registran los nombres de 5 atletas y sus tiempos (en segundos) en una
carrera de 100 metros. El programa debe cargar los datos en dos vectores
paralelos, calcular y mostrar el promedio de los tiempos, mostrar el nombre del
atleta con mejor y peor tiempo, y mostrar los nombres de quienes superaron el
promedio.

"""

a=[]
t=[]
s=0

for x in range(5):
    nombre=input("Ingrese nombre de atleta : ")
    tiempo=int(input(f"Ingrese tiempo de {nombre} en segundos : "))
    a.append(nombre)
    t.append(tiempo)
    s = s + t[x] 

p=s/5



mayor=t[0]
menor=t[0]
mejor=a[0]
peor=a[0]

for x in range(1, 5):
    if t[x] > mayor:
        mayor=t[x]
        peor=a[x]

    if t[x] < menor:
        menor=t[x]
        mejor=a[x]
        

print(f"Promedio de tiempos : {p} segundos")

print(f"El atleta con MEJOR tiempo es {mejor} con un tiempo de {menor} segundos")
print(f"El atleta con PEOR tiempo es {peor} con un tiempo de {mayor} segundos")


print("Atletas que superaron el promedio : ")
for x in range(5):
    if t[x] < p:
        print(f"El atleta {a[x]} supero el promedio con un tiempo de {t[x]} segundos")