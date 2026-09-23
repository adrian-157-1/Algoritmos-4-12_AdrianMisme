/* 
Ejercicio 2: Carrito de Compras con Conteo de Productos
Enunciado: Crear un carrito de compras utilizando LocalStorage, que permita a los
usuarios agregar productos y muestre la cantidad total de productos en el carrito.
1. Los productos deben tener un botón para agregar al carrito.
2. Al agregar un producto, se debe mostrar el número total de productos en el
carrito, almacenándolo en LocalStorage.
3. Al recargar la página, el número total de productos debe recuperarse de
LocalStorage y mostrarse correctamente.
un evento).
*/



let cantidad = parseInt(localStorage.getItem("cantidad")) || 0


document.getElementById("cantidad").textContent = cantidad;

document.getElementById("producto1").addEventListener("click", agregar);
document.getElementById("producto2").addEventListener("click", agregar);
document.getElementById("producto3").addEventListener("click", agregar);

function agregar() {
    cantidad++;

    localStorage.setItem("cantidad", cantidad);

    document.getElementById("cantidad").textContent = cantidad;
}