//https://www.youtube.com/watch?v=Tab7V2X1RZ0
let n1,n2,result

function setValues(){
    n1=Number(document.getElementById("num1").value)
    n2=Number(document.getElementById("num2").value)
}
function sum() {
    setValues()
    result=n1+n2
    alert(result)
}

function div() {
    setValues()
    result=n1/n2
    alert(result)
}

function mult() {
    setValues()
    result=n1*n2
    alert(result)
}

function rest() {
    setValues()
    result=n1-n2
    alert(result)
}