"""
1. Definir una lista que almacene por asignación los nombres de 5 personas.
    Contar cuántos de esos nombres tienen 5 o más caracteres y mostrarlo.   
"""

L = ["Luis","Marcos","Matias","Fernandes","Juan"]
mas=0
n=""

for L in L:

    if len(L) >= 5 :
        mas = mas + 1  
        n=f" {n+L}   "
        

print("Nombres que tienen 5 o más caracteres : ",mas)
print(n)
