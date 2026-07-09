# 6. De un operario se conoce su sueldo y los años de antigüedad. Se pide
#    confeccionar un programa que lea los datos de entrada e informe:
#    a. Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10
#    años, otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
#    b. Si el sueldo es inferior a 500 pero su antigüedad es menor a 10
#    años, otorgarle un aumento de 5 %.
#    c. Si el sueldo es mayor o igual a 500 mostrar el sueldo en pantalla sin
#    cambios.


s = int(input("ingrese el sueldo : "))
a = int(input("ingrese los años de antiguedad : "))


if s < 500 and a >= 10 :
    t = s * 0.2
    print("tenes aumento del 20% : ", t)


else : 
    if s < 500 and a < 10 :
        t = s * 0.05
        print("tenes aumento del 5% : ", t)

    else :
        print("tu sueldo : ",s)