var element = document.getElementById("button");

element.addEventListener("click", () => {
  let content = document.getElementById("container");
  content.classList.toggle("toggle-hide");
});

let itemsList = [];
let cart = [];
if (localStorage.getItem("cart"))
  cart = JSON.parse(localStorage.getItem("cart"));

window.onload = function () {
  console.log("hello");
  let buttonCount = taoSP();
  taoNut(buttonCount);
  hienthi(0);
};

function taoSP() {
  itemsList.push({
    id: 101,
    name: "Bryan Wright",
    price: "2265$",
    img: "./img/temp (1).jpg",
  });
  itemsList.push({
    id: 102,
    name: "Lora Joseph",
    price: "2268$",
    img: "./img/temp (1).png",
  });
  itemsList.push({
    id: 103,
    name: "Kate Boyd",
    price: "2265$",
    img: "./img/temp (2).jpg",
  });
  itemsList.push({
    id: 104,
    name: "Mary Patterson ",
    price: "2268$",
    img: "./img/temp (2).png",
  });
  itemsList.push({
    id: 105,
    name: "Nathaniel Maldonado  ",
    price: "2265$",
    img: "./img/temp (3).jpg",
  });
  itemsList.push({
    id: 106,
    name: "Elmer Garner ",
    price: "2268$",
    img: "./img/temp (3).png",
  });
  itemsList.push({
    id: 107,
    name: "Tom Caldwell  ",
    price: "2265$",
    img: "./img/temp (4).jpg",
  });
  itemsList.push({
    id: 108,
    name: "Mollie Aguilar ",
    price: "2268$",
    img: "./img/temp (4).png",
  });
  itemsList.push({
    id: 109,
    name: "Hilda Brewer ",
    price: "2268$",
    img: "./img/temp (5).jpg",
  });
  itemsList.push({
    id: 110,
    name: "Mayme Vaughn ",
    price: "2268$",
    img: "./img/temp (6).jpg",
  });
  itemsList.push({
    id: 111,
    name: "Sadie Newman ",
    price: "2268$",
    img: "./img/temp (15).jpg",
  });
  itemsList.push({
    id: 112,
    name: "Rose Dixon ",
    price: "2268$",
    img: "./img/temp (16).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Dollie Greene ",
    price: "2268$",
    img: "./img/temp (2).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Anthony Fletcher ",
    price: "2268$",
    img: "./img/temp (2).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Nathaniel Clayton ",
    price: "2268$",
    img: "./img/temp (3).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Lily Thornton ",
    price: "2268$",
    img: "./img/temp (22).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Belle Armstrong ",
    price: "2268$",
    img: "./img/temp (25).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Mike Kelly ",
    price: "2268$",
    img: "./img/temp (6).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Ray Barnett ",
    price: "2268$",
    img: "./img/temp (10).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Francis Dawson ",
    price: "2268$",
    img: "./img/temp (20).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Matthew Houston ",
    price: "2268$",
    img: "./img/temp (5).jpg",
  });
  itemsList.push({
    id: 113,
    name: "David Hines ",
    price: "2268$",
    img: "./img/temp (17).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Hunter Briggs ",
    price: "2268$",
    img: "./img/temp (12).jpg",
  });
  itemsList.push({
    id: 113,
    name: "William Pope ",
    price: "2268$",
    img: "./img/temp (9).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Ian Matthews ",
    price: "2268$",
    img: "./img/temp (4).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Zachary Garcia ",
    price: "2268$",
    img: "./img/temp (6).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Susie Obrien ",
    price: "2268$",
    img: "./img/temp (1).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Allen Mendez ",
    price: "2268$",
    img: "./img/temp (24).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Adam Ray ",
    price: "2268$",
    img: "./img/temp (21).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Louis Dunn ",
    price: "2268$",
    img: "./img/temp (7).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Wayne Reyes ",
    price: "2268$",
    img: "./img/temp (12).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Rosalie Hale ",
    price: "2268$",
    img: "./img/temp (17).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Isabella Bowen ",
    price: "2268$",
    img: "./img/temp (14).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Alvin Underwood ",
    price: "2268$",
    img: "./img/temp (12).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Dollie Gardner ",
    price: "2268$",
    img: "./img/temp (12).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Nellie HigginsDanny Goodman ",
    price: "2268$",
    img: "./img/temp (2).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Albert Hunter ",
    price: "2268$",
    img: "./img/temp (11).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Tom Reyes ",
    price: "2268$",
    img: "./img/temp (20).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Estelle Castillo ",
    price: "2268$",
    img: "./img/temp (14).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Stella Anderson ",
    price: "2268$",
    img: "./img/temp (11).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Claudia Figueroa ",
    price: "2268$",
    img: "./img/temp (2).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Clarence Bowen ",
    price: "2268$",
    img: "./img/temp (20).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Vincent Larson ",
    price: "2268$",
    img: "./img/temp (15).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Virgie Jacobs ",
    price: "2268$",
    img: "./img/temp (5).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Edna Newton ",
    price: "2268$",
    img: "./img/temp (26).jpg",
  });
  itemsList.push({
    id: 113,
    name: "Jacob French ",
    price: "2268$",
    img: "./img/temp (21).jpg",
  });
  let buttonCount = itemsList.length / 9 + (itemsList % 9 != 0 ? 1 : 0);
  return buttonCount;
}

function taoNut(buttonCount) {
  let s = "";
  for (let i = 1; i <= buttonCount; ++i) {
    s += '<div class="buttonPage">' + i + "</div>";
  }
  document.getElementsByClassName("listNav")[0].innerHTML = s;
  let button = document.getElementsByClassName("buttonPage");
  button[0].classList.add("selected");
  for (let i = 0; i < button.length; ++i) {
    button[i].addEventListener("click", (e) => {
      e.preventDefault();
      let page = button[i].innerHTML;
      for (let i = 0; i < button.length; ++i) {
        button[i].classList.remove("selected");
        if (i == parseInt(page) - 1) {
          button[i].classList.add("selected");
        }
      }
      hienthi(parseInt(page) - 1);
    });
  }
}

function hienthi(page) {
  let j = page * 9;
  let s = "";
  for (let i = 0; i < 9 && j < itemsList.length; ++i) {
    s +=
      '<div class = "item item-grid">' +
      '<img src = "' +
      itemsList[j].img +
      '" alt="img" id="img">' +
      '<div class= "text" id = "name">' +
      itemsList[j].name +
      "</div>" +
      '<div class = "text" id="price">' +
      itemsList[j].price +
      "</div>" +
      "</div>";
    j++;
  }
  document.getElementsByClassName("list")[0].innerHTML = s;
  let item = document.getElementsByClassName("item");
  for (let i = 0; i < item.length; ++i) {
    item[i].addEventListener("click", (e) => {
      e.preventDefault();
      showDetail(itemsList[page * 9 + i]);
      document.documentElement.style.overflow = "hidden";
    });
  }
}

function showDetail(item) {
  let s =
    '<div class="container1">' +
    '<div class="closebutton">' +
    '<div class="close-button">x</div>' +
    "</div>" +
    '<div class="wrapper-flex">' +
    '<div class="left-content">' +
    '<img  src="' +
    item.img +
    '" alt="item detail"+ width="900px" height="700px" id="main-img" />' +
    '<div class="optionMenu">' +
    '<div class="imgOption">' +
    '<img src="' +
    item.img +
    '" alt="opt" class="imgOpt" />' +
    "</div>" +
    '<div class="imgOption">' +
    '<img src="./img/temp2.jpg" alt="opt" class="imgOpt" />' +
    "</div>" +
    '<div class="imgOption">' +
    '<img src="./img/temp2.jpg" alt="opt" class="imgOpt" />' +
    "</div>" +
    '<div class="imgOption">' +
    '<img src="./img/temp2.jpg" alt="opt" class="imgOpt" />' +
    "</div>" +
    "</div>" +
    "</div>" +
    '<div class="right-content">' +
    '<h3 class="title">' +
    item.name +
    "</h3>" +
    '<div class="description">' +
    '<span class="header">Thể loại:</span>' +
    '<span class="text">wibu hen tai suc vart</span>' +
    "</div>" +
    '<div class="price">' +
    '<span class="header">Giá:</span>' +
    '<span class="value">' +
    item.price +
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

  let cartbtn = document.getElementsByClassName("cart-button")[0];
  cartbtn.addEventListener("mousedown", (e) => {
    e.preventDefault();
    cartbtn.style.filter = "brightness(0.5)";
  });

  cartbtn.addEventListener("click", (e) => {
    e.preventDefault();
    if ((res = cart.find((i) => item.id == i.id))) {
      res.quantity += parseInt(quantity.value);
      console.log(cart);
    } else {
      cart.push({
        id: item.id,
        name: item.name,
        img: item.img,
        quantity: parseInt(quantity.value),
      });
      console.log(cart);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    content.children[0].classList.add("fade");
    document.documentElement.style.overflow = null;
    setTimeout(() => {
      content.innerHTML = "";
      content.style.zIndex = null;
    }, 490);
  });
}
