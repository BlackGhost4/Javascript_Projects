function Show_Value(){
    //The "Things" dictionary is created
    var Things = {
        type:"Bed",
        color:"White",
        size:"King",
        price:100
    };
    //Here I delete the price key
    delete Things.price;
    //The elements "size" and "price" are printed.
    document.getElementById("Dictionary").innerHTML = Things.size
    + "<br>"
    + Things.price;
}