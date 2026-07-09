# 1. Escribir un programa que solicite ingresar 10 notas de alumnos y nos
#    informe cuántos tienen notas mayores o iguales a 7 y cuántos menores.

m=0
t=0

for x in range(10):
    n = int(input(f"ingresa nota de alumno {x + 1}: "))
    
    if n >= 7:
        m= m +1

    else :
        t= t +1




print("notas mayores o iguales a 7 : ", m)
print("notas mayores o iguales a 7 : ", t)