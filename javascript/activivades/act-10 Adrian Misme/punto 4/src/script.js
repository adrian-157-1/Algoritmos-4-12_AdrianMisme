/*

Ejercicio 4 – Asistencia de Empleados
Cargar en un vector los nombres de 3 empleados y en una matriz irregular (donde cada fila
representa a un empleado) los días que faltó en un mes (números de día). Mostrar:
● Cantidad de faltas por empleado.
● Empleado que menos veces asistió.
● Empleado que más veces asistió.

*/


let e = ["Juan","Ian","Carlos"]

let f = [
    [2, 5, 9, 15, 16, 17, 30],
    [4, 9, 23, 28],
    [3, 5, 26, 27, 28]
]

let max = 0
let min = f[0].length


let menorA = ""
let masA = ""

for(let i = 0; i < e.length; i++){
let c = f[i].length
console.log("El empleado", e[i], " falto ", c, "veces")

if(c > max){
max = c
menorA = e[i]
}

if(c < min){
min = c
masA = e[i]
}

}

console.log("Empleado que menos asistio:", menorA)
console.log("Empleado que más asistio:", masA)