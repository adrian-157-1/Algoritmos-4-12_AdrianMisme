"""

4-
Se tiene que cargar los votos obtenidos por tres candidatos a una elección.
En una lista cargar en el primer componente el nombre del candidato y en la
segunda componente cargar una lista con componentes de tipo tupla con el
nombre de la provincia y la cantidad de votos obtenidos en dicha provincia.
Se deben cargar los datos por teclado.
1) Función para cargar todos los candidatos, sus nombres y las provincias con los
votos obtenidos.
2) Imprimir el nombre del candidato y la cantidad total de votos obtenidos en todas
las provincias.

"""

def cargar():
    candidatos=[]

    for x in range(3):
        nombre=input("ingrese nombre de candidato : ")

        provincias=[]

        cant=int(input("cantidad de provincias : "))

        for k in range(cant):
            prov=input(f"ingrese nombre de provincia {k+1}: ")
            votos=int(input("ingrese cantidad de votos : "))

            provincias.append((prov, votos))
        
        candidatos.append([nombre, provincias])

        return candidatos
    
def total_votos(candidatos):
    for cand in candidatos:
        total=0

        for prov in cand[1]:
            total=total+prov[1]

        print("Candidato : ", cand[0])
        print("Total de Votos : ", total)

candidatos=cargar()

total_votos(candidatos)