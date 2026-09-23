/* 
7. Confeccionar una página que muestre tres checkbox que permitan
seleccionar los deportes que practica el usuario (Fútbol, Básquet, Tenis)
Mostrar al presionar un botón los deportes que eligió.
*/ 


function elegidos() {
    let texto = document.getElementById("texto");
    let deportes = ""

    if (document.getElementById("Futbol").checked) {
        deportes = deportes + "Fútbol "
    }

    if (document.getElementById("Basquet").checked) {
        deportes = deportes + "Básquet "
    }

    if (document.getElementById("Tenis").checked) {
        deportes = deportes + "Tenis "
    }

    if (deportes == "") {
        texto.textContent = "Ningun deporte seleccionado "
    } else {
        texto.textContent = "Deportes elegidos: " + deportes
    }
}