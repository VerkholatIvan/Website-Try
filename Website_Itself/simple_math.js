function add() {
    var num1, num2, out;
    num1 = parseInt(document.getElementById("number1").value);
    num2 = parseInt(document.getElementById("number2").value);
    out = num1 + num2;
    document.getElementById("result").value = out;
}