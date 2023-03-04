let btnPlusAll =  document.querySelectorAll('.qty-plus');
let btnMinusAll = document.querySelectorAll('.qty-minus');
let addButton = document.querySelector('#add_button');


btnPlusAll.forEach((btn) => { btn.addEventListener('click' , increaseQuantity)}); 
btnMinusAll.forEach((btn) => { btn.addEventListener('click'  , decreaseQuantity)});

addArticle.addEventListener('.click' , addArticle);

function increaseQuantity(){
    this.previousElementSibling.value = parseInt(this.previousElementSibling.value) +1;
    console.log(this.previousElementSibling.value);
    subtotal(this);
}


function decreaseQuantity(){
    if  (this.nextElementSibling.value > 0){
         this.nextElementSibling.value = parseInt(this.nextElementSibling.value) - 1;
         subtotal(this);
    }
} 


function subtotal(elt){
    let price = parseInt(elt.parentElement.nextElementSibling.innerText);
    let qty = parseInt(elt.previousElementSibling.value);
    let subt = price*qty;


    elt.parentElement.nextElementSibling.nextElementSibling.innerText = subt + 'fr';
}

function addArticle(){
    let name = document.querySelector('#name_product');
    let price = document.querySelector('#price_product');
    document.querySelector('#all_products').innerHTML = document.querySelector('#all_products').innerHTML + '<tr><td class="article-name"><div style="margin-right: 1rem;"><img src="https://www.shutterstock.com/image-vector/shopping-cart-icon-design-template-vector-1648317901"></div><div>'+ name.value +'<h3><a class="remove" id="1">Supprimer</a></div></td></td><td class="Quantity"><button class="qty-minus" id="1">-</button><input type="text" readonly placeholder="unit price" class="qty" value="1"><button class="qty-plus" id="1">+</button></td><td class="price">' + price.value +'</td><td class="subtotal">'+ price.value +'</td></tr>'
    loadNewElement();
}


function loadNewElement(){
    let btnPlusAll =  document.querySelectorAll('.qty-plus');
    let btnMinusAll = document.querySelectorAll('.qty-minus');

    btnPlusAll.forEach((btn) => { btn.addEventListener('click' , increaseQuantity)}); 
    btnMinusAll.forEach((btn) => { btn.addEventListener('click'  , decreaseQuantity)});
}