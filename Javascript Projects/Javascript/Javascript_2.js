function validateForm(){
    let userName = document.forms["userForm"]["userName"].value;
    let userEmail = document.forms["userForm"]["userEmail"].value;
    let password1 = document.forms["userForm"]["userPassword"].value;
    let password2 = document.forms["userForm"]["userPasswordConfirm"].value;
    let message = document.getElementById("messageResult");
    
    if ((userName.length <= 0) || (userEmail.length <= 0) || (password1.length <= 0) || (password2.length <= 0)) {
        message.innerHTML = "All fields are required";
        return false;
    }else if (!(password1 === password2) == true) {
        message.innerHTML = "Passwords must be the same";
        return false;
    }
}