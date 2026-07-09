/*

4. Se cuenta con la siguiente información:
● Las edades de 20 estudiantes del turno mañana.
● Las edades de 30 estudiantes del turno tarde.
● Las edades de 15 estudiantes del turno noche.
Las edades de cada estudiante deben ingresar por teclado.
a) Obtener el promedio de las edades de cada turno (tres promedios)
b) Imprimir dichos promedios (promedio de cada turno)
c) Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades menor.

*/




let sumaM = 0
let sumaT = 0
let sumaN = 0

for (let i = 1; i <= 20; i++) {
    let e = parseInt(prompt("ingrese edad turno mañana: "))
    sumaM = e + sumaM 
}

for (let i = 1; i <= 30; i++) {
    let e = parseInt(prompt("ingrese edad turno tarde: "))
    sumaT = e + sumaT
}

for (let i = 1; i <= 15; i++) {
    let e = parseInt(prompt("ingrese edad turno noche: "))
    sumaN = e + sumaN
}

let promM = sumaM / 20
let promT = sumaT / 30
let promN = sumaN / 15

console.log("Promedio de mañana:", promM)
console.log("Promedio de tarde:", promT)
console.log("Promedio de noche:", promN)




if (promM <= promT && promM <= promN) {
    console.log("Menor promedio: Turno mañana")
} 

else if (promT <= promM && promT <= promN) {
    console.log("Menor promedio: Turno tarde")
}

else {
    console.log("Menor promedio: Turno noche")
}