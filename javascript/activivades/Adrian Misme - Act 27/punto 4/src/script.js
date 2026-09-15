/* 
4. Confeccionar una página que muestre un objeto SELECT con distintos
tipos de pizzas (Jamón y Queso, Muzzarella, Morrones). Al seleccionar
una, mostrar en un objeto de tipo TEXT el precio de la misma.
*/



function tipos(){
    let texto = document.getElementById("texto")
    let pizza = document.getElementById("pizza")
    let tipo = ["muzzarela", "queso", "jamon", "morrones"]
    let precio = [100,300,200,500]

    for(let i=0; i<3; i++){

        if(tipo[i] ==  pizza.value){
            texto.value = "pizza de " + pizza.value +": $ "+ precio[i]
        }
    }

}


