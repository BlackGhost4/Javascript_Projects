function count_To_Ten(){
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

var paragraph = "This is a text";
document.getElementById("Length_Text").innerHTML = "The text \""
+ paragraph + "\", have a " + paragraph.length + " letters";

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("For_Loops_Text").innerHTML = Content;
}

function cat_pics(index){
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[index] + ".";
}

function constant_function(){
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Musical_Instrument.type + " was " + Musical_Instrument.price + " and color " +
    Musical_Instrument.color;
}

function let_function(){
    var X = 10;
    document.getElementById("Let_Keyword").innerHTML += X + "<br>";
    {
        let X = 15;
        document.getElementById("Let_Keyword").innerHTML += X + "<br>";
    }
    document.getElementById("Let_Keyword").innerHTML += X + "<br>";
}

function object_function(){
    let car = {
        make: "Dodge ",
        model: "Viper ",
        year: "2021 ",
        color: "red ",
        description: function() {
            return "The car is a " + this.year + this.color + 
            this.make + this.model;
        }
    };
    document.getElementById("Object_Text").innerHTML = car.description();
}

//This function prints the numbers from 1 to 10, 
//breaks at the number 4 and asks the user if they want to continue.
//Using for loop
function Break_Continue_function(){
    var text = "";
    let i;
    for (i = 1; i <= 10; i++) {
        if (i === 4) {
            if (confirm("Do you wish to continue?")){
                continue;
            }else{
                break;
            }
        }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("Loop_Text").innerHTML = text;
}

//This function prints the numbers from 1 to 10, 
//breaks at the number 4 and asks the user if they want to continue.
//Using while loop
function Break_Continue_function2(){
    var text = "";
    let i = 1;
    let exit = false;
    while (i <= 10) {
        if (i === 4) {
            if (confirm("Do you wish to exit?")){
                exit = true;
            }
        }
        text += "The number is " + i + "<br>";
        i++;
        if (exit == true){
            break;
        }
    }
    document.getElementById("Loop_Text2").innerHTML = text;
}