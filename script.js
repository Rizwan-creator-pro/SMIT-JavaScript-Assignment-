// Alert
document.getElementById("alert").onclick = function () {
    let username = 'Muhammad Rizwan Ahmad'
    alert(username)
    let Original = " let username = 'Muhammad Rizwan Ahmad' <br>  alert(username)"
    document.getElementById("Original").innerHTML = Original;
    document.getElementById("Output").innerHTML = username


}
// Alert number
document.getElementById("alert-num").onclick = function () {
    let alertnumber = 88888888888
    alert(alertnumber)
    let Original = "let alertnumber = 88888888888 <br> alert(alertnumber) "
    document.getElementById("Original").innerHTML = Original;
    document.getElementById("Output").innerHTML = alertnumber;
}
// Variable name
document.getElementById("Variable-Names").onclick = function () {
    document.getElementById("Original").innerHTML = "Variable Name"

    let html = "<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, <code>userAlert</code> and  <code>myVar</code> are legal.</li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a <code>Rose</code>. If you assign the string \"Floribundas\" to the variable <code>rose</code>, and then ask JavaScript for the value assigned to <code>Rose</code>, you'll come up empty.</li></ul>";

    document.getElementById("Output").innerHTML = html;
    document.getElementById("Output").style.textAlign = "start"
    
}
// camelCase
document.getElementById("camelCase").onclick = function () {
    
    document.getElementById("Original").innerHTML = "Example of camelCase"
    let camel = "<ul style='list-style: none;' ><li><code>User</code></li><li><code>userResponse</code></li><li><code>userResponseTime</code></li><li><code>userResponseTimeLimit</code></li></ul>";
    document.getElementById("Output").innerHTML = camel;
    document.getElementById("Output").style.textAlign = "center"
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