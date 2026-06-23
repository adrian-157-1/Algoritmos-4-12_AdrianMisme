"""

1. En un curso de 4 alumnos se registraron las notas de sus exámenes y se
deben procesar de acuerdo a lo siguiente:
a. Ingresar nombre y nota de cada alumno (almacenar los datos en
dos listas paralelas)
b. Realizar un listado que muestre los nombres, notas y condición del
alumno. En la condición, colocar &quot;Muy Bueno&quot; si la nota es mayor o
igual a 8, &quot;Bueno&quot; si la nota está entre 4 y 7, y colocar &quot;Insuficiente&quot;
si la nota es inferior a 4.
c. Imprimir cuántos alumnos tienen la leyenda “Muy Bueno”.

"""

alumno=[]
nota=[]
m=""
c=0

for x in range(4):
    a = input(f"ingresa el nombre del alumno {x+1} : ")
    alumno.append(a)
    n = int(input(f"ingresa la nota del alumno {alumno[x]} : "))
    nota.append(n)

for x in range(4):

    if nota[x] >= 8:
        m="Muy bueno"
        c=c+1

    if nota[x] >= 4 and nota[x] <=7:
        m="Bueno"

    if nota[x] < 4:
        m="Insuficiente"

    print(f"alumno {alumno[x]}, nota: {nota[x]}, condicion: {m} ")

print("Cantidad de alumnos con leyenda “Muy Bueno” : ", c)