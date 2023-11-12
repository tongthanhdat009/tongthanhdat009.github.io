//truy xuất tên thuộc tính toàn cục
var productList =[];//mảng chứa sản phẩm tất cả sản phẩm
var list1=document.getElementById("list_1");//lấy id danh sách chứa sản phẩm
var list2=document.getElementById("list_2");//lấy id danh sách chứa sản phẩm
var list3=document.getElementById("list_3");//lấy id danh sách chứa sản phẩm
var list4=document.getElementById("list_4");//lấy id danh sách chứa sản phẩm
var productList1=[];  
var productList2=[];
var productList3=[];
var productList4=[];

// menu: giao diện điều hướng
function openNav() {
  document.getElementById("mySidenav").style.width = "300px"; //lấy id thanh điều hướng
  document.querySelector("#web_name a").style.visibility="hidden";//điều chỉnh logo + tên web
  setTimeout(() => {
    document.querySelector("#logo").style.visibility="hidden";
  }, 150);

}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  setTimeout(() => {
    document.querySelector("#web_name a").style.visibility="visible";
    document.querySelector("#logo").style.visibility="visible";
  }, 150);
}

//Cart: lựa chọn đăng nhập đăng ký hoặc đăng nhập để sử dụng giỏ hàng
var optionBox=document.getElementById("option_box");
function openOption(){
      optionBox.style.animation = "box-in 2s forwards";
}
function closeOption(){
      optionBox.style.animation = "box-out 2s";
}

//change_banner
var bannerImg = document.querySelectorAll(".banner_img"); //lấy class hình ảnh của banner
var currentIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
  setInterval(function() {
    bannerImg.forEach(function(element) {
      element.style.visibility = "hidden";
      element.style.animation = "none";
    });
    bannerImg[currentIndex].style.visibility = "visible";
    currentIndex++;
    if (currentIndex == bannerImg.length) {
      currentIndex = 0;
    }
  }, 4000);
});

// hiển thị sản phẩm
window.onload=function(){ //tải sản phẩm khi vừa mở trang
  productDisplay();

  //chức năng hiển thị thêm sản phẩm
  function altlist1() {
    var list = document.querySelectorAll("#list_1 .alt_list_1"); //lấy class của danh sách hiển thị xêm 
    var button = document.querySelector("#btn_alt_1");//lấy kết quả trả về của nút xem thêm
    var clickCount = 0;//đếm số lần click vào nút
  
    function toggleVisibility() {
      for (var i = 0; i < list.length; i++) {
        list[i].style.visibility = clickCount % 2 === 0 ? "visible" : "collapse";//xét thuộc tính để hiển thị thêm hoặc bớt
      }
      button.innerText = clickCount % 2 === 0 ? "xem ít hơn" : "xem nhiều hơn";
      clickCount++; //đếm số lần click vào nút
    }
    button.onclick = toggleVisibility;
  }
  altlist1();
  
  function altlist2() {
    var list = document.querySelectorAll(".alt_list_2");
    var button = document.querySelector("#btn_alt_2");
    var clickCount = 0;
  
    function toggleVisibility() {
      for (var i = 0; i < list.length; i++) {
        list[i].style.visibility = clickCount % 2 === 0 ? "visible" : "collapse";
      }
      button.innerText = clickCount % 2 === 0 ? "xem ít hơn" : "xem nhiều hơn";
      clickCount++;
    }
  
    button.onclick = toggleVisibility;
  }
  altlist2();

  function altlist3() {
    var list = document.querySelectorAll(".alt_list_3");
    var button = document.querySelector("#btn_alt_3");
    var clickCount = 0;
  
    function toggleVisibility() {
      for (var i = 0; i < list.length; i++) {
        list[i].style.visibility = clickCount % 2 === 0 ? "visible" : "collapse";
      }
      button.innerText = clickCount % 2 === 0 ? "xem ít hơn" : "xem nhiều hơn";
      clickCount++;
    }
    button.onclick = toggleVisibility;
  }
  altlist3();

  function altlist4() {
    var list = document.querySelectorAll(".alt_list_4");
    var button = document.querySelector("#btn_alt_4");
    var clickCount = 0;
  
    function toggleVisibility() {
      for (var i = 0; i < list.length; i++) {
        list[i].style.visibility = clickCount % 2 === 0 ? "visible" : "collapse";
      }
      button.innerText = clickCount % 2 === 0 ? "xem ít hơn" : "xem nhiều hơn";
      clickCount++;
    }
    button.onclick = toggleVisibility;
  }
  altlist4();
  // adminDisplay();//hiển thị sản phẩm cho bảng admin
  cartDisplay();
}

