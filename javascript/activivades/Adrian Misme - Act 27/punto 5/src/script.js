/* 
5. Generar un presupuesto de un equipo de computación a partir de tres
objetos de tipo SELECT que nos permiten seleccionar:
Procesador (Intel I3 - $400, Intel I5 $600, Intel I7 $800).
Monitor (Samsung 20&#39; - $250, Samsung 22&#39; - $350, Samsung 26&#39; - $550)
Disco Duro(500 Gb - $300, 1 Tb - $440, 3 Tb - $500)
Para cada característica indicamos string a mostrar (Ej. Intel I3) y el
valor asociado a dicho string (Ej. 400).
Al presionar un botón &quot;Calcular&quot; mostrar el presupuesto en un objeto de
tipo TEXT.
*/ 

function calcular(){
    let texto = document.getElementById("texto")
    let procesador = document.getElementById("procesador")
    let monitor = document.getElementById("monitor")
    let disco = document.getElementById("disco_duro")

    let equipoTipos = [
        ["Intel-I3", "Intel-I5", "Intel-I7"],
        ["Samsung-20", "Samsung-22", "Samsung-26"],
        ["500-Gb", "1-Tb", "3-Tb"]
    ]

    let precio = [
        [400, 600, 800],
        [250, 350, 550],
        [300, 440, 500]
    ]

    for (let i = 0; i < 3; i++) {
        if (
            equipoTipos[0][i] == procesador.value &&
            equipoTipos[1][i] == monitor.value &&
            equipoTipos[2][i] == disco.value
        ) {
            texto.value = "Presupuesto :" + precio[0][i] + precio[1][i] + precio[2][i]
        }
    }
}
