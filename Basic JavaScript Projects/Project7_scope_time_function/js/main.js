//Global variable
var X = 4;

function Local_Variable_Function(){
    //Local variable
    var Y = 5;
}

//Show in the console the variables X and Y
function Show_Variables(){
    console.log(X);
    console.log(Y); //In this line the browser show an error
}

function Function_Hours(){
    if (new Date().getHours() < 18){
        document.getElementById("Hours_Text").innerHTML = "How are you today?";
    }
}

//Show the time, only if the current month es November
function GetTime(){
    var auxTime = new Date();
    if (auxTime.getMonth() == 10){ //Here one is discounted per month, because javascript starts the months at 0
        document.getElementById("Time_Text").innerHTML = auxTime.getHours() + ":" + auxTime.getMinutes() + ":" + auxTime.getSeconds();
    }else{
        document.getElementById("Time_Text").innerHTML = "Sorry, the current month is " + auxTime.getMonth(); 
    }
}

//This function calculates the hours that have passed or are missing, 
//depending on the time entered by the user and the current time. 
//Note: Discriminate the minutes
function Calculate_Missing_Hour(){
    var Current_Hour = new Date().getHours();
    var User_Hour = document.getElementById("User_Hour").value;
    var result = "";
    if (User_Hour < 0 || User_Hour > 23){
        result = "The hour is not correct";
    }else if (User_Hour == Current_Hour){
        result = "Right now it\'s " + User_Hour + " o\'clock";
    }else if(User_Hour < Current_Hour){
        result = "The time written was " + (Current_Hour-User_Hour) + " hours ago";
    }else{
        result = "The written time will be within " + (User_Hour-Current_Hour) + " hours";
    }
    document.getElementById("Missing_Hour").innerHTML = result;
}

//Step 153
function Time_Function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }else if (Time >=12 == Time <18){
        Reply = "It is afternoon";
    }else{
        Reply = "It is evening time";
    }
    document.getElementById("Time_Of_Day").innerHTML = Reply;
}