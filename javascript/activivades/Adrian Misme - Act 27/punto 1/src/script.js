/* 
1. Crear un formulario con tres botones con las leyendas &quot;1&quot;, &quot;2&quot; y &quot;3&quot;.
Mostrar un mensaje indicando qué botón se presionó.
*/

let num = [1,2,3]

for(let i=0; i<3; i++){
    let boton = document.getElementById(1,2,3)
    
    boton.addEventListener("click", function() {
        alert("se presiono el boton "+ boton[i])
    })
}