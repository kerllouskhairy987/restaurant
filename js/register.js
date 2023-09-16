let UserName = document.querySelector("#userName")
let Email = document.querySelector("#email")
let PassWord = document.querySelector("#passWord")
let LogOut = document.querySelector("#submit")


LogOut.addEventListener("click" , function(e){
    e.preventDefault()
    if(UserName.value === "" || Email.value === "" || PassWord.value === ""){
        alert("Please complete your LogOut")
    }else{
        localStorage.setItem("Username" , UserName.value);
        localStorage.setItem("Email" , Email.value);
        localStorage.setItem("Password" , PassWord.value);

        setTimeout( ()=> {
            window.location = "index.html"
        } ,1500)
    }
})