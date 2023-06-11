let num1, num2, out;

function add() {
    num1 = parseInt(document.getElementById("number1").value);
    num2 = parseInt(document.getElementById("number2").value);
    if ((/^\d+$/.test(num1) == false) || (/^\d+$/.test(num1) == false)) {
        out = "Error"
    }
    else {
        out = num1 + num2;
    }
    document.getElementById("result").value = out;
}


function minus() {
    num1 = parseInt(document.getElementById("number1").value);
    num2 = parseInt(document.getElementById("number2").value);
    if ((/^\d+$/.test(num1) == false) || (/^\d+$/.test(num1) == false)) {
        out = "Error"
    }
    else {
        out = num1 - num2;
    }
    document.getElementById("result").value = out;
}


function division() {
    num1 = parseInt(document.getElementById("number1").value);
    num2 = parseInt(document.getElementById("number2").value);
    if ((/^\d+$/.test(num1) == false) || (/^\d+$/.test(num1) == false)){
        out = "Error"
    }
    else {
        out = num1 / num2;
    }    
    document.getElementById("result").value = out;
}

function mult() {
    num1 = parseInt(document.getElementById("number1").value);
    num2 = parseInt(document.getElementById("number2").value);
    if ((/^\d+$/.test(num1) == false) || (/^\d+$/.test(num1) == false)) {
        out = "Error no integers were found"
    }
    else {
        out = num1 * num2;
    }    
    document.getElementById("result").value = out;
}


