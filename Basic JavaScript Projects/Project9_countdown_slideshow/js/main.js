//Here you get the instances of the tags of the 
// descriptions of the bars
var textslide1 = document.getElementById("textslide1");
var textslide2 = document.getElementById("textslide2");
var textslide3 = document.getElementById("textslide3");
var textslide4 = document.getElementById("textslide4");

//We hide all the descriptions of the bars, in the
//function when passing the parameter 0, it is hidden
showTextSlide(0);

//We initialize with the first slide
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

//Show the current slide and hide the rest of them
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    //Call the function to show the description
    showTextSlide(slideIndex);
}

//Show the description of the current slide
//and hide the rest of them
function showTextSlide(n) {
    //All descriptions are hidden
    textslide1.style.display = "none";
    textslide2.style.display = "none";
    textslide3.style.display = "none";
    textslide4.style.display = "none";
    //According to the value of the parameter n,
    //only that description is shown
    switch (n) {
        case 1:
            textslide1.style.display = "block";
            break;
        case 2:
            textslide2.style.display = "block";
            break;
        case 3:
            textslide3.style.display = "block";
            break;
        case 4:
            textslide4.style.display = "block";
            break;
    }
}