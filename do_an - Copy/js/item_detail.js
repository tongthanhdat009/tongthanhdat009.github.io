function showDetail(item) {
  document.documentElement.style.overflow = "hidden";
  var infor = item.childNodes; // thông tin sản phẩm
  var img = item.querySelector("img").src; // hình ảnh sản phẩm
  var name = infor[1].textContent; // tên sản phẩm
  var price = infor[2].textContent; // giá sản phẩm
  for (var i = 0; i < productList.length; i++) {
    if (name === productList[i].name) {
      //phân loại sản phẩm
      var type;
      switch (productList[i].type) {
        case 1:
          type = "Mô hình lẻ";
          break;
        case 2:
          type = "Mô hình mini";
          break;
        case 3:
          type = "Mô hình theo bộ";
          break;
        case 4:
          type = "Cosplay";
          break;
      }
      let s =
        '<div class="container1">' +
        '<div class="closebutton">' +
        '<div class="close-button">x</div>' +
        "</div>" +
        '<div class="wrapper-flex">' +
        '<div class="left-content">' +
        '<img  src="' +
        productList[i].img +
        '" alt="item detail"+ width="900px" height="700px" id="main-img" />' +
        '<div class="optionMenu">' +
        '<div class="imgOption">' +
        '<img src="' +
        productList[i].img +
        '" alt="opt" class="imgOpt" />' +
        "</div>" +
        '<div class="imgOption">' +
        '<img src="' +
        productList[i].img2 +
        '" alt="opt" class="imgOpt" />' +
        "</div>" +
        '<div class="imgOption">' +
        '<img src="' +
        productList[i].img3 +
        '" alt="opt" class="imgOpt" />' +
        "</div>" +
        '<div class="imgOption">' +
        '<img src="' +
        productList[i].img4 +
        '" alt="opt" class="imgOpt" />' +
        "</div>" +
        "</div>" +
        "</div>" +
        '<div class="right-content">' +
        '<h3 class="title">' +
        name +
        "</h3>" +
        '<div class="description">' +
        '<span class="header">Thể loại:</span>' +
        '<span class="text">' +
        type +
        "</span>" +
        "</div>" +
        '<div class="price">' +
        '<span class="header">Giá:</span>' +
        '<span class="value">' +
        price +
        "</span>" +
        "</div>" +
        '<div class="amount">' +
        '<p class="header">Số Lượng:</p>' +
        '<div class="decrease">-</div>' +
        '<input type="number" class="quantity" value="1" min="1" max="999"/>' +
        '<div class="increase">+</div>' +
        "</div>" +
        '<div class="cart-button">Them vao gio hang</div>' +
        "</div>" +
        "</div>" +
        "</div>";
      let content = document.getElementsByClassName("itemdetail")[0];
      content.innerHTML = s;
      content.style.zIndex = 99;
      addCloseBehavior(content);
      addImgSelectBehavior();
      addAmountChangeBehavior();
      addCartButtonBehavior(name, price, img, content);
    }
  }
}

function addCloseBehavior(content) {
  document.documentElement.style.overflow = "none";
  let close = document.getElementsByClassName("close-button")[0];
  close.addEventListener("click", (e) => {
    e.preventDefault();
    content.children[0].classList.add("fade");
    document.documentElement.style.overflow = null;
    setTimeout(() => {
      content.innerHTML = "";
      content.style.zIndex = null;
    }, 490);
  });
}

function addImgSelectBehavior() {
  let imgOpt = document.getElementsByClassName("imgOpt");
  let imgSelect = document.getElementsByClassName("imgOption");
  imgSelect[0].classList.add("imgOptionSelect");
  for (let i = 0; i < imgOpt.length; ++i) {
    imgOpt[i].addEventListener("click", () => {
      let src = imgOpt[i].src;
      for (let j = 0; j < imgSelect.length; ++j) {
        imgSelect[j].classList.remove("imgOptionSelect");
      }
      imgSelect[i].classList.add("imgOptionSelect");
      document.getElementById("main-img").src = src;
    });
  }
}

function addAmountChangeBehavior() {
  let quantity = document.getElementsByClassName("quantity")[0];
  let increase = document.getElementsByClassName("increase")[0];
  let decrease = document.getElementsByClassName("decrease")[0];

  increase.addEventListener("click", (e) => {
    quantity.value = Math.min(parseInt(quantity.value) + 1, 999);
  });
  decrease.addEventListener("click", (e) => {
    quantity.value = Math.max(parseInt(quantity.value) - 1, 1);
  });

  quantity.addEventListener("change", () => {
    let val = parseInt(quantity.value);
    quantity.value = Math.max(1, Math.min(999, val));
  });
}

function addCartButtonBehavior(name, price, img, content) {
  let quantity = document.getElementsByClassName("quantity")[0];
  let cartbtn = document.getElementsByClassName("cart-button")[0];
  cartbtn.addEventListener("mousedown", (e) => {
    e.preventDefault();
    cartbtn.style.filter = "brightness(0.5)";
    content.children[0].classList.add("fade");
    document.documentElement.style.overflow = null;
    setTimeout(() => {
      content.innerHTML = "";
      content.style.zIndex = null;
    }, 490);
    cartAdd(name, price, parseInt(quantity.value), img); //thêm vào mảng của giỏ hàng
  });
  document.documentElement.style.overflow = "none";
}
