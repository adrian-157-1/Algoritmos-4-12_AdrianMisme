/* 
Ejercicio 04: Lista de Compras Dinámica

Confeccionar una página con un campo de texto y un botón “Agregar”.
Cada vez que se presione el botón, el producto ingresado en el campo debe añadirse
a una lista (&lt;ul&gt;).
Además:
 La lista debe permitir eliminar un producto haciendo clic sobre él.
 En consola debe mostrarse en todo momento la cantidad de productos
actuales en la lista.
*/



let boton = document.getElementById("boton")
let lista = document.getElementById("lista")
cant=0

boton.addEventListener("click", function()
{
    cant++
    let texto = document.getElementById('texto').value
    let nuevo = document.createElement("li") 
    nuevo.textContent = texto
    document.getElementById("lista").appendChild(nuevo)
    console.log("cantidad de productos : ", cant)


    
    nuevo.addEventListener("click", function(){ 
        cant--
        nuevo.remove()
        console.log("cantidad de productos : ", cant)
    })

}
)
