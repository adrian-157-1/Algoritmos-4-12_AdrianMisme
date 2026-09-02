/* 
2. Cargar un nombre y un apellido en dos text. Al presionar un botón,
concatenarlos y mostrarlos en un tercer text (Tener en cuenta que
podemos modificar la propiedad value de un objeto TEXT cuando ocurre
un evento).
*/


let btn = document.getElementById("btn")

btn.addEventListener("click", function(){

    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let texto = document.getElementById("texto")

    texto.textContent = nombre +" "+ apellido
})