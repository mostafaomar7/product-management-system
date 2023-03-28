var ProductName = document.getElementById('ProductNameInput');
var ProductPrice = document.getElementById('ProductPriceInput');
var ProductCategory = document.getElementById('ProductCategoryInput');
var ProductDescerption = document.getElementById('ProductDescerptionInput');
var container = [];
if(localStorage.getItem('products')!=null){
    container= JSON.parse(localStorage.getItem('products'));
    display();
}
function addProduct(){
    product = {
        name : ProductName.value,
        price : ProductPrice.value,
        category : ProductCategory.value ,
        descerption : ProductDescerption.value
    }
    container.push(product);
    localStorage.setItem('products',JSON.stringify(container));
    display()
    // clear();
}
function clear(){
    ProductName.value="";
    ProductPrice.value="";
    ProductCategory.value="";
    ProductDescerption.value="";
}
function display(){
    var cartona = ``;
    for (let i = 0; i < container.length; i++) {
        cartona+= `<tr>
        <td>${i+1}</td>
        <td>${container[i].name}</td>
        <td>${container[i].price}</td>
        <td>${container[i].category}</td>
        <td>${container[i].descerption}</td>
        <td><button onclick="DeleteProduct(${i})" class="btn btn-danger btn-sm">Delete</button></td>
    </tr>`
    }
    document.getElementById('tablebody').innerHTML=cartona;
}

function DeleteProduct(deletedindex){
    container.splice(deletedindex,1);
    localStorage.setItem('products',JSON.stringify(container));
    display();
}

function search(term){
    var cartona =``;
    for (let i = 0; i < container.length; i++) {
        if(container[i].name.toLowerCase().includes(term.toLowerCase()) == true){
            cartona+= `<tr>
        <td>${i+1}</td>
        <td>${container[i].name}</td>
        <td>${container[i].price}</td>
        <td>${container[i].category}</td>
        <td>${container[i].descerption}</td>
        <td><button onclick="DeleteProduct(${i})" class="btn btn-danger btn-sm">Delete</button></td>
        </tr>` 
        }
        
    }
    document.getElementById('tablebody').innerHTML=cartona;
}
