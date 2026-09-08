/* 
4. Confeccionar una página que muestre un objeto SELECT con distintos
tipos de pizzas (Jamón y Queso, Muzzarella, Morrones). Al seleccionar
una, mostrar en un objeto de tipo TEXT el precio de la misma.
*/



 function tipos() {
            let pizza = document.getElementById("pizza");
            let precio = document.getElementById("precio");

            precio.value =  pizza.value + ": $";
        }