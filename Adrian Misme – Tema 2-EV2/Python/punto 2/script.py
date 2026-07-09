"""

Metalúrgica - Control de Temperatura de Hornos
Una fábrica de fundición monitorea la temperatura de 3 hornos industriales
durante 3 lecturas consecutivas del día. Las mediciones se almacenan en una
estructura bidimensional de 3x3(filas para los hornos y columnas para las
temperaturas registradas).
Consignas:
1. Carga de datos: Cargar por teclado el nombre o modelo de los 3 hornos en un
vector. Para cada horno, solicitar la carga secuencial de las 3 lecturas de
temperatura e ingresarlas en una matriz de 3x3.
2. Cálculo: Calcular e imprimir la temperatura promedio que registró cada uno de
los hornos a lo largo del proceso.
3. Búsqueda: Buscar e informar el registro de temperatura individual más alto
obtenido en toda la planta (búsqueda del valor máximo absoluto de la matriz),
detallando el valor térmico y el nombre del horno al que pertenece.


"""

def cargar():
    modelos=[]
    Temperaturas=[]

    for x in range(3):
        n=input("ingrese modelo de horno : ")
        tmp1=float(input("ingrese primera temperatura : "))
        tmp2=float(input("ingrese segunda temperatura : "))
        tmp3=float(input("ingrese tercera temperatura : "))

        modelos.append(n)
        Temperaturas.append([tmp1, tmp2, tmp3])

    return modelos, Temperaturas


def temp_promedio(m, t):
    print("Temperatura promedios : ")

    s=0
    for k in range(3):
        for x in range(3):
            s = s + t[k][x]
    
            p=s/3

        print("modelo : ", m[k], ", con promedio de : ", p)



def temp_mayor(m, t):
    print("Registro del la temperatura individual mas alta de toda la planta es : ")

    mayor=t[0][0]
    m_mayor=""

    for k in range(3):
        for x in range(3):
            if t[k][x] > mayor:
                mayor=t[k][x]
                m_mayor=m[k]

    print("temperatura maxima : ", mayor, ", del Modelo : ", m_mayor )


m, t = cargar()

print(m)
print(t)

temp_promedio(m, t)
temp_mayor(m, t)

