//banner
// menu
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.querySelector("h1").style.paddingLeft="300px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector("h1").style.paddingLeft="0";
}
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
