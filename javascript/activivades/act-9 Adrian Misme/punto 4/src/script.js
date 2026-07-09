/*

4. Cargar un array con la producción (en unidades) de una fábrica durante 10
días.
Incluir:
● Cálculo de la producción total en esos 10 días.
● Muestra de los días donde la producción superó las 200 unidades.
● Indicar si hubo algún día con producción igual a 0.

*/


let p = []
let t = 0
let s = 0
let c = 0
let d = ""

for(let i = 0; i < 10; i++){

p[i] = parseInt(prompt(`ingresa la produccion del dia ${i+1}`))

s = s + p[i]

if(p[i] > 200){
s++
d += `Dia ${i+1} - `
}

if(p[i] == 0){
c++
}
}


console.log("produccion total : ", s)
console.log("dias que superaron los 200 unidades : ", s)
console.log(d)
console.log("producciones igual a 0 : ", c)