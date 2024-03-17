let username = "Muhammad Rizwan Ahmad"
// Alert
document.getElementById("alert").onclick = function () {
    alert(username)
}
// Alert number
document.getElementById("alert-num").onclick = function () {
    let alertnumber = 88888888888
    alert(alertnumber)
}
// Variable name
document.getElementById("Variable-Names").onclick = function () {
    document.getElementById("Original").innerText = "Variable Name"
    document.getElementById("Output").innerText = "varName"
}
// camelCase
document.getElementById("camelCase").onclick = function () {
    document.getElementById("Original").innerText = "Example of CamelCase"
    document.getElementById("Output").innerText = "thisIsCamelCase"
}
// sum of two numnbers
document.getElementById("sum-of-num").onclick = function () {
    document.getElementById("Original").innerHTML = "";
    document.getElementById("Output").innerHTML = "";

    let num1 = 10;
    let num2 = 5;
    let sum = num1 + num2;

    document.getElementById("Output").innerHTML = "<p class='text-center'>" + sum + "</p>";
    let Original = "let num1 = " + num1 + ";<br> let num2 = "+ num2 + "; <br> let sum = num1 + num2; "

    document.getElementById("Original").innerHTML = Original;

}
// subtraction
document.getElementById("Subtract").onclick = function () {
    document.getElementById("Original").innerHTML = "";
    document.getElementById("Output").innerHTML = "";

    let num1 = 100;
    let num2 = 5;
    let sub = num1 - num2;

    document.getElementById("Output").innerHTML = "<p class='text-center'>" + sub + "</p>";
    let Original = "let num1 = " + num1 + ";<br> let num2 = "+ num2 + "; <br> let sub = num1 - num2; "

    document.getElementById("Original").innerHTML = Original;

}
// Multiply
document.getElementById("Multiply").onclick = function () {
    document.getElementById("Original").innerHTML = "";
    document.getElementById("Output").innerHTML = "";

    let num1 = 50;
    let num2 = 70;
    let mul = num1 * num2;

    document.getElementById("Output").innerHTML = "<p class='text-center'>" + mul + "</p>";
    let Original = "let num1 = " + num1 + ";<br> let num2 = "+ num2 + "; <br> let mul = num1 * num2; "

    document.getElementById("Original").innerHTML = Original;

}
// Divide 
document.getElementById("Divide").onclick = function () {
    document.getElementById("Original").innerHTML = "";
    document.getElementById("Output").innerHTML = "";

    let num1 = 50;
    let num2 = 70;
    let Div = num1 / num2;

    document.getElementById("Output").innerHTML = "<p class='text-center'>" + Div + "</p>";
    let Original = "let num1 = " + num1 + ";<br> let num2 = "+ num2 + "; <br> let Div = num1 / num2; "

    document.getElementById("Original").innerHTML = Original;

}
// Calculate Some Numbers
document.getElementById("Calculate").onclick = function () {
    document.getElementById("Original").innerHTML = "";
    document.getElementById("Output").innerHTML = "";

    let someCalculate = 36 / 6 * 3 + 2 ** 4 - (3 + 5);

    document.getElementById("Output").innerHTML = "<p class='text-center'>" + someCalculate + "</p>";
    let Original = "let someCalculate = 36 / 6 * 3 + 2 ** 4 - (3 + 5);"

    document.getElementById("Original").innerHTML = Original;

}
// Clear statment Button
document.getElementById("Clear-statment").onclick = function () {
    document.getElementById("Original").innerHTML = ""
}
// Clear Output Button
document.getElementById("clear-Output").onclick = function () {
    document.getElementById("Output").innerHTML = ""
}