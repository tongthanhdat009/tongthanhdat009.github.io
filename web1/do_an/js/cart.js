var total=0;
var table = document.querySelector("#cart_container table");
var totalCash= document.querySelector("#total p");
var productAdded=[];
var storedData = localStorage.getItem('productAdded');
if (storedData) {
    productAdded = JSON.parse(storedData);
}

function cartAdd(name, price, amount, img){
    var product={
        name: name,
        price: price,
        amount: amount,
        img:img,
    }
    if (productAdded) {
        productAdded.push(product);
      } else {
        productAdded = [product]; // Nếu productAdded là null, tạo mảng mới
      }
    saveProductAdded();
}
function saveProductAdded() {
    var jsonStr = JSON.stringify(productAdded);
    localStorage.setItem('productAdded', jsonStr);
  }  
function takeInfo(product){// lấy info->chuyển file->inner tên loại sản phẩm
    var amount=1;//số lượng
    var infor = product.childNodes;// thông tin sản phẩm
    var img = product.querySelector('img').src;// hình ảnh sản phẩm
    var name = infor[1].textContent;// tên sản phẩm
    var price=infor[2].textContent;// giá sản phẩm
    cartAdd(name,price,amount,img);
    saveProductAdded();
}
function deleteAll(){
  localStorage.clear();
  location.reload();
}

document.addEventListener('DOMContentLoaded', function () {
    cartDisplay();
    totalProduct();
});

function cartDisplay(){
  for (var i = 0; i < productAdded.length; i++) {
    var cartRow = table.insertRow(-1); //thêm dòng vào bảng cart
    var deleteIcon, cartPrice, cartName, cartAmount, cartProduct;
    
      deleteIcon=cartRow.insertCell(0);
      deleteIcon.innerHTML= '<div class="delete_icon" onclick="deleteProduct(this)"><img src="/do_an/asset/delete.png" alt="delete_icon"></div>';
      
      cartAmount=cartRow.insertCell(0);
      cartAmount.innerHTML='<div class="product-amount">'+'<div class="sub">'+
      '<button onclick="decrement(this)">-</button>'+'</div>'+'<div class="amount">'+'<input class="quantity" type="number" value="'+productAdded[i].amount+'" name="amount" onchange="updateQuantity(this)">'+
      '</div>'+'<div class="add">'+'<button onclick="increment(this)">+</button>'+'</div>'+'</div>';
      
      cartPrice=cartRow.insertCell(0);
      cartPrice.innerHTML= '<div class="product-price">'+productAdded[i].price+'</div>';
    
      
      cartName=cartRow.insertCell(0);
      cartName.innerHTML= '<div class="product-name">'+productAdded[i].name+'</div>';
      
      cartProduct=cartRow.insertCell(0);
      cartProduct.innerHTML= '<div class="product-img">'+
      '<img src="'+productAdded[i].img+'"alt="product-img">'
      +'</div>';
  }
}
    
function deleteProduct(button) {
  var row = button.parentNode.parentNode;//lấy chỉ số hàng trong bảng quản lý
  var table = row.parentNode;//lấy hàng từ bảng quản lý
  var cell =row.cells;//lấy ô từ hàng trong bảng quản lý
  table.deleteRow(row.rowIndex);//xóa hàng trong bảng quản lý
  var copy=productAdded;
  for(var i=0;i<productAdded.length;i++){
    if(cell[1].textContent===copy[i].name){
      copy.splice(i,1);
      break;
    }
  }
  productAdded=copy;
  saveProductAdded();
  location.reload();  
}

function totalProduct(){
  for(var i=0;i<productAdded.length;i++){
    var productPrice=productAdded[i].price.slice(0,-1);
    var amount=parseFloat(productAdded[i].amount);
    total+=parseFloat(productPrice)*amount;
  }
  totalCash.innerText='tổng: '+total+' đ';
}
function updateQuantity(inputElement) {
  var newQuantity = parseFloat(inputElement.value);
  console.log("New Quantity:", newQuantity);
}