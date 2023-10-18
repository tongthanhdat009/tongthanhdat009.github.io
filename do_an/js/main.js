// menu
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.querySelector("#web_name a").style.visibility="hidden";
  setTimeout(() => {
    document.querySelector("#logo").style.paddingLeft="290px";
  }, 150);
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  setTimeout(() => {
    document.querySelector("#logo").style.paddingLeft="0px";
    document.querySelector("#web_name a").style.visibility="visible";
  }, 150);
}

//sign-in/up option
var optionBox=document.getElementById("option_box");
function closeOption(){
      optionBox.style.animation = "box-out 2s";
}
function openOption(){
      optionBox.style.animation = "box-in 2s forwards";
}
//change_banner
var bannerImg = document.querySelectorAll(".banner_img");
var currentIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
  setInterval(function() {
    bannerImg.forEach(function(element) {
      element.style.visibility = "hidden";
      element.style.animation = "none";
    });
    bannerImg[currentIndex].style.visibility = "visible";
    bannerImg[currentIndex].style.animation = "fade-in-out 4s";
    currentIndex++;
    if (currentIndex == bannerImg.length) {
      currentIndex = 0;
    }
  }, 3950);
});


// list_1
// function altlist1() {
//   var button = document.querySelector("#btn_alt_1");
//   var list = document.querySelectorAll(".alt_list_1");
//   var clickCount = 0;

//   function toggleVisibility() {
//     for (var i = 0; i < list.length; i++) {
//       list[i].style.visibility = clickCount % 2 === 0 ? "visible" : "collapse";
//     }
//     button.innerText = clickCount % 2 === 0 ? "xem ít hơn" : "xem nhiều hơn";
//     clickCount++;
//   }
//   button.onclick = toggleVisibility;
// }
// altlist1();

//list_2
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

//list_3
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
//search
function performSearch() {
  const query = document.getElementById('searchInput').value;
  
  // Thực hiện xử lý tìm kiếm ở đây

  // Chuyển người dùng đến trang kết quả và truyền tham số truy vấn (query) qua URL
  window.location.href = `admin.html?q=${encodeURIComponent(query)}`;
}
// searchpage.html
var productList =[]
function addProduct(name , price, type, img)
        {
            var product = {
                name: name,
                price: price,
                type: type,
                img: img
            };
            productList.push(product);
        }
        addProduct("Mô hình figure: Luffy gear 4",400000,1,"/do_an/asset/ảnh/Figure/fig820-luffy-gear-4-pop-xxl-2-400x400.jpg");
        addProduct("Mô hình figure: Thủy trụ hơi thở của nước",330000,1,"/do_an/asset/ảnh/Figure/giyuu.png");
        addProduct("Mô hình figure: Hà trụ ăn cơm",250000,1,"/do_an/asset/ảnh/Figure/hà trụ ăn cơm nắm.jpg");
        addProduct("Mô hình figure: Marco lửa xanh",450000,1,"/do_an/asset/ảnh/Figure/marco.jpg");
        addProduct("Mô hình figure: Phong trụ hơi thở của gió",300000,1,"/do_an/asset/ảnh/Figure/phong trụ.png");
        addProduct("Mini figure: Spider Man bám tường",230000,2,"/do_an/asset/ảnh/mini/Spider-Man-Bam-Tuong-2-300x300.jpg");
        addProduct("Mini figure: Deadpool cầm kiếm",240000,2,"/do_an/asset/ảnh/mini/Deadpool-cam-kiem-2-300x300.jpg");
        addProduct("Mini figure: Buu tập boxing",230000,2,"/do_an/asset/ảnh/mini/mfig002-majin-buu-tap-boxing-2.jpg");
        addProduct("Mini figure: Anya ngồi",100000,2,"/do_an/asset/ảnh/mini/mfig040-anya-forger-ngoi-2.jpg");
        addProduct("Mini figure: Buu đu xà ngang",200000,2,"/do_an/asset/ảnh/mini/mfig062-majin-buu-du-xa-ngang-2.jpg");
        addProduct("Mini figure: Nezuke cầm ống tre",150000,2,"/do_an/asset/ảnh/mini/mfig051-nezuko-kamado-cam-ong-tre-2.jpg");
        addProduct("Bộ figure: Thất vũ hải",350000,3,"/do_an/asset/ảnh/set/figs034-one-piece-10pcs-de-xanh-toc-cam-04-2.jpg");
        addProduct("Bộ figure: Uchiha Itachi",600000,3,"/do_an/asset/ảnh/set/figs114-uchiha-itachi-n-nhoc-sasuke-2-400x400.jpg");
        addProduct("Bộ figure: Genshin Impact",500000,3,"/do_an/asset/ảnh/set/figs142-genshin-6pcs-de-xam-02-1-1.jpg");
        addProduct("Bộ figure: Hội áo choàng",400000,3,"/do_an/asset/ảnh/set/figs223-naruto-6pcs-3-toc-vang-10-6.png");
        addProduct("Bộ figure: Gia đinh Forger",350000,3,"/do_an/asset/ảnh/set/figs226-spy-x-family-4pcs-1.jpg");
        addProduct("Cosplay: Găng tay Hatake Kakashi",160000,4,"/do_an/asset/ảnh/cosplay/cos004-doi-gang-tay-hatake-kakashi-2-1-400x400.jpg");
        addProduct("Cosplay: Kunai và băng trán làng Lá",100000,4,"/do_an/asset/ảnh/cosplay/cos018-bo-4-mon-3-kunai-naruto-day-trang-bang-tran-lang-la-2-400x400.jpg");
        addProduct("Cosplay: Áo Goku hình chữ Ngộ",200000,4,"/do_an/asset/ảnh/cosplay/COS091-Cosplay-Son-Goku-Chu-Ngo-4.jpg");
        addProduct("Cosplay: Áo Goku hình chữ Quy",200000,4,"/do_an/asset/ảnh/cosplay/COS092-Cosplay-Son-Goku-Chu-Quy-2.jpg");

window.onload=function(){
  productDisplay();
  function altlist1() {
    var list = document.querySelectorAll("#list_1 .alt_list_1");
    var button = document.querySelector("#btn_alt_1");
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
}
function productDisplay(){
  var count1=0;
  var count2=0;
  var count3=0;
  var count4=0;
  var list1=document.getElementById("list_1");
  var list2=document.getElementById("list_2");
  var list3=document.getElementById("list_3");
  var list4=document.getElementById("list_4");
  var newRow1= list1.insertRow(-1);
  var newRow2= list1.insertRow(-1);
  var newRow3= list1.insertRow(-1);
  var newRow4= list1.insertRow(-1);
  var productList1=[];
  var productList2=[];
  var productList3=[];
  var productList4=[];
  for (var i = 0; i < productList.length; i++) {
    if (productList[i].type === 1) {
      if (count1 % 3 === 0) {
        newRow1 = list1.insertRow(-1);
        if (count1 === 3) {
          newRow1.classList.add("alt_list_1");
        }
      }
      var newCell1 = newRow1.insertCell(count1 % 3);
      newCell1.innerHTML = '<div class="product-container">'+
      '<div class="product-img">'+
      '<img src="'+productList[i].img+'"alt="product-img">'
      +'</div>'+
      '<div class="product-name">'+productList[i].name+'</div>'+
      '<div class="product-price">'+productList[i].price+'</div>'
      +'</div>';
      count1++;
      productList1.push(productList[i]);
    }
    if (productList[i].type === 2) {
      if (count2 % 4 === 0) {
        newRow2 = list2.insertRow(-1);
        if (count2 === 4) {
          newRow2.classList.add("alt_list_2");
        }
      }
      var newCell2 = newRow2.insertCell(count2 % 4);
      newCell2.innerHTML = '<div class="product-container">'+
      '<div class="product-img">'+
      '<img src="'+productList[i].img+'"alt="product-img">'
      +'</div>'+
      '<div class="product-name">'+productList[i].name+'</div>'+
      '<div class="product-price">'+productList[i].price+'</div>'
      +'</div>';
      count2++;
      productList2.push(productList[i]);
    }
    if (productList[i].type === 3) {
      if (count3 % 4 === 0) {
        newRow3 = list3.insertRow(-1);
        if (count3 === 4) {
          newRow3.classList.add("alt_list_3");
        }
      }
      var newCell3 = newRow3.insertCell(count3 % 4);
      newCell3.innerHTML = '<div class="product-container">'+
      '<div class="product-img">'+
      '<img src="'+productList[i].img+'"alt="product-img">'
      +'</div>'+
      '<div class="product-name">'+productList[i].name+'</div>'+
      '<div class="product-price">'+productList[i].price+'</div>'
      +'</div>';
      count3++;
      productList3.push(productList[i]);
    }
    if (productList[i].type === 4) {
      if (count4 % 4 === 0) {
        newRow4 = list4.insertRow(-1);
        if (count4 === 4) {
          newRow4.classList.add("alt_list_4");
        }
      }
      var newCell4 = newRow4.insertCell(count4 % 4);
      newCell4.innerHTML = '<div class="product-container">'+
      '<div class="product-img">'+
      '<img src="'+productList[i].img+'"alt="product-img">'
      +'</div>'+
      '<div class="product-name">'+productList[i].name+'</div>'+
      '<div class="product-price">'+productList[i].price+'</div>'
      +'</div>';
      count4++;
      productList4.push(productList[i]);
    }
  }
}




