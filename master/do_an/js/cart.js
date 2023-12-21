var total = 0;
var table = document.querySelector("#cart_container table");
var totalCash = document.querySelector("#total p");
let orderList =
  localStorage.getItem("orderList") != null
    ? JSON.parse(localStorage.getItem("orderList"))
    : [];
var productAdded = [];

//phương thức thêm sản phẩm vào giỏ hàng
function cartAdd(name, price, amount, img) {
  var product = {
    name: name,
    price: price,
    amount: amount,
    img: img,
    status: "chưa xử lý"
  };

  if (!productAdded) productAdded = [product];
  else if ((res = productAdded.find((item) => item.name == product.name))) { //xét theo tên sản phẩm nếu trùng thị tăng thêm số lượng
    res.amount += parseFloat(amount);
  } else {
    productAdded.push(product);
  }
  saveProductAdded();
}

//lưu mảng productAdded vào local storage
function saveProductAdded() {
  var jsonStr = JSON.stringify(productAdded);
  localStorage.setItem("productAdded", jsonStr);
}

//lấy giá trị mảng productAdded từ storage
var storedData = localStorage.getItem("productAdded");
if (storedData) {
  productAdded = JSON.parse(storedData);
}

// cập nhật giá trị tiền + sản phẩm
function updateTotal() {
  table.innerHTML = "";
  cartDisplay(); //hiển thị sản phẩm
  totalProduct(); //hiển thị tổng tiền
}

//xóa tất cả sản phẩm trong giỏ hàng
function deleteAll() {
  productAdded = [];
  if (localStorage.getItem("productAdded") !== null) {
    localStorage.removeItem("productAdded");
  }
  updateTotal();
  saveProductAdded();
}

//phương thức cần chạy sau khi tải trang
document.addEventListener("DOMContentLoaded", function () {
  updateTotal();
});

//phương thức hiển thị sản phẩm
function cartDisplay() {
  if (productAdded.length === 0) {
    var cart = table.insertRow(-1);
    var a = cart.insertCell(0);
    a.innerHTML =
      '<p style="font-size:25px"><strong>hiện đang không có sản phẩm nào</strong></p>';
    a.colSpan = "5";
    return;
  }
  for (var i = 0; i < productAdded.length; i++) {
    var cartRow = table.insertRow(-1); //thêm dòng vào bảng cart
    var deleteIcon, cartPrice, cartName, cartAmount, cartProduct, billStatus;
    deleteIcon = cartRow.insertCell(0);
    deleteIcon.innerHTML =
      '<div class="delete_icon" onclick="deleteProduct(this)"><img src="../asset/icon/delete.png" alt="delete_icon"></div>';
    cartAmount = cartRow.insertCell(0);
    cartAmount.innerHTML =
      '<div class="product-amount">' +
      '<div class="sub-cart">' +
      '<button onclick="decrement(this)">-</button>' +
      "</div>" +
      '<div class="amount">' +
      '<input class="quantity-cart" disabled type="text" value="' +
      productAdded[i].amount +
      '" name="amount" onchange="updateQuantity(this)">' +
      "</div>" +
      '<div class="add-cart">' +
      '<button onclick="increment(this)">+</button>' +
      "</div>" +
      "</div>";
    cartPrice = cartRow.insertCell(0);
    cartPrice.innerHTML =
      '<div class="product-price">' + productAdded[i].price + "</div>";

    cartName = cartRow.insertCell(0);
    cartName.innerHTML =
      '<div class="product-name">' + productAdded[i].name + "</div>";

    cartProduct = cartRow.insertCell(0);
    cartProduct.innerHTML =
      '<div class="product-img">' +
      '<img src="' +
      productAdded[i].img +
      '"alt="product-img">' +
      "</div>";
  }
}

var listTKSP = JSON.parse(localStorage.getItem("listTKSP"));
if(!listTKSP) listTKSP = [];
//thanh toán
function payAll() {
  for(var i = 0;i < productAdded.length;i++)
  {
    var a = {};
    var currentDate = new Date();
    a.name = productAdded[i].name;
    a.amount = productAdded[i].amount;
    a.date = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();
    listTKSP.push(a);
  }
  console.log(listTKSP);
  localStorage.setItem("listTKSP",JSON.stringify(listTKSP));
  var currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!productAdded.length) {
    alert("Bạn chưa mua gì cả :(");
    return;
  }
  if (!confirm("Bạn có chắc chắn muốn mua hàng?")) return;
  
  let madon =
    "WB" +
    new Date().getDate() +
    "-" +
    new Date().getMonth() +
    (parseInt(new Date().getTime()) % 1e8);
  let khachhang = currentUser.userName;
  let sp = "";
  productAdded.forEach((item) => {
    sp += item.name + "[" + item.amount + "]</br>";
  });
  let date = new Date().toLocaleDateString();
  let order = {
    userAccount: currentUser.accountName,//đã thêm chỗ này
    maDon: madon,
    khachHang: khachhang,
    sanPham: sp,
    tongTien: total,
    ngayLap: date,
    trangThai: "waiting",
  };
  saveProductAdded();
  productAdded.length = 0;
  deleteAll();
  saveProductAdded();
  orderList.push(order);
  localStorage.setItem("orderList", JSON.stringify(orderList));
}

// phương thức xóa sản phẩm
function deleteProduct(button) {
  var row = button.parentNode.parentNode; //lấy chỉ số hàng trong bảng quản lý
  var table = row.parentNode; //lấy hàng từ bảng quản lý
  var cell = row.cells; //lấy ô từ hàng trong bảng quản lý
  table.deleteRow(row.rowIndex); //xóa hàng trong bảng quản lý
  var copy = productAdded;
  for (var i = 0; i < productAdded.length; i++) {
    if (cell[1].textContent === copy[i].name) {
      copy.splice(i, 1);
      break;
    }
  }
  productAdded = copy;
  saveProductAdded();
  updateTotal();
}

//phương thức tổng số tiền
function totalProduct() {
  total = 0;
  for (var i = 0; i < productAdded.length; i++) {
    var productPrice = productAdded[i].price.slice(0, -1);
    var amount = parseFloat(productAdded[i].amount);
    total += parseFloat(productPrice) * amount;
  }
  totalCash.innerText = "tổng: " + total + " đ";
}

//phương thức tăng số lượng sản phẩm
function increment(e) {
  var amount = e.parentNode.parentNode.querySelector(".amount input");
  var a = document.querySelectorAll(".product-amount .amount input");
  var count = 1;
  var quantity = parseFloat(amount.value);
  quantity += count;
  amount.value = quantity.toString();
  updateQuantity(a);
}

//phương thức giảm số lượng sản phẩm
function decrement(e) {
  var amount = e.parentNode.parentNode.querySelector(".amount input");
  var a = document.querySelectorAll(".product-amount .amount input");
  var count = 1;
  var quantity = parseFloat(amount.value);
  quantity -= count;
  if (quantity <= 0) quantity = 1;
  amount.value = quantity.toString();
  updateQuantity(a);
}
//cập nhật số lượng sản phẩm
function updateQuantity(a) {
  for (var i = 0; i < productAdded.length; i++) {
    productAdded[i].amount = parseFloat(a[i].value);
  }
  saveProductAdded();
  totalProduct();
}

