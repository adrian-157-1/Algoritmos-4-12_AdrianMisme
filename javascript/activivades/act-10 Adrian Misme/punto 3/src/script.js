/*

Ejercicio 3 – Ventas por Vendedor y Mes
Cargar en un vector los nombres de 4 vendedores y en una matriz las ventas realizadas
por cada vendedor en 3 meses. Mostrar:
● Total vendido por cada vendedor.
● Vendedor con mayor venta acumulada.
● Promedio general de ventas por vendedor.

*/


let v = ["Maria", "Luis", "Juan", "Ian"]

let b = [
    [10, 110, 15],
    [30, 100, 40],
    [70, 80, 5],
    [90, 60, 50]
]

let mayor = 0
let mejor = ""

for (let i = 0; i < v.length; i++) {

    let t = 0

    for (let j = 0; j < b[i].length; j++) {
        t = t + b[i][j]
    }

    console.log("Total vendido por ", v[i], " : ", t)


    if (t > mayor) {
        mayor = t
        mejor = v[i]
    }


    let p = t / 3
    console.log("Promedio de", v[i], ":", p)
}


console.log("Vendedor con mayor venta:", mejor)













