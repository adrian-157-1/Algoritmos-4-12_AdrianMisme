/*
4-
Un comercio de tecnología necesita administrar el stock de sus 5 componentes clave de
hardware.
 Crear una lista donde cada elemento sea una tupla de tres elementos que
represente: (nombre_articulo, precio, stock).
Desarrollar las siguientes funciones:
1. Cargar inventario: Ingresar por teclado los datos de los 5 componentes para
armar las tuplas correspondientes.
2. Imprimir listado: Mostrar por pantalla los nombres, precios y stock de todos los
artículos desempaquetando la tupla de manera directa en el bucle for.
3. Valor del Inventario: Calcular e informar el valor total de la mercadería en el local
(sumando el resultado de precio * stock de cada uno de los componentes).
4. Alerta de Reposición: Imprimir el nombre de todos aquellos artículos cuyo stock
sea menor o igual a 10 unidades para emitir un aviso de compra urgente.
*/

function cargar_inventario() {
    let inventario = []

    for (let i = 0; i < 5; i++) {
        let nombre = prompt("ingrese nombre del artIculo: ")
        let precio = parseInt(prompt("ingrese precio: "))
        let stock = parseInt(prompt("ingrese stock: "))

        inventario.push([nombre, precio, stock])
    }

    return inventario
}


function imprimir_listado(inventario) {
    for (let [nombre, precio, stock] of inventario) {
        console.log("ArtIculo: ", nombre)
        console.log("Precio: ", precio)
        console.log("Stock: ", stock)
        console.log("=======================")
    }
}


function valor_inventario(inventario) {
    let total = 0

    for (let [nombre, precio, stock] of inventario) {
        total = total + precio * stock
    }

    console.log("Valor total de inventario: ", total)
}


function alerta_reposicion(inventario) {
    for (let [nombre, precio, stock] of inventario) {
        if (stock <= 10) {
            console.log("AVISO: ", nombre)
        }
    }
}

let inventario = cargar_inventario()

imprimir_listado(inventario)

valor_inventario(inventario)

alerta_reposicion(inventario)