var string1 = "Hello";
var string2 = "Portland!!!!";

function Show_Text(){
    document.getElementById("text1").textContent = string1;
    document.getElementById("text2").textContent = string2;
}

function Concatenate_Text(){
    var text = "and this is the concatenated text"
    document.getElementById("text3").textContent += text;
}

//This function adds two numbers
function Sum_Numbers(){
    //The value of "number1" is taken
    var number1 = document.getElementById("number1").value;
    //The value of "number2" is taken
    var number2 = document.getElementById("number2").value;
    //The two numbers are added; but because they are strings,
    //they are passed to integer to be able to perform the sum
    var sum = +number1 + +number2;
    //The result is printed in the tag "text4"
    document.getElementById("text4").innerHTML = "Sum: " + sum;
}