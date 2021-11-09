//This function is used to display the typeof operator
function Function_TypeOf(){
    document.write("Function TypeOf -> ");
    document.write(typeof 5);
}
//function to combine string and number
function Function_Coercion(){
    document.write("<br>Function Coercion -> ");
    document.write("10" + 5);
}
//Function to prove NaN
function Nan_Number(){
    document.write("<br>Function NaN -> ");
    document.write(0/0);
    document.write("<br>Function NaN -> ");
    document.write(isNaN("This is a string"));
    document.write("<br>Function NaN -> ");
    document.write(isNaN("007"));
}
//Function that shows an infinite number
function Infinity_Number(){
    document.write("<br>Function Infinity -> ");
    document.write(2E310);
}
//Function that shows a negative infinite number
function Negative_Infinity_Number(){
    document.write("<br>Function Negative Infinity -> ");
    document.write(-3E310);
}
//Function that uses the "greater than" operator
function Greater_Than(){
    document.write("<br>Function Greater than -> (10>2) ");
    document.write(10 > 2);
}
//Function that uses the "less than" operator
function Less_Than(){
    document.write("<br>Function Less than -> (10<2) ");
    document.write(10 < 2);
}
//Function to display on console
function Show_In_Console(){
    console.log(2+2);
    console.log(2 > 2);
}
//Function that uses the "==" operator
function Double_Equal(x, y){
    document.write("<br>Function Double Equal -> (" + x + " == " + y + ") ");
    document.write(x==y);
}
//Function that uses the "===" operator
function Triple_Equal(x, y){
    document.write("<br>Function Triple Equal -> (" + x + " === " + y + ") ");
    document.write(x===y);
}
//Function that uses the "&&" operator
function Function_And(x, y){
    document.write("<br>Function And Condition -> ((" + x + ") AND (" + y + ")) ");
    document.write(x && y);
}
//Function that uses the operator "||"
function Function_Or(x, y){
    document.write("<br>Function Or Condition -> ((" + x + ") Or (" + y + ")) ");
    document.write(x || y);
}
//Function that uses the operator "! (Not)"
function Function_Not(x, y){
    document.write("<br>Function Or Condition -> !(" + x + " > " + y + ") ");
    document.write(!(x > y));
}