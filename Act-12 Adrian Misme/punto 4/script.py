# 4. Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
#   a. La cantidad de valores ingresados negativos.
#   b. La cantidad de valores ingresados positivos.
#   c. La cantidad de múltiplos de 15.
#   d. El valor acumulado de los números ingresados que son pares.

p=0
m=0
q=0
d=0

for x in range(10):
    n = int(input(f"ingrese {x+1}° numero : "))


    if n%15 == 0:
        q=q+1

    if n%2 == 0:
             d=d+1     
    
    if n < 0:
        p=p+1
    else:
        m=m+1

    
print("valores multiplos de 15 : ", q)
print("valores negativos : ", p)
print("valores positivos : ", m)
print("valores pares : ", d)