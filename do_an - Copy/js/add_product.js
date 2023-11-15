//lấy giá trị mảng productList
var productList = [];
function getProductList() {
  var productStored = localStorage.getItem("productList");
  if (productStored) {
    productList = JSON.parse(productStored);
  }
}

function productDisplay() {
  var maxIndex = 3;
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  var count4 = 0;
  for (var i = 0; i < productList.length; i++) {
    if (productList[i].type === 1 && count1 < 8) {
      //điều kiện cho việc hiển thị sản phẩm của mỗi danh sách
      if (count1 % maxIndex === 0) {
        newRow1 = list1.insertRow(-1);
        if (count1 >= maxIndex) {
          //điều kiện để thêm class cho danh sách cần hiển thị thêm
          newRow1.classList.add("alt_list_1");
        }
      }
      var newCell1 = newRow1.insertCell(count1 % maxIndex);
      newCell1.innerHTML =
        '<div class="product-container" onclick="takeInfo(this)">' +
        '<div class="product-img">' +
        '<img src="' +
        productList[i].img +
        '"alt="product-img">' +
        "</div>" +
        '<div class="product-name">' +
        productList[i].name +
        "</div>" +
        '<div class="product-price">' +
        productList[i].price +
        "đ</div>" +
        "</div>";
      count1++;
      productList1.push(productList[i]);
    }
    if (productList[i].type === 2 && count2 < 8) {
      //điều kiện cho việc hiển thị sản phẩm của mỗi danh sách
      if (count2 % maxIndex === 0) {
        newRow2 = list2.insertRow(-1);
        newRow2.classList.add("list_2_row");
        if (count2 >= maxIndex) {
          //điều kiện để thêm class cho danh sách cần hiển thị thêm
          newRow2.classList.add("alt_list_2");
        }
      }
      var newCell2 = newRow2.insertCell(count2 % maxIndex);
      newCell2.innerHTML =
        '<div class="product-container" onclick="takeInfo(this)">' +
        '<div class="product-img">' +
        '<img src="' +
        productList[i].img +
        '"alt="product-img">' +
        "</div>" +
        '<div class="product-name">' +
        productList[i].name +
        "</div>" +
        '<div class="product-price">' +
        productList[i].price +
        "đ</div>" +
        "</div>";
      count2++;
      productList2.push(productList[i]);
    }
    if (productList[i].type === 3 && count3 < 8) {
      //điều kiện cho việc hiển thị sản phẩm của mỗi danh sách
      if (count3 % maxIndex === 0) {
        newRow3 = list3.insertRow(-1);
        newRow3.classList.add("list_3_row");
        if (count3 >= maxIndex) {
          //điều kiện để thêm class cho danh sách cần hiển thị thêm
          newRow3.classList.add("alt_list_3");
        }
      }
      var newCell3 = newRow3.insertCell(count3 % maxIndex);
      newCell3.innerHTML =
        '<div class="product-container" onclick="takeInfo(this)">' +
        '<div class="product-img">' +
        '<img src="' +
        productList[i].img +
        '"alt="product-img">' +
        "</div>" +
        '<div class="product-name">' +
        productList[i].name +
        "</div>" +
        '<div class="product-price">' +
        productList[i].price +
        "đ</div>" +
        "</div>";
      count3++;
      productList3.push(productList[i]);
    }
    if (productList[i].type === 4 && count4 < 8) {
      //điều kiện cho việc hiển thị sản phẩm của mỗi danh sách
      if (count4 % maxIndex === 0) {
        //điều kiện để thêm class cho danh sách cần hiển thị thêm
        newRow4 = list4.insertRow(-1);
        if (count4 >= maxIndex) {
          newRow4.classList.add("alt_list_4");
        }
      }
      var newCell4 = newRow4.insertCell(count4 % maxIndex);
      newCell4.innerHTML =
        '<div class="product-container" onclick="takeInfo(this)">' +
        '<div class="product-img">' +
        '<img src="' +
        productList[i].img +
        '"alt="product-img">' +
        "</div>" +
        '<div class="product-name">' +
        productList[i].name +
        "</div>" +
        '<div class="product-price">' +
        productList[i].price +
        "đ</div>" +
        "</div>";
      count4++;
      productList4.push(productList[i]);
    }
  }
}
//lưu mảng sản phẩm xuống storage
function saveProductList() {
  var jsonStr = JSON.stringify(productList);
  localStorage.setItem("productList", jsonStr);
}
//lấy mảng sản phẩm từ local+add sản phẩm vào mảng
function addProduct(name, price, type, img) {
  var product = {
    name: name,
    price: price,
    type: type,
    img: img,
  };
  productList.push(product);
  productList2 = productList;
}

saveProductList();
var productStored = localStorage.getItem("productList");
if (productStored) {
  productList = JSON.parse(productStored);
}

addProduct(
  "Mô hình figure: Luffy gear 4",
  400000,
  1,
  "/do_an/asset/anh/Figure/fig820-luffy-gear-4-pop-xxl-2-400x400.jpg"
);
addProduct(
  "Mô hình figure: Thủy trụ hơi thở của nước",
  330000,
  1,
  "/do_an/asset/anh/Figure/giyuu.png"
);
addProduct(
  "Mô hình figure: Hà trụ ăn cơm",
  250000,
  1,
  "/do_an/asset/anh/Figure/hà trụ ăn cơm nắm.jpg"
);
addProduct(
  "Mô hình figure: Marco lửa xanh",
  450000,
  1,
  "/do_an/asset/anh/Figure/marco.jpg"
);
addProduct(
  "Mô hình figure: Phong trụ hơi thở của gió",
  300000,
  1,
  "/do_an/asset/anh/Figure/phong trụ.png"
);
addProduct(
  "Mini figure: Spider Man bám tường",
  230000,
  2,
  "/do_an/asset/anh/mini/Spider-Man-Bam-Tuong-2-300x300.jpg"
);
addProduct(
  "Mini figure: Deadpool cầm kiếm",
  240000,
  2,
  "/do_an/asset/anh/mini/Deadpool-cam-kiem-2-300x300.jpg"
);
addProduct(
  "Mini figure: Buu tập boxing",
  230000,
  2,
  "/do_an/asset/anh/mini/mfig002-majin-buu-tap-boxing-2.jpg"
);
addProduct(
  "Mini figure: Anya ngồi",
  100000,
  2,
  "/do_an/asset/anh/mini/mfig040-anya-forger-ngoi-2.jpg"
);
addProduct(
  "Mini figure: Buu đu xà ngang",
  200000,
  2,
  "/do_an/asset/anh/mini/mfig062-majin-buu-du-xa-ngang-2.jpg"
);
addProduct(
  "Mini figure: Nezuke cầm ống tre",
  150000,
  2,
  "/do_an/asset/anh/mini/mfig051-nezuko-kamado-cam-ong-tre-2.jpg"
);
addProduct(
  "Bộ figure: Thất vũ hải",
  350000,
  3,
  "/do_an/asset/anh/set/figs034-one-piece-10pcs-de-xanh-toc-cam-04-2.jpg"
);
addProduct(
  "Bộ figure: Uchiha Itachi",
  600000,
  3,
  "/do_an/asset/anh/set/figs114-uchiha-itachi-n-nhoc-sasuke-2-400x400.jpg"
);
addProduct(
  "Bộ figure: Genshin Impact",
  500000,
  3,
  "/do_an/asset/anh/set/figs142-genshin-6pcs-de-xam-02-1-1.jpg"
);
addProduct(
  "Bộ figure: Hội áo choàng",
  400000,
  3,
  "/do_an/asset/anh/set/figs223-naruto-6pcs-3-toc-vang-10-6.png"
);
addProduct(
  "Bộ figure: Gia đinh Forger",
  350000,
  3,
  "/do_an/asset/anh/set/figs226-spy-x-family-4pcs-1.jpg"
);
addProduct(
  "Cosplay: Găng tay Hatake Kakashi",
  160000,
  4,
  "/do_an/asset/anh/cosplay/cos004-doi-gang-tay-hatake-kakashi-2-1-400x400.jpg"
);
addProduct(
  "Cosplay: Kunai và băng trán làng Lá",
  100000,
  4,
  "/do_an/asset/anh/cosplay/cos018-bo-4-mon-3-kunai-naruto-day-trang-bang-tran-lang-la-2-400x400.jpg"
);
addProduct(
  "Cosplay: Áo Goku hình chữ Ngộ",
  200000,
  4,
  "/do_an/asset/anh/cosplay/COS091-Cosplay-Son-Goku-Chu-Ngo-4.jpg"
);
addProduct(
  "Cosplay: Áo Goku hình chữ Quy",
  200000,
  4,
  "/do_an/asset/anh/cosplay/COS092-Cosplay-Son-Goku-Chu-Quy-2.jpg"
);
