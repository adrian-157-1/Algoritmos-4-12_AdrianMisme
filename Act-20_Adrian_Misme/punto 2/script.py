"""

2. Desarrollar una aplicación que permita ingresar por teclado los nombres de
5 artículos y sus precios.
Definir las siguientes funciones:
1) Cargar los nombres de artículos y sus precios.
2) Imprimir los nombres y precios.
3) Imprimir el nombre de artículo con un precio mayor
4) Ingresar por teclado un importe y luego mostrar todos los artículos con
un precio menor igual al valor ingresado.

"""


def cargar_articulos():
    articulos = []
    for i in range(5):
        nombre = input("Ingrese el nombre del artículo: ")
        precio = float(input(f"Ingrese el precio de {nombre}: "))
        articulos.append((nombre, precio))
    return articulos


def imprimir_articulos(articulos):
    print("Artículos y precios:")
    for nombre, precio in articulos:
        print(f"- {nombre}: ${precio}")


def articulo_precio_mayor(articulos):
    if len(articulos) == 0:
        return ""
    mayor = articulos[0]
    for i in range(1, len(articulos)):
        articulo = articulos[i]
        if articulo[1] > mayor[1]:
            mayor = articulo
    return mayor


def filtrar_por_importe(articulos, importe):
    articulos_filtrados = []
    for articulo in articulos:
        if articulo[1] <= importe:
            articulos_filtrados.append(articulo)
    return articulos_filtrados


articulos = cargar_articulos()
imprimir_articulos(articulos)

mayor_articulo = articulo_precio_mayor(articulos)
if mayor_articulo != "":
    print(f"Artículo con precio mayor: {mayor_articulo[0]} (${mayor_articulo[1]})")

importe = float(input("Ingrese un importe para filtrar artículos con precio menor o igual: "))
articulos_filtrados = filtrar_por_importe(articulos, importe)

print(f"Artículos con precio menor o igual a ${importe}:")
for nombre, precio in articulos_filtrados:
    print(f"- {nombre}: ${precio}")

