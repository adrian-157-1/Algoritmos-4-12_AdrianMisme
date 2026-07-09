#  5. Se ingresa por teclado un valor entero, mostrar una leyenda que indique si
#    el número es positivo, negativo o nulo (es decir cero)


n = int(input("ingrese un numero : "))

if n < 0 :
    print("el numero es NEGATIVO")
    
else:
    if n > 0 :
        print("el numero es POSITIVO")
    
    else :
       print("el numero es NULO (ES CERO)")