# 2. En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada
#    cuenta corriente se conoce: número de cuenta y saldo actual. El ingreso de datos debe
#    finalizar al ingresar un valor negativo en el número de cuenta. Se pide confeccionar un
#    programa que lea los datos de las cuentas corrientes e informe:
#    ● a) De cada cuenta: número de cuenta y estado de la cuenta según su saldo,
#    sabiendo que:
#    ○ Estado de la cuenta:
#    ○ “Acreedor” si el saldo es &gt; 0.
#    ○ “Deudor” si el saldo es &lt; 0.
#    ○ “Nulo” si el saldo es = 0.
#    ● b) La suma total de los saldos acreedores.


t=0
a=0

while input:
    n = int(input("ingrese número de cuenta : ")) 
   

    if n < 0 :
        break 
    
    s = int(input("ingrese saldo actual : "))

    if s > 0:
        a = s
        print(f"cuenta {n} ACREEDOR")

    if s < 0:
        print(f"cuenta {n} DEUDOR")
    
    if s == 0:
        print(f"cuenta {n} NULO")

    t = t + a    


print("SUMA tota de ACREEDORES : ", t)
