/*

Ejercicio 3: Tabla de Posiciones con Desempate (Listas Paralelas)
Contexto: Se está organizando un torneo deportivo y se necesita generar la tabla de
posiciones a partir de tres listas paralelas sincronizadas por índice: equipos, puntos y
diferencia_gol.
Consigna: Diseñar un algoritmo de ordenamiento que reorganice las tres listas de mayor a
menor según el desempeño de cada equipo.
Requisitos:
● Criterio Principal: Mayor cantidad de puntos.
● Criterio de Desempate: Si dos o más equipos empatan en puntos, la posición se
define por el equipo que tenga la mayor diferencia de gol.
● Mantener la sincronización perfecta entre las tres listas al realizar los intercambios.
Ejemplo de Entrada: equipos = [&quot;Boca&quot;, &quot;River&quot;, &quot;Racing&quot;] puntos = [12, 15, 12]
diferencia_gol = [8, 5, 10] Salida Esperada: 1° River (15 pts), 2° Racing (12 pts,
DG 10), 3° Boca (12 pts, DG 8).

*/


let equipos = []
let puntos = []
let diferencia_gol = []

let cantidad = parseInt(prompt("muestra cantidad de participantes: "))
for(let i=0; i<cantidad; i++){
    Eq=prompt("nombre de equipo: ")
    Pts=parseInt(prompt("cantidad de puntos: "))
    Dg=parseInt(prompt("Diferencias de gol: "))

    equipos.push(Eq)
    puntos.push(Pts)
    diferencia_gol.push(Dg)
}


function ordenar_tabla(Eq, Pts, Dg) {
    for (let i = 0; i < Eq.length; i++) {
        for (let j = 0; j < Eq.length - 1; j++) {
            if (
                Pts[j + 1] > Pts[j] ||
                (Pts[j + 1] === Pts[j] && Dg[j + 1] > Dg[j])
            ) {
                [Eq[j], Eq[j + 1]] = [Eq[j + 1], Eq[j]];
                [Pts[j], Pts[j + 1]] = [Pts[j + 1], Pts[j]];
                [Dg[j], Dg[j + 1]] = [Dg[j + 1], Dg[j]];
            }
        }
    }
    return { Eq, Pts, Dg }
}

const tabla = ordenar_tabla(equipos, puntos, diferencia_gol)

console.log("Tabla de posiciones: ")
for (let i = 0; i < tabla.Eq.length; i++) {
    console.log(`${i + 1}° ${tabla.Eq[i]} (${tabla.Pts[i]} pts, DG ${tabla.Dg[i]})`)
}


