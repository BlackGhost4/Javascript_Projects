function My_First_Function(){
    var str = "This text is green!!!!";     //Inicializa la variable str
    var result = str.fontcolor("green");    //Le agrega el color verde al texto
    document.getElementById("Green_Text").innerHTML = result;   //Imprime el valor de result
                                                                //dentro del espacio de Green_Text
}