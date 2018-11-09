function operacao(operador) {
    const n1=Number(document.querySelector("#num1").value)
    const n2=Number(document.querySelector("#num2").value)
    let res=0

    if (operador == "+") {
        res = n1+n2       
    } else if (operador == "-") {
        res = n1-n2
    } else if (operador == "*") {
        res = n1*n2
    } else {
        if (n2==0) {
            alert("Não pode dividir o número por zero!")
        } else {
            res = n1/n2
        }
    }
    
    alert(res)
}