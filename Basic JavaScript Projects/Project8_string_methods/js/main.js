//String Methods
//This function implements "Concat Method"
function full_sentence(){
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence.";
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//This function implements "Slice Method"
function slice_method(){
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27,33); //From character 27 to 33
    document.getElementById("Slice").innerHTML = section;
}

//This function implements "toUpperCase Method"
function uppercase_method(){
    var word = "the toUpperCase method was applied to this paragraph.";
    document.getElementById("UpperCase").innerHTML = word;
    document.getElementById("UpperCase").innerHTML += "<br>" + word.toUpperCase();
}

//This function implements "Search Method"
function search_method(){
    var sentence = "In this paragraph, the word home is located in the position";
    var section = sentence.search("home");
    var section2 = sentence.search("dinosaur");
    document.getElementById("Search").innerHTML = sentence;
    document.getElementById("Search").innerHTML += " " + section;
    if (section2 > 0) {
        document.getElementById("Search").innerHTML += "<br>and the word \"dinosaur\" in the position " + section2;
    }else{
        document.getElementById("Search").innerHTML += "<br>and the word \"dinosaur\" was not found";
    }
}

//This function implements "String" of Number's Methods 
function string_number_method(){
    var x = 4;
    document.getElementById("StringNumber").innerHTML = x.toString();
}

//This function implements "ToPrecision" of Number's Methods 
function toprecision_number_method(number, precision){
    document.getElementById("PrecisionNumber").innerHTML = "To number " + number
    + " it was applied the method toPrecision with a parameter value of " + precision
    + ", and the result is " + number.toPrecision(precision);
}

//This function implements "Fixed" of Number's Methods 
//The toFixed() method converts a number into a string, rounding to a
//specified number of decimal
function Fixed_number_method(number, fixed){
    document.getElementById("FixedNumber").innerHTML = "To number " + number
    + " it was applied the method toFixed with a parameter value of " + fixed
    + ", and the result is " + number.toFixed(fixed);
}

//This function implements "ValueOf" of Number's Methods 
//The valueOf() method returns the primitive value of a number
function ValueOf_number(number){
    document.getElementById("ValueOfNumber").innerHTML = number.valueOf();
}