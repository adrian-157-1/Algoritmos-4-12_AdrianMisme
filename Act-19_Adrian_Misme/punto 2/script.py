"""
2. En una empresa se almacenaron los sueldos de 10 personas.
Desarrollar las siguientes funciones y llamarlas desde el bloque principal:
1) Carga de los sueldos en una lista.
2) Impresión de todos los sueldos.
3) Cuántos tienen un sueldo superior a $4000.
4) Retornar el promedio de los sueldos.
5) Mostrar todos los sueldos que están por debajo del promedio.
"""



def cragar_sueldos():
    sueldos=[]
    for x in range(10):
        s=int(input(f"ingrese sueldo {x+1} : "))
        sueldos.append(s)

    print("Sueldos :")
    print(sueldos)

    print()
    sueldo_superior(sueldos)
    print()
    promedio_sueldos(sueldos)



def sueldo_superior(s):
    print("Sueldos superiores a $4000 : ")

    for x in range(10):
        if s[x]>4000:
            print(f"-sueldo {x+1} con : $",s[x])
    



def promedio_sueldos(s):
    p=sum(s)/10
    print(f"Promedio de Sueldos : ", p)
    
    print("SUELDOS por debajo del Promedio : ")
    for x in range(10):
        if s[x] < p:
            print(f"-sueldo {x+1} con : $",s[x])

    return p


cragar_sueldos()
