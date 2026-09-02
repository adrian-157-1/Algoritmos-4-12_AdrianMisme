/* 
3. Disponer dos campos de texto tipo password. Cuando se presione un
botón mostrar si las dos claves ingresadas son iguales o no (es muy
común solicitar al operador el ingreso de dos veces de su clave para
validar si las escribió correctamente, esto se hace cuando se crea una
password para el ingreso a un sitio o para el cambio de una existente).
Tener en cuenta que podemos emplear el operador == para ver si dos
string son iguales.
*/



let btn = document.getElementById("btn")

btn.addEventListener("click", function(){

    const cont1 = document.getElementById("cont1").value
    const cont2 = document.getElementById("cont2").value
    let texto = document.getElementById("texto")

    if(cont1 == cont2){
        texto.textContent = "contraseñas iguales"
        texto.style.color = "green"
    }
    else{
        texto.textContent = "ERROR, las contraseñas no son iguales"
        texto.style.color = "red"
    }
})