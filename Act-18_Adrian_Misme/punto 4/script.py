"""
4. Plantear una función que reciba un string en mayúsculas o minúsculas y
retorne la cantidad de letras &#39;a&#39; o &#39;A&#39;.
"""

def Cantidad_Aa(letra):
    
    cant1=letra.count("a")
    cant2=letra.count("A")
    cantTotal=cant1+cant2
    
    return cantTotal



texto=input("ingrese cadena de texto : ")

cantidad = Cantidad_Aa(texto)

print("Cantidad de A - a : ", cantidad)