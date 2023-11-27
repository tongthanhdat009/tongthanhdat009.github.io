// menu: giao diện điều hướng
function openNav() {
  document.getElementById("mySidenav").style.width = "300px"; //thay đổi chiều rộng thanh điều hướng để có hiệu ứng trượt ra
  setTimeout(() => {
    document.querySelector("#logo").style.visibility = "hidden"; //ẩn logo sau khi mở thanh điều hướng
  }, 100);
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";//thay đổi chiều rộng thanh điều hướng để có hiệu ứng thu lại
  setTimeout(() => {
    document.querySelector("#logo").style.visibility = "visible"; //hiển thị logo sau khi đóng thanh điều hướng
  }, 100);
}

//change_banner
var bannerImg = document.querySelectorAll(".banner_img"); //lấy class hình ảnh của banner
var currentIndex = 0; //biến đếm

document.addEventListener("DOMContentLoaded", function () { //tải nội dung khi mở trang
  setInterval(function () { // để vòng lặp cho hiệu ứng biến mất của banner
    bannerImg.forEach(function (element) {
      element.style.visibility = "hidden"; // ẩn banner sau khi xong hiệu ứng
      element.style.animation = "none"; // đặt giá trị mặt định cho animation để có thể chuyển qua ảnh banner khác
    });

    bannerImg[currentIndex].style.visibility = "visible";//hiển thị banner 
    currentIndex++;// tăng biến đếm để có được ảnh banner tiếp theo
    
    if (currentIndex === bannerImg.length) { //nếu biến đếm bằng với độ dài của mảng bannerImg thì cho currentIndex bằng 0 để có thể lập lại hiệu ứng
      currentIndex = 0;
    }
  }, 4000);
});

//hiển thị thêm sản phẩm trong 1 bảng
function altlist(i) { 
  var list = document.querySelectorAll("#list_" + i + " .alt_list_" + i); //lấy class của danh sách hiển thị xêm
  var button = document.querySelector("#btn_alt_" + i); //lấy kết quả trả về của nút xem thêm
  var clickCount = 0; //đếm số lần click vào nút

  function toggleVisibility() { //hàm cho xét css để hiển thị
    for (var i = 0; i < list.length; i++) {
      list[i].style.visibility = clickCount % 2 === 0 ? "visible" : "collapse"; //hiển thị thêm sau khi số lần click chia hết cho 2
    }
    button.innerText = clickCount % 2 === 0 ? "Xem ít hơn" : "Xem nhiều hơn"; //xét thuộc tính để hiển thị thêm hoặc bớt
    clickCount++; //đếm số lần click vào nút
  }

  button.onclick = toggleVisibility; //thêm sự kiện onclick cho nút
}

// hiển thị sản phẩm
window.onload = function () {
  //tải sản phẩm khi vừa mở trang
  productDisplay2();

  //chức năng hiển thị thêm sản phẩm
  for (let i = 1; i <= 4; ++i) {
    altlist(i);
  }

  //hiển thị giỏ hàng khi bấm vào nút giỏ hàng
  cartDisplay();
};

//tìm kiếm sản phẩm
var inputSearch = document.querySelector("#search_input"); //truy xuất thanh tìm kiếm bằng id
inputSearch.addEventListener("submit", function (event) {//thêm event submit cho thanh tìm kiếm
  // event.preventDefault();
  
  var nameInput = document.querySelector("#name_input").value;//giá trị đã nhập vào thanh tìm kiếm
  var userInput = {
    name: nameInput, //tên cần tìm
    sign: true, //thông báo cho trang order
  };

  var jsonStr = JSON.stringify(userInput);
  nameInput.value ="";
  localStorage.setItem("mainSearch", jsonStr);//lưu vào storage để cho trang order lấy ra dùng
});
