# 7. Escribir un programa en el cual: dada una lista de tres valores numéricos
#    distintos se calcule e informe su rango de variación (debe mostrar el mayor
#    y el menor de ellos)


n1 = int(input("ingrese numero : "))
n2 = int(input("ingrese numero : "))
n3 = int(input("ingrese numero : "))


m = n1
n = n1


if n2 > m:
    m = n2

if n3 > m:
    m = n3

if n2 < n:
    n = n2

if n3 < n:
    n = n3


print(m, "es el mayor")
print(n, "es el menor")