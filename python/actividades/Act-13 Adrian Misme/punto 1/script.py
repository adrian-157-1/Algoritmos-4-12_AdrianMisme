#1. En una empresa trabajan n empleados cuyos sueldos oscilan entre $100 y $500,
#   realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos
#   empleados cobran entre $100 y $300 y cuántos cobran más de $300. Además el
#   programa deberá informar el importe que gasta la empresa en sueldos al personal.


m=0
t=0
i=0
e = int(input("ingresa la cantidad de empleados: "))

for x in range(e):
    s = int(input(f"ingresa sueldo del empleado {x+1}: "))
    
    if s >= 100 and s <= 300:
        m= m +1

    if s > 300 :
        t= t +1

    i = s + i


print("empleados que cobran entre $100 y $300: ", m)
print("empleados que cobran mas de $300 : ", t)
print("importe que gasta la empresa : ", i)