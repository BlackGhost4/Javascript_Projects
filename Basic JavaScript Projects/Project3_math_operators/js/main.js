//In this function two numbers are added
function Addition(){
    document.getElementById("Math1").innerHTML = "5 + 10 = " + (5+10);
}

//In this function two numbers are subtracted
function Subtraction(){
    document.getElementById("Math2").innerHTML = "5 - 4 = " + (5-4);
}

//In this function two numbers are multiplied
function Multiplication(){
    document.getElementById("Math3").innerHTML = "5 * 4 = " + (5*4);
}

//In this function two numbers are divided
function Division(){
    document.getElementById("Math4").innerHTML = "10 / 5 = " + (10/5);
}

//In this function two numbers are divided
function Multiple_Mathematical_Operations(){
    document.getElementById("Math5").innerHTML = "(10*4) / 3 + 8 - 3 = " + ((10*4)/3+8-3);
}

//In this function the MOD function of two numbers is performed
function Modulus(){
    document.getElementById("Math6").innerHTML = "When you divide 20 by 6, you have "
    + "a remainder of " + (20 % 6);
}

//In this function the NEGATIVE of a number registered in the variable X is calculated
function Negation(){
    var x = 2;
    document.getElementById("Math7").innerHTML = "The negation of the number " + x
    + " is " + -x;
}

//In this function a number registered in the variable X is increased
function Increment(){
    var x = 2;
    x++;
    document.getElementById("Math8").innerHTML = "Increment of the 2 is " + x;
}

//In this function a number registered in the variable X is decremented
function Decrement(){
    var x = 2;
    x--;
    document.getElementById("Math9").innerHTML = "Decrement of the 2 is " + x;
}

//In this function a random number is generated
function Random(){
    document.getElementById("Math10").innerHTML = "Number " + Math.random();
}

//In this function the value of PI is obtained, objective of JavaScript Math object
function Math_Object(){
    document.getElementById("Math11").innerHTML = Math.PI;
}