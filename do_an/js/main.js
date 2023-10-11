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


//list_1
function altlist1() {
  var list = document.querySelectorAll("tr.alt_list_1");
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

//list_2
function altlist2() {
  var list = document.querySelectorAll("tr.alt_list_2");
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
  var list = document.querySelectorAll("tr.alt_list_3");
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


