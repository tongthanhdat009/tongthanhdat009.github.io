// menu: giao diện điều hướng
function openNav() {
  document.getElementById("mySidenav").style.width = "300px"; //lấy id thanh điều hướng
  document.querySelector("#web_name a").style.visibility = "hidden"; //điều chỉnh logo + tên web
  setTimeout(() => {
    document.querySelector("#logo").style.visibility = "hidden";
  }, 150);
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  setTimeout(() => {
    document.querySelector("#web_name a").style.visibility = "visible";
    document.querySelector("#logo").style.visibility = "visible";
  }, 150);
}

//change_banner
var bannerImg = document.querySelectorAll(".banner_img"); //lấy class hình ảnh của banner
var currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  setInterval(function () {
    bannerImg.forEach(function (element) {
      element.style.visibility = "hidden";
      element.style.animation = "none";
    });
    bannerImg[currentIndex].style.visibility = "visible";
    currentIndex++;
    if (currentIndex === bannerImg.length) {
      currentIndex = 0;
    }
  }, 4000);
});

function altlist(i) {
  var list = document.querySelectorAll("#list_" + i + " .alt_list_" + i); //lấy class của danh sách hiển thị xêm
  var button = document.querySelector("#btn_alt_" + i); //lấy kết quả trả về của nút xem thêm
  var clickCount = 0; //đếm số lần click vào nút

  function toggleVisibility() {
    for (var i = 0; i < list.length; i++) {
      list[i].style.visibility = clickCount % 2 === 0 ? "visible" : "collapse"; //xét thuộc tính để hiển thị thêm hoặc bớt
    }
    button.innerText = clickCount % 2 === 0 ? "xem ít hơn" : "xem nhiều hơn";
    clickCount++; //đếm số lần click vào nút
  }
  button.onclick = toggleVisibility;
}
// hiển thị sản phẩm
window.onload = function () {
  //tải sản phẩm khi vừa mở trang
  productDisplay2();
  //chức năng hiển thị thêm sản phẩm

  for (let i = 1; i <= 4; ++i) {
    altlist(i);
  }
  cartDisplay();
};

//tìm kiếm sản phẩm
var inputSearch = document.querySelector("#search_input");
inputSearch.addEventListener("submit", function (event) {
  // event.preventDefault();
  var nameInput = document.querySelector("#name_input").value;
  var userInput = {
    name: nameInput,
    sign: true,
  };
  var jsonStr = JSON.stringify(userInput);
  console.log(userInput);
  localStorage.setItem("mainSearch", jsonStr);
});
