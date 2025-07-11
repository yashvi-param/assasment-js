let row = document.querySelector("#row")
let cartLength = document.querySelector("#cartLength")
let cartRow = document.querySelector("#cartRow")
let total = document.querySelector("#total")
let cart = JSON.parse(localStorage.getItem("cart"))  || []
let data = [
    {
        "id" : 1,
        "title" : "TAGDO Men's Solid Short Sleeve and Button Up Lapel Shirt with Textured Fabric (2028)",
        "price" :  399,
        "category" : "men`s clothing",
        "image" : "https://m.media-amazon.com/images/I/51rLHfzXEtL._SY741_.jpg",
        "rating" : {
          "rate" : 4,
          "count" : 120
        },

    },
    {
         "id" : 2,
        "title" : "JVX Men T Shirt || T-Shirt for Men || Full Sleeve t Shirt || Tshirt (MRT-209)",
        "price" :  "1,799",
        "category" : "men's clothing",
        "image" : "https://m.media-amazon.com/images/I/51s3QfodazL._SY741_.jpg",
        "rating" : {
          "rate" : 4.2,
          "count" : 120
        },
    },
     {
         "id" : 3,
        "title" : "GRECIILOOKS Shirt for Men | Mens Casual Shirt's | Men's Regular Fit Stylish | Printed ",
        "price" :  "1,700",
        "category" : "men's clothing",
        "image" : "https://m.media-amazon.com/images/I/71IXThTV2QL._SY741_.jpg",
        "rating" : {
          "rate" : 2.0,
          "count" : 120
        },
    },
    {
         "id" : 4,
        "title" : "SWADESI STUFF Men's Regular Fit Polycotton Casual Chinese Collar Half Sleeve Solid Color Shirt",
        "price" :  "349",
        "category" : "men's clothing",
        "image" : "https://images-eu.ssl-images-amazon.com/images/I/61ZPSIJzWOL._AC_UL165_SR165,165_.jpg",
        "rating" : {
          "rate" : 3.8,
          "count" : 120
        },
    },
     {
         "id" : 5,
        "title" : "GoSriKi Women’s Cotton Blend Embroidered Kurta Set with Pant & Dupatta – Straight Calf‑Length, 3/4 Sleeve, Round Neck – Elegant Ethnic Attire (5 Colors, S–5XL)",
        "price" :  "689",
        "category" : "women's clothing",
        "image" : "https://m.media-amazon.com/images/I/61SgADmAyDL._SY741_.jpg",
        "rating" : {
          "rate" : 3.8,
          "count" : 120
        },
    },
     {
         "id" : 6,
        "title" : " Rayon Printed Kurta Set With Dupatta",
        "price" :  "385",
        "category" : "women's clothing",
        "image" : "https://images.meesho.com/images/products/389350199/q6ujx_512.webp",
        "rating" : {
          "rate" : 4.0,
          "count" : 1
        },
    },
     {
         "id" : 7,
        "title" : "GoSriKi Women's Rayon Viscose Embroidered Straight Kurta with Pant & Dupatta",
        "price" :  "689",
        "category" : "women's clothing",
        "image" : "https://m.media-amazon.com/images/I/61A+s3SIjDL._SY879_.jpg",
        "rating" : {
          "rate" : 3.8,
          "count" : 120
        },
    },
     {
         "id" : 8,
        "title" : "GoSriKi Women's Rayon Viscose Anarkali Printed Kurta with Palazzo & Dupatta",
        "price" :  "349",
        "category" : "women's clothing",
        "image" : "https://m.media-amazon.com/images/I/71mX4WATh-L._SX569_.jpg",
        "rating" : {
          "rate" : 3.7,
          "count" : 120
        },
    },

    {
         "id" : 9,
        "title" : "Agile Stylus Girls Top & Bottom Sets",
        "price" :  "127",
        "category" : "children clothing",
        "image" : "https://images.meesho.com/images/products/473212768/dslnn_512.webp",
        "rating" : {
          "rate" : 4.2,
          "count" : 70
        },
    },
    {
         "id" : 10,
        "title" : "baby boy dress & baby girls summer clothes for kids",
        "price" :  "179",
        "category" : "children clothing",
        "image" : "https://images.meesho.com/images/products/354998248/zvheh_512.webp",
        "rating" : {
          "rate" : 3.8,
          "count" : 15
        },
    },
    {
         "id" : 11,
        "title" : " Stylish Kids Clothing set",
        "price" :  "121",
        "category" : "children clothing",
        "image" : "https://images.meesho.com/images/products/465907155/cwped_512.webp",
        "rating" : {
          "rate" : 4.0,
          "count" : 12
        },
    },
    {
         "id" : 12,
        "title" : "Stylish kid's set for summer",
        "price" :  "81",
        "category" : "children clothing",
        "image" : "https://images.meesho.com/images/products/403403791/v3vlh_512.webp",
        "rating" : {
          "rate" : 4.0,
          "count" : 120
        },
    },
]

function setLocal(cart){
  localStorage.setItem("cart", JSON.stringify(cart))
  getLocal()
}

function getLocal(){
 let newcart = JSON.parse(localStorage.getItem("cart")) || [];
  showCart(newcart)
}

function addToCart(id){
let isExits= cart.some((cart) => cart.id == id)
  if(isExits){
    window.alert("Item Already Exits in Cart 🛒")
  }else{
    let obj = data.find((el) => el.id == id)
    obj.qtn = 1;
    cart.push(obj)
    setLocal(cart)
  }
}

function showTotal(cart){
    let sum = 0;
    cart.forEach((el)=>{
        sum = sum + el.price*el.qtn;
    })
     total.textContent = sum
}


function removeCartItem(id){
  cart = cart.filter((cart)=> cart.id != id)
  setLocal(cart)
}

function decCount(id){
  cart = cart.map((cart) => {
    if(cart.id == id){
      cart.qtn = cart.qtn-1;
    }
    return cart;
  })

  cart = cart.filter((cart)=>{
    if(cart.qtn >= 1){
      return cart
    }
  })

   setLocal(cart)
}

function incCount(id){

  let obj = cart.find((cart)=> cart.id == id)

 if(obj.rating.count<=obj.qtn){
    window.alert("out of Stock...!")
 }else{
   cart = cart.map((cart) => {
     if(cart.id == id){
       cart.qtn = cart.qtn+1;
     }
     return cart;
   })
   setLocal(cart)
  }
}


function showCart(arr){
    cartRow.innerHTML = ""
    cartLength.textContent = arr.length;
    showTotal(arr)
    arr.map((cart)=>{
        cartRow.innerHTML += `
            <div class="col-12">
                        <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src=${cart.image} class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                     <div class="d-flex justify-content-between">
                                        <span class="badge text-bg-light">$ ${cart.price} /-</span>
                                            <span class="badge text-bg-warning"> ${cart.rating.rate}</span>
                                        </div>
                                        <h5 class="card-title">${cart.title}</h5>
                                        <p class="card-text">${cart.category}</p>
                                        <div class="d-flex align-items-center justify-content-between">
                                          <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                            <button onclick="decCount(${cart.id})"  type="button" class="btn btn-warning btn-sm">-</button>
                                            <button type="button" class="btn  btn-sm">${cart.qtn}</button>
                                            <button onclick="incCount(${cart.id})" type="button" class="btn btn-success btn-sm">+</button>
                                          </div>
                                          <button onclick="removeCartItem(${cart.id})" class="btn p-1 "><i class="bi bi-trash"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        `
    })
}

showCart(cart)


function showData(arr){
    arr.map((cart) => {
        row.innerHTML += `
                <div class="col-lg-3">
                    <div class="card h-100 p-2">
                        <img src=${cart.image} class="card-img-top img-thumbnail" style="height:200px" alt="...">
                        <div class="card-body">
                        <div class="d-flex justify-content-between">
                           <span class="badge text-bg-light">$ ${cart.price} /-</span>
                            <span class="badge text-bg-warning"> ${cart.rating.rate}</span>
                        </div>
                            <h6 class="card-title">${cart.title}</h6>
                            <p class="card-text">${cart.category}</p>
                            <button onclick="addToCart(${cart.id})" class="btn btn-outline-dark">Add to Cart</button>
                        </div>
                    </div>
                </div>
        `
    })

}

showData(data)