/*

2. Realizar un programa que pida la carga de dos vectores numéricos. Obtener la
suma de los dos vectores, dicho resultado guardarlo en un tercer vector del
mismo tamaño. Sumar componente a componente.
El tamaño del vector es a elección.
Mostrar en consola:
● Los dos vectores numéricos.
● Tercer vector con la suma de los otros dos.

*/

let v1 = [2, 8, 4, 12, 6]
let v2 = [9, 5, 3, 1, 11]
let v3 = []
let s1 = 0
let s2 = 0
let s3 = 0

for(let i = 0; i < v1.length; i++){
    s1 = s1 + v1[i]
    
}

for(let i = 0; i < v2.length; i++){
    s2 = s2 + v2[i]
    
}

console.log("vector 1 : ", v1)
console.log("suma del vector 1 = "+ s1)
console.log("vector 2 : ",v2)
console.log("suma del vector 2 = "+ s2)

v3.unshift(s1, s2)

console.log("RESULTADO : ")
console.log("vector 3 : ", v3)
