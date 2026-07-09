"""

1-
Crear un diccionario en Python que defina como clave el número de documento de
una persona y como valor un string con su nombre.
Desarrollar las siguientes funciones:
1) Cargar por teclado los datos de 4 personas.
2) Listado completo del diccionario.
3) Consulta del nombre de una persona ingresando su número de documento.

"""

def cargar():
    personas = {}

    for i in range(4):
        documento = int(input("ingrese numero de documento : "))
        nombre = input("ingrese nombre : ")

        personas[documento] = nombre

    return personas


def imprimir(personas):
    print("Listado de diccionario : ")

    for documento in personas:
        print(documento, personas[documento])


def consulta(personas):
    documento = int(input("ingrese número de documento a consultar : "))

    if documento in personas:
        print("Nombre:", personas[documento])
    else:
        print("No existen personas con ese documento")


personas = cargar()
imprimir(personas)
consulta(personas)