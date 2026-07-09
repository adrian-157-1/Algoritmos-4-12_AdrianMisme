"""
2. Confeccionar una función que reciba tres enteros y los muestre ordenados
de menor a mayor. En otra función solicitar la carga de 3 enteros por
teclado y proceder a llamar a la primer función definida.
"""


def ordenar(v1, v2, v3):
    
    nums = [v1, v2, v3]
    
    for k in range(3):
        for x in range(2):
            if nums[x]>nums[x+1]:
                n=nums[x]
                nums[x]=nums[x+1]
                nums[x+1]=n

    print("Números ordenados de menor a mayor : ")
    for x in range(3):
        print(nums[x])



def cargar():
    valor1 = int(input("Ingrese valor : "))
    valor2 = int(input("Ingrese valor: "))
    valor3 = int(input("Ingrese valor: "))

    ordenar(valor1, valor2, valor3)

cargar()