
#2. Se ingresan un conjunto de n alturas de personas por teclado. Mostrar la
#   altura promedio de las personas.
 
s=0

for x in range(1, 11):
    n = int(input(f"ingrese la altura de la {x}° persona : "))

    s = s + n

    p = s / 10





print("Altura promedio : ", p)
