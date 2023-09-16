let Links = document.querySelector(".links")
let Setting = document.querySelector(".setting")

if(localStorage.getItem("Username")){
    Links.style.display = "none"
    Setting.style.display = "flex"
}
// Start Log Out
let IconLogout = document.querySelector(".iconlogout")

let Logout = document.querySelector("#logout")
Logout.addEventListener("click" , close)
function close(){
    localStorage.clear()
    // window.location = "register.html"
}
// End Log Out
// Start article
// Start open
let openFaceBook = document.querySelector("#openFace")
let openLinkedIn = document.querySelector("#openLinked")
let openInstaGram =document.querySelector("#openInsta")

openFaceBook.addEventListener("click" , OpenFace)
openLinkedIn.addEventListener("click" , Openlinked)
openInstaGram.addEventListener("click" , OPenInsta)

function OpenFace(){
    x = window.open("https://www.facebook.com/profile.php?id=100069349486598" , "facebook" ,"width = 400px , height=400px") ;
}
function Openlinked (){
    y = window.open("https://www.linkedin.com/in/kerolos-khairy-a6673625a/" , "linkedIn" , "width=400px , height=400px");
}
function OPenInsta(){
    window.open("https://www.instagram.com/kerllouskhairy/?next=%2F" , "instagram" , "width = 600px , height = 600px")
}
// End open
// Start close
let closeFaceBook = document.querySelector("#closeFace")
let closeLinkedIn = document.querySelector("#closeLinked")
let closeInstaGram = document.querySelector("#closeInsta")

closeFaceBook.addEventListener("click" ,CloseFace )
closeLinkedIn.addEventListener("click" , Closelinked)
closeInstaGram.addEventListener("click" , Closeinsta)

var x;

function CloseFace(){
    x.close()
}
function Closelinked(){
    y.close()
}
function Closeinsta(){
    z.close()
}
// End close
// End article
// Start section two (spacial offers)
let Pasta = document.querySelector(".pasta")
let Foods = [
    {
        id : 1,
        title : "Quattro pasta" ,
        imageUrl : "images/offer1.png"
    } ,
    {
        id : 2,
        title : "Vegertarian pasta" ,
        imageUrl : "images/offer2.png"
    } ,
    {
        id : 3,
        title : "Gluten-Free pasta" ,
        imageUrl : "images/offer3.png"
    } ,
    {
        id : 4,
        title : "Farfalle pasta" ,
        imageUrl : "images/gallery5.jpeg"
    } 
   
]

// function drawItem(){
//     let y = Foods.map( (Food) =>{
//         return `
//         <div class="kind  me-5">
//         <img src="${Food.imageUrl}"  alt="">
//         <h3>${Food.title}</h3>
//         <p>Lorem ipsum dolor, sit amet contur adipisicing elit. Praesentium, officia. Enim libero impedit ut laudantium
//         </p>
//         <span><del>$55.00</del> <pricee class="pricee">$18.00</pricee></span>
//     </div>
//         `
//     } )
//     Pasta.innerHTML = y.join("")
// }
// drawItem()

function drawItem(){
    Foods.map( (food) =>{
        Pasta.innerHTML += `
        <div class="kind  me-5">
        <img src="${food.imageUrl}"  alt="">
        <h3>${food.title}</h3>
        <p>Lorem ipsum dolor, sit amet contur adipisicing elit. Praesentium, officia. Enim libero impedit ut laudantium
        </p>
        <span><del>$55.00</del> <pricee class="pricee">$18.00</pricee></span>
    </div>
        `
    } )
}
drawItem()
// End section two (spacial offers)
// Start section (Spacail Menu) 
let AllProducts = document.querySelector(".all_products")
let Product = [
    {
        id : 1,
        title : "LASAL CHEESE" ,
        price : "$90.00" ,
        description : "Loremamet consecte lo ting elit. nsecte lo ting elit. Ulam coeur adipisicing eli Ulam coeur adipisicing eli"  ,
        imageUrl : "images/food1.png" ,
    },
    {
        id : 2,
        imageUrl : "images/food7.jpeg" ,
        title : "KOFTA MEAT" ,
        price : "$90.00" ,
        description : "Loremamet consecte lo ting elit. nsecte lo ting elit. Ulam coeur adipisicing eli Ulam coeur adipisicing eli"  ,
    },
    {
        id : 3,
        imageUrl : "images/food2.png" ,
        title : "JUMBO CRAB SHRIMP" ,
        price : "$90.00" ,
        description : "Loremamet consecte lo ting elit. nsecte lo ting elit. Ulam coeur adipisicing eli Ulam coeur adipisicing eli"  ,
    },
    {
        id : 4,
        imageUrl : "images/food8.jpeg" ,
        title : "SPANISH PIES" ,
        price : "$90.00" ,
        description : "Loremamet consecte lo ting elit. nsecte lo ting elit. Ulam coeur adipisicing eli Ulam coeur adipisicing eli"  ,
    },
    {
        id : 5,
        imageUrl : "images/food3.png" ,
        title : "KOKTAIL JUCIE" ,
        price : "$90.00" ,
        description : "Loremamet consecte lo ting elit. nsecte lo ting elit. Ulam coeur adipisicing eli Ulam coeur adipisicing eli"  ,
    },
    {
        id : 6,
        imageUrl : "images/food9.jpeg" ,
        title : "CHEESE TOST" ,
        price : "$90.00" ,
        description : "Loremamet consecte lo ting elit. nsecte lo ting elit. Ulam coeur adipisicing eli Ulam coeur adipisicing eli"  ,
    },
    {
        id : 7,
        imageUrl : "images/food4.png" ,
        title : "CAPO STEAK" ,
        price : "$90.00" ,
        description : "Loremamet consecte lo ting elit. nsecte lo ting elit. Ulam coeur adipisicing eli Ulam coeur adipisicing eli"  ,
    },
    {
        id : 8,
        imageUrl : "images/gallery2.jpeg" ,
        title : "FRUIT SALAD" ,
        price : "$90.00" ,
        description : "Loremamet consecte lo ting elit. nsecte lo ting elit. Ulam coeur adipisicing eli Ulam coeur adipisicing eli"  ,
    },
    {
        id : 9,
        imageUrl : "images/food5.png" ,
        title : "ORGANIC FRUIT SALAD" ,
        price : "$90.00" ,
        description : "Loremamet consecte lo ting elit. nsecte lo ting elit. Ulam coeur adipisicing eli Ulam coeur adipisicing eli"  ,
    },
    {
        id : 10,
        imageUrl : "images/food11.jpeg" ,
        title : "CHICKEN SHAWARMA" ,
        price : "$90.00" ,
        description : "Loremamet consecte lo ting elit. nsecte lo ting elit. Ulam coeur adipisicing eli Ulam coeur adipisicing eli"  ,
    },
    {
        id : 11,
        imageUrl : "images/food6.png" ,
        title : "CHEESE PIZZA" ,
        price : "$90.00" ,
        description : "Loremamet consecte lo ting elit. nsecte lo ting elit. Ulam coeur adipisicing eli Ulam coeur adipisicing eli" ,  
    },
    {
        id : 12,
        imageUrl : "images/food12.jpeg" ,
        title : "MEGA CHEESE PIZZA" ,
        price : "$90.00" ,
        description : "Loremamet consecte lo ting elit. nsecte lo ting elit. Ulam coeur adipisicing eli Ulam coeur adipisicing eli"  ,
    },
    {
        id : 13,
        imageUrl : "images/food8.jpeg" ,
        title : "MEGA CHEESE PIZZA" ,
        price : "$90.00" ,
        description : "Loremamet consecte lo ting elit. nsecte lo ting elit. Ulam coeur adipisicing eli Ulam coeur adipisicing eli" , 
    }
]
function DRAW(){
    let x = Product.map( (Product) =>{
        return `
        <div class="a_product">
        <div class="right_img me-3">
            <img src="${Product.imageUrl}" width="100px" height="100px" alt="">
        </div>
        <div class="left_text">
           <div class="a_product_top">
                <h4>${Product.title}</h4>
                <p>${Product.price}</p>
           </div>
           <hr>
           <div class="a_product_bottom">
                <p>${Product.description}</p>
                <button id="buy">Buy Now </button>
           </div>
        </div>
    </div>
        `
    } )
    AllProducts.innerHTML = x.join("")
}
DRAW()

// End section (Spacail Menu) 
// Start section (Time Line)
let Content_timeLine = document.querySelector(".content_timeLine")
let timeline = [
    {
        id : 1,
        title : "Breakfast",
        paragraph : "8:00 am to10:00 am" ,
        imageUrl : "images/breckfastIcon.png"
    } ,
    {
        id : 2,
        title : "Lunch",
        paragraph : "4:00 pm to 7:00 pm" ,
        imageUrl : "images/dessertIcon.png"
    },
    {
        id : 3,
        title : "Dinner",
        paragraph : "9:00 pm to 1:00 am" ,
        imageUrl : "images/dinnerIcon.png"
    },
    {
        id : 4,
        title : "Dessert",
        paragraph : "All day" ,
        imageUrl : "images/dessertIcon.png"
    }
]
function DrawtimeLine (){
    let l = timeline.map( (timeline) => {
        return `
        <div class="breakFast">
        <img src="${timeline.imageUrl}" >
        <h3>${timeline.title}</h3>
        <p>${timeline.paragraph}</p>
      </div>
        `
    } )
    Content_timeLine.innerHTML = l.join("")
}
DrawtimeLine()
// End section (Time Line)
// Start Section (our food)
let ImgOurfood = document.querySelector(".imgOurfood")
let OurFood = [
    {
        id : 1,
        imageUrl : "images/gallery1.jpeg" ,
    } ,
    {
        id : 2,
        imageUrl : "images/gallery2.jpeg" ,
    } ,
    {
        id : 3,
        imageUrl : "images/food11.jpeg" ,
    } ,
    {
        id : 4,
        imageUrl : "images/gallery4.jpeg" ,
    } ,
    {
        id : 5,
        imageUrl : "images/gallery5.jpeg" ,
    } ,
    {
        id : 6,
        imageUrl : "images/gallery6.jpeg" ,
    }  
]
function DrawOurFood (){
    let k = OurFood.map( (OurFood) => {
        return `
        <div class="img">
        <img src="${OurFood.imageUrl}" >
      </div>
        `
    } )
    ImgOurfood.innerHTML = k.join("")
}
DrawOurFood()
// End Section (our food)


var elements = ['Fire', 'Air', 'Water'];
console.log(elements)                     // [Fire,Air,Water]


var elements = ['Fire', 'Air', 'Water'];
console.log(elements.join('-'))           // FireAirWater

