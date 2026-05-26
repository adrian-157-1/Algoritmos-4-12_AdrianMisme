"""

2. Una empresa registra los nombres de sus 5 vendedores y el total de ventas
realizadas por cada uno en un mes. Cargar los nombres y ventas en dos
vectores paralelos, ordenar los datos de mayor a menor según las ventas,
imprimir la lista ordenada con nombre y monto de la venta, e informar quien fue
el que menos vendió de los 5 empleados.

"""     

v=[]
t=[]

for x in range(5):
    vend=input("Ingrese nombre de vendedor : ")
    totalv=int(input(f"Ingrese total de ventas de {vend} : "))
    v.append(vend)
    t.append(totalv)

for k in range(5):
    for x in range(4):
        if t[x] < t[x+1]:
            a=t[x]
            t[x]=t[x+1]
            t[x+1]=a
            b=v[x]
            v[x]=v[x+1]
            v[x+1]=b

print("Vendedores ordenados de mayor a menor segun sus ventas : ")
for x in range(5):
    print(f"vendedor {v[x]}, monto de venta {t[x]}")
print(f"El que menos vendio fue {v[4]} con un total de {t[4]} ventas")