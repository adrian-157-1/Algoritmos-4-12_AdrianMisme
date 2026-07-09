/*

Ejercicio 1 – Registro de Alumnos y Calificaciones
Ingresar en un vector los nombres de 4 alumnos y en otro vector paralelo sus promedios.
Mostrar:
● El nombre y promedio de cada alumno.
● El alumno con el promedio más alto.
● El alumno con el promedio más bajo.
● Promedio general de todos los alumnos.

*/

let a = ["Pedro", "Ana", "Juan", "Joel"]
let p = [5, 9, 4, 7]
let s = 0

for(let i = 0; i < p.length; i++){
console.log("Alumno "+ a[i] +" con  promedio  de "+ p[i])
}



for(let i = 0; i < p.length; i++){

if(a[i] == Math.max(...p) ){
console.log("Promedio mas Alto : ", p[i])
}

else if(a[i] == Math.min(...p)){
console.log("Promedio mas Bajo : ", p[i])
}

s = s + p[i]

}

let t = s / 4

console.log("Promedio total de alumnos : ", t)