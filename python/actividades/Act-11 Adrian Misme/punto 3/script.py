# 3. Realizar un programa que solicite la carga por teclado de dos números, si el
#    primero es mayor al segundo informar su suma y diferencia, en caso
#    contrario informar el producto y la división del primero respecto al segundo.


n1 = int(input("ingrese el primer numero : "))
n2 = int(input("ingrese el segundo numero : "))


s = n1 + n2 
r = n1 - n2 

m = n1 * n2
d = n2 / n1 


if n1 > n2 :
    print("suma de ambos : ", s)
    print("diferencia de : ", r)

    
if n1 < n2 :
    print("producto : ", m)
    print("divicion : ", d)