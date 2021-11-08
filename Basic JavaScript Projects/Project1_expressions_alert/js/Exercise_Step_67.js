//Function for show or hiden text
function Show_Text(){
    var my_div = document.getElementById('div_text').style.display
    if (my_div == "none"){
        document.getElementById("div_text").style.display = "block";
    }else{
        document.getElementById("div_text").style.display = "none";
    }
}