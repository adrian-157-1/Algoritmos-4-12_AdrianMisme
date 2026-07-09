/*

Ejercicio 2 – Inventario de Tienda
En un vector cargar los nombres de 5 productos y en un vector paralelo sus cantidades en
stock. Mostrar:
● Productos con stock menor a 10 unidades.
● Producto con mayor cantidad de stock.
● Suma total de todos los productos en stock.

*/



let p = []
let c = []
let t = 0
let n = ""
let m = ""

for(let i = 0; i < 5; i++){
p[i] = prompt(`ingresa el nombre del producto ${i+1}`) 
c[i] = parseInt(prompt(`ingresa la catitad de unidades ${i+1}`))


if(c[i] < 10){
n += ` ${p[i]}  `
}
t = t + c[i]

}


let max = Math.max(...c)

for(let i = 0; i < 5; i++){

    if(c[i] == max){
        m = p[i]
    }
}

console.log(p)
console.log(c)


console.log("Producto con mayor cantidad de stock : ")
console.log(m)
console.log("Productos con stock menor a 10 unidades : ")
console.log(n)
console.log("Suma total de todos los productos en stock : ", t)