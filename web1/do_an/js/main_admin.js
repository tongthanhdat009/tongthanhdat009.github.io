// //admin_box
// var adminBox=document.getElementById("admin");//lấy id bảng quản lý sản phẩm
// function openAdmintb(){ //mở bảng admin
//       adminBox.style.animation = "admin_in 2s forwards";
// }
// function closeAdmintb(){ //đóng bảng admin
//       adminBox.style.animation = "admin_out 2s";
// }
// //giao diện + hiên thị sản phẩm bảng quản lý sản phẩm
// function adminDisplay(){
//   var adminList = document.querySelector("#admin_tb table");
//   for (var i = 0; i < productList.length; i++) {
//     var adminRow = adminList.insertRow(-1); //thêm dòng vào bảng admin
//     var deleteIcon, adminPrice, adminType, adminName, adminProduct;
    
//     deleteIcon=adminRow.insertCell(0);
//     deleteIcon.innerHTML= '<div class="delete_icon" onclick="deleteProduct(this)"><img src="/do_an/asset/delete.png" alt="delete_icon"></div>';
//     adminPrice=adminRow.insertCell(0);
//     adminPrice.innerHTML= '<div class="product-price">'+productList[i].price+'đ</div>';
    
//     adminType=adminRow.insertCell(0);
//     adminType.innerHTML= '<div class="product-type">'+productList[i].type+'</div>';
      
//       adminName=adminRow.insertCell(0);
//       adminName.innerHTML= '<div class="product-name">'+productList[i].name+'</div>';
      
//       adminProduct=adminRow.insertCell(0);
//       adminProduct.innerHTML= '<div class="product-img">'+
//       '<img src="'+productList[i].img+'"alt="product-img">'
//       +'</div>';
//     }
//   }
// //xóa sản phẩm
// function deleteProduct(button) {
//   var row = button.parentNode.parentNode;//lấy chỉ số hàng trong bảng quản lý
//   var table = row.parentNode;//lấy hàng từ bảng quản lý
//   var cell =row.cells;//lấy ô từ hàng trong bảng quản lý
//   table.deleteRow(row.rowIndex);//xóa hàng trong bảng quản lý
//   var copy=productList;
//   for(var i=0;i<productList.length;i++){
//     if(cell[1].textContent===copy[i].name){
//       copy.splice(i,1);
//     }
//   }
//   var list_1_tr = document.querySelectorAll("#list_1 tr");//lấy ra hàng trong danh sách 1
//   var list_2_tr = document.querySelectorAll("#list_2 tr");//lấy ra hàng trong danh sách 2
//   var list_3_tr = document.querySelectorAll("#list_3 tr");//lấy ra hàng trong danh sách 3
//   var list_4_tr = document.querySelectorAll("#list_4 tr");//lấy ra hàng trong danh sách 4
//   console.log(list_1_tr);
//   for(var i=0;i<list_1_tr.length;i++)
//     list_1_tr[i].remove();
//   for(var i=0;i<list_2_tr.length;i++)
//     list_2_tr[i].remove();
//   for(var i=0;i<list_3_tr.length;i++)
//     list_3_tr[i].remove();
//   for(var i=0;i<list_4_tr.length;i++)
//     list_4_tr[i].remove();
//   productList=copy;
//   productDisplay();
// //chức năng nút hiển thị thêm sản phẩm
//   var list_1_td= document.querySelectorAll("#list_1 tr td");
//   var list_2_td= document.querySelectorAll("#list_1 tr td");
//   var list_3_td= document.querySelectorAll("#list_1 tr td");
//   var list_4_td= document.querySelectorAll("#list_1 tr td");
//   if(list_1_td.length<4){
//     document.getElementById("btn_alt_1").style.display="none";
//   }
//   if(list_2_td.length<4){
//     document.getElementById("btn_alt_2").style.display="none";
//   }
//   if(list_3_td.length<4){
//     document.getElementById("btn_alt_3").style.display="none";
//   }
//   if(list_4_td.length<4){
//     document.getElementById("btn_alt_4").style.display="none";
//   }
// }
// // thêm sản phẩm
// var addBox = document.querySelector("#add_product_tb");
// function openAddBox(){
//   addBox.style.animation="add_box_in 2s forwards";
// }
// function closeAddBox(){
//   addBox.style.animation="add_box_out 2s";
// }
// document.getElementById('add_form').addEventListener('submit', function (event) {
//   // Ngăn chặn hành vi mặc định của submit để tránh tải lại trang
//   event.preventDefault();

//   // Lấy giá trị của trường input từ biểu mẫu
//   var nameValue = document.getElementById('add_name').value;
//   var typeValue = document.getElementById('add_type').value;
//   var priceValue = document.getElementById('add_price').value;
//   var imgValue = document.getElementById('add_img').value;
//   imgValue = imgValue.replace("C:\\fakepath\\", "/do_an/asset/ảnh/add/");
//   // addProduct(nameValue,priceValue,typeValue,imgValue);
//   // Xử lý dữ liệu hoặc hiển thị nó ở đây
//   console.log(imgValue);
// });
