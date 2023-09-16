let UserName = document.querySelector("#userName")
let PassWord = document.querySelector("#passWord")
let LogIn = document.querySelector("#submit")

let Username = localStorage.getItem("Username")
let Password = localStorage.getItem("Password")

LogIn.addEventListener("click" , function(e){
    e.preventDefault()
    if(UserName.value === "" || PassWord.value === ""){ 
        alert("Please complete your LogIn")
    } if(Username && Username.trim()  === UserName.value.trim() && Password && Password.trim() === PassWord.value.trim()){
            setTimeout( () =>{
                window.location = "index.html"
            } ,1500 )
        }else{
            alert("username or password isn't correct")
        }
})