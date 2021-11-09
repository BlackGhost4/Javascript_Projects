//Function to calculate if a person can ride
function Ride_Function(){
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."
}

//Function to calculate if a person can vote
function Vote_Function(){
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are not":"You are";
    document.getElementById("Age_Text").innerHTML = Can_Vote + " voting age."
}

//Step 138
//object constructor function named "Cell Phones"
function Cellphone(Model, Color, Brand, Size) {
    this.Cellphone_Model = Model;
    this.Cellphone_Color = Color;
    this.Cellphone_Brand = Brand;
    this.Cellphone_Size = Size;
}

function Assign_a_Reserved_Word(){
    //The following values are assigned to the variable cellphone1
    //For practical purposes, the following line of code that indicates the error will be left commented
    //***************************************
    //var cellphone1 = new Vehicle("X", "Black", "iPhone", finally); //a reserved word "finally"
    //*************************************** 
    //When assigning a reserved variable and pressing click on the button
    //that brings up this function, in the browser console it indicates
    //the error that this function is not declared, because it could not be interpreted
    var cellphone1 = new Cellphone("X", "Black", "iPhone", "Large");
    document.getElementById("Reserved_Word").innerHTML = "The cellphone1 is "
    + cellphone1.Cellphone_Color + ", " + cellphone1.Cellphone_Brand 
    + " brand and is " + cellphone1.Cellphone_Size;
}

//Step 141 Nested Function
function Function_Nested(){
    document.getElementById("Nested_Text").innerHTML = Count();
    function Count(){
        var Starting_point = 9;
        function Plus_One(){ //Nested function
            Starting_point += 1;
        }
        Plus_One();
        return Starting_point;
    }
}