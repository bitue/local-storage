const checkCart =()=>{
    let cartObject ;
    let cartString = localStorage.getItem('cart')
    if(cartString){
        cartObject= JSON.parse(cartString)
        return cartObject
    }
    else{
        return {}
    }
}

const displayUi =(name,price)=>{
   let ul =  document.getElementById('ul')

  let li =  document.createElement('li')
  li.innerText= `name:${name}  price:${price}`
  ul.appendChild(li)
}

const storeDataLocal=(name,price)=>{
    //check the object that already in the local storage or not
    let object = checkCart()
    //set the object value and prop

    object[name]=price;
    //set then before stringified
    let stringObject = JSON.stringify(object)
    //set data as cart value 
    localStorage.setItem('cart',stringObject)

}



const getValueFromInput =()=>{
  let productName=  document.getElementById('product-name').value
  let productPrice= document.getElementById('product-price').value
  //1. store this data at local storage
  storeDataLocal(productName,productPrice)

//   let object = checkCart()
  //.........................................
//   object[productName]=productPrice


  //show them ui 
  displayUi(productName,productPrice)

//   console.log(object)

  //clear input field

  document.getElementById('product-name').value =''
  document.getElementById('product-price').value=''
}

const loadDataLocal=()=>{
    //first check the cart value 
    let object = checkCart()
    
    let entries = Object.entries(object)
    //get the object entries value  i = [key,value]
    for (i of entries){
        //send them displayUi function 
        displayUi(i[0],i[1])
    }

}

const removeData=()=>{
    //clear the text content of ul 
    document.getElementById('ul').textContent=''
    //clear the localStorage 
    localStorage.removeItem('cart')
}

//when window load then this event will be executed
window.addEventListener('load',loadDataLocal)
//by clicking this event execute 
document.getElementById('add-btn').addEventListener('click',getValueFromInput)


//if client click the remove btn then remove data function will be called 
document.getElementById('rem-btn').addEventListener('click',removeData)