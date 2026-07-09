/*

2. En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada
cuenta corriente se conoce: número de cuenta y saldo actual. El ingreso de datos debe
finalizar al ingresar un valor negativo en el número de cuenta.
Se pide confeccionar un programa que lea los datos de las cuentas corrientes e
informe:
a) De cada cuenta: número de cuenta y estado de la cuenta según su saldo, sabiendo
que:
Estado de la cuenta:

● “Acreedor” si el saldo es &gt;0.
● “Deudor” si el saldo es &lt;0.
● “Nulo” si el saldo es =0
b) La suma total de los saldos acreedores.

*/

let a = 0

let c = parseInt(prompt("Ingrese número de cuenta (negativo para finalizar):"))

for (let i = 0; c >= 0; i++) {

     let s = parseFloat(prompt("Ingrese el saldo de la cuenta:"))

    let estado

    if (s > 0) {
        estado = "Acreedor"
        a += s
    } 

    else if (s < 0) {
        estado = "Deudor"
    } 

    else {
        estado = "Nulo"
    }

    console.log("Cuenta:", c)
    console.log("Saldo:", s)
    console.log("Estado:", estado)


    c = parseInt(prompt("Ingrese número de cuenta (negativo para salir):"))
}

console.log("Suma total de saldos acreedores:", a)