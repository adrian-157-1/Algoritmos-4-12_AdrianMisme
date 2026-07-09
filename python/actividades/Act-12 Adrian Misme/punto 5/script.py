# 5. Realizar un programa que lea los lados de n triángulos, e informar:
#   a. De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados
#   iguales), isósceles (dos lados iguales), o escaleno (ningún lado igual)
#   b. Cantidad de triángulos de cada tipo.
#   n = int(input("ingrese el primer numero : "))


t = int(input("ingrese cantidad de triangulos : "))

E=0
F=0
I=0

for x in range(t):
    L1 = int(input("ingrese PRIMER numero : "))
    L2 = int(input("ingrese SEGUNDO numero : "))
    L3 = int(input("ingrese TERCER numero : "))


    if L1 == L2 and L1 == L3 and L2 == L3:
        E=E+1
        print(f"triangulo {x+1} : Equilátero")
        
    else:
        if L1 != L2 and L1 != L3 and L2 != L3:
            F=F+1    
            print(f"triangulo {x+1} : Escaleno")
        else:
            I=I+1
            print(f"triangulo {x+1} : Isósceles")


print("cantidad de Equilátero : ", E)
print("cantidad de Isósceles : ", I)
print("cantidad de escaleno : ", F)



