# 4. Escribir un programa que pida ingresar coordenadas (x,y) que representan puntos
#   en el plano. Informar cuántos puntos se han ingresado en el primer, segundo, tercer y
#   cuarto cuadrante. Al comenzar el programa se pide que se ingrese la cantidad de
#   puntos a procesar.

c = int(input("Ingrese cantidad de puntos : "))

primero=0
segundo=0
tercero=0
cuarto=0


for i in range(c):
    print(f"Punto {i+1} :")
    x = int(input("Ingrese coordenada( X ) : "))
    y = int(input("Ingrese coordenada( Y ) : "))

    
    if x > 0 and y > 0:
        primero = primero + 1

    if x < 0 and y > 0:
        segundo = segundo + 1

    if x < 0 and y < 0:
        tercero = tercero + 1

    if x > 0 and y < 0:
        cuarto = cuarto + 1


print("cantidad de puntos :", c)

print("puntos en el primer cuadrante", primero)
print("puntos en el segundo cuadrante", segundo)
print("puntos en el tercer cuadrante", tercero)
print("puntos en el cuarto cuadrante", cuarto)