"""
4. Cargar por teclado y almacenar en una lista las alturas de 5 personas
   (valores float)
   Obtener el promedio de las mismas. Contar cuántas personas son más
   altas que el promedio y cuántas más bajas.     
"""

A=[]
s=0
p=0
altas=0
bajas=0

for x in range(5):
    a=float(input(f"Ingrese la altura de persona {x+1} : "))
    A.append(a)

    s = s + A[x]

p = s / 5 

for x in range(5):
    if A[x] > p:
        altas=altas+1
        
    if A[x] < p:
        bajas=bajas+1


print("altura promedio : ", p)
print("Mas ALTAS que el promedio : ", altas)
print("Mas BAJAS que el promedio : ", bajas)