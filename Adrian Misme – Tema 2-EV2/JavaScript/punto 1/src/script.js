/*

Monitoreo Logístico - Tiempos de Entrega
Una empresa de mensajería urbana necesita controlar los tiempos de viaje de sus
repartidores para detectar demoras inusuales en las entregas del día.
Consignas:
1. Carga de datos: Diseñar una función que solicite por teclado el nombre de 4
cadetes y sus respectivos tiempos de entrega del último pedido medidos en
minutos. Almacenar esta información en dos listas/arrays paralelos (una para
nombres de cadetes y otra para los tiempos).
2. Reporte: Mostrar en pantalla cada repartidor junto a su tiempo de demora
correspondiente.
3. Filtro de Alerta: Recorrer las estructuras e informar los nombres de aquellos
cadetes cuyo pedido demoró más de 45 minutos para emitir un reporte de
demora excesiva.

*/



function cargar(){
    const nombres = [];
    const tiempos =[];

    for(let x=0; x<4; x++){
        let n = prompt("ingrese nombre de cadete : ");
        let t = parseInt(prompt("ingresa su tiempo de entrega : "));
        nombres.push(n);
        tiempos.push(t);
    }
    console.log(nombres);
    console.log(tiempos);

    reporte(nombres, tiempos);
    filtro_alerta(nombres, tiempos);
    
}


function reporte(nombres, tiempos){
    console.log("Cadetes y sus Tiempos de demora : ");

    for(let x=0; x<4; x++){
        console.log(nombres[x], " - ", tiempos[x], "min");
    }
}



function filtro_alerta(nombres, tiempos){
    console.log("Cadetes cuyo pedido demoró más de 45 minutos es : ");
    t = tiempos[0];
    n = nombres[0];

    for(let x=0; x<4; x++){
        if (tiempos[x] > 45){
            t = tiempos;
            n = nombres;
            console.log(n[x], " - ", t[x], "min");
        }
    }
}


cargar();
