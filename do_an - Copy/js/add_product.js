//lấy giá trị mảng productList
var productList = [];
function getProductList() {
  var productStored = localStorage.getItem("productList");
  if (productStored) {
    productList = JSON.parse(productStored);
  }
}
// localStorage.clear();
// function productDisplay() {
//   var maxIndex = 3;
//   var count1 = 0;
//   var count2 = 0;
//   var count3 = 0;
//   var count4 = 0;
//   var count = [0,0,0,0]
//   var list = [null, null, null, null];
//   for (let i = 1; i <= 4; ++i) {
//     list[i - 1] = document.getElementById("list_" + i);
//   }
//   for (var i = 0; i < productList.length; i++) {
//     let productType = parseInt(productList[i].type) - 1;
//     if (productList[i].type === 1 && count1 < 8) {
//       //điều kiện cho việc hiển thị sản phẩm của mỗi danh sách
//       if (count1 % maxIndex === 0) {
//         newRow1 = list[productType].insertRow(-1);
//         if (count1 >= maxIndex) {
//           //điều kiện để thêm class cho danh sách cần hiển thị thêm
//           newRow1.classList.add("alt_list_1");
//         }
//       }
//       var newCell1 = newRow1.insertCell(count1 % maxIndex);
//       newCell1.innerHTML =
//         '<div class="product-container" onclick="takeInfo(this)">' +
//         '<div class="product-img">' +
//         '<img src="' +
//         productList[i].img +
//         '"alt="product-img">' +
//         "</div>" +
//         '<div class="product-name">' +
//         productList[i].name +
//         "</div>" +
//         '<div class="product-price">' +
//         productList[i].price +
//         "đ</div>" +
//         "</div>";
//       count1++;
//       // productList1.push(productList[i]);
//     }
//     if (productList[i].type === 2 && count2 < 8) {
//       //điều kiện cho việc hiển thị sản phẩm của mỗi danh sách
//       if (count2 % maxIndex === 0) {
//         newRow2 = list[productType].insertRow(-1);
//         newRow2.classList.add("list_2_row");
//         if (count2 >= maxIndex) {
//           //điều kiện để thêm class cho danh sách cần hiển thị thêm
//           newRow2.classList.add("alt_list_2");
//         }
//       }
//       var newCell2 = newRow2.insertCell(count2 % maxIndex);
//       newCell2.innerHTML =
//         '<div class="product-container" onclick="takeInfo(this)">' +
//         '<div class="product-img">' +
//         '<img src="' +
//         productList[i].img +
//         '"alt="product-img">' +
//         "</div>" +
//         '<div class="product-name">' +
//         productList[i].name +
//         "</div>" +
//         '<div class="product-price">' +
//         productList[i].price +
//         "đ</div>" +
//         "</div>";
//       count2++;
//       // productList2.push(productList[i]);
//     }
//     if (productList[i].type === 3 && count3 < 8) {
//       //điều kiện cho việc hiển thị sản phẩm của mỗi danh sách
//       if (count3 % maxIndex === 0) {
//         newRow3 = list[productType].insertRow(-1);
//         newRow3.classList.add("list_3_row");
//         if (count3 >= maxIndex) {
//           //điều kiện để thêm class cho danh sách cần hiển thị thêm
//           newRow3.classList.add("alt_list_3");
//         }
//       }
//       var newCell3 = newRow3.insertCell(count3 % maxIndex);
//       newCell3.innerHTML =
//         '<div class="product-container" onclick="takeInfo(this)">' +
//         '<div class="product-img">' +
//         '<img src="' +
//         productList[i].img +
//         '"alt="product-img">' +
//         "</div>" +
//         '<div class="product-name">' +
//         productList[i].name +
//         "</div>" +
//         '<div class="product-price">' +
//         productList[i].price +
//         "đ</div>" +
//         "</div>";
//       count3++;
//       // productList3.push(productList[i]);
//     }
//     if (productList[i].type === 4 && count4 < 8) {
//       //điều kiện cho việc hiển thị sản phẩm của mỗi danh sách
//       if (count4 % maxIndex === 0) {
//         //điều kiện để thêm class cho danh sách cần hiển thị thêm
//         newRow4 = list[productType].insertRow(-1);
//         if (count4 >= maxIndex) {
//           newRow4.classList.add("alt_list_4");
//         }
//       }
//       var newCell4 = newRow4.insertCell(count4 % maxIndex);
//       newCell4.innerHTML =
//         '<div class="product-container" onclick="takeInfo(this)">' +
//         '<div class="product-img">' +
//         '<img src="' +
//         productList[i].img +
//         '"alt="product-img">' +
//         "</div>" +
//         '<div class="product-name">' +
//         productList[i].name +
//         "</div>" +
//         '<div class="product-price">' +
//         productList[i].price +
//         "đ</div>" +
//         "</div>";
//       count4++;
//       // productList4.push(productList[i]);
//     }
//   }
// }

function productDisplay2() {
  var maxIndex = 3;
  var count = [0, 0, 0, 0];
  var list = [null, null, null, null];

  for (let i = 1; i <= 4; ++i) {
    list[i - 1] = document.getElementById("list_" + i);
  }

  for (var i = 0; i < productList.length; i++) {
    let productType = parseInt(productList[i].type) - 1;
    if (count[productType] < 9) {
      //điều kiện cho việc hiển thị sản phẩm của mỗi danh sách
      if (count[productType] % maxIndex === 0) {
        newRow = list[productType].insertRow(-1);
        if (count[productType] >= maxIndex) {
          //điều kiện để thêm class cho danh sách cần hiển thị thêm
          newRow.classList.add("alt_list_" + (productType + 1)); //1-indexed
        }
      }
      var newCell = newRow.insertCell(count[productType] % maxIndex);
      newCell.innerHTML =
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
      count[productType]++;
    }
  }
}
//lưu mảng sản phẩm xuống storage
function saveProductList() {
  var jsonStr = JSON.stringify(productList);
  localStorage.setItem("productList", jsonStr);
}
//lấy mảng sản phẩm từ local+add sản phẩm vào mảng

function addProduct(name, price, type, img, img2, img3, img4, id) {
  var product = {
    name: name,
    price: price,
    type: type,
    img: img,
    img2: img2,
    img3: img3,
    img4: img4,
    id: id,
  };
  productList.push(product);
  productList2 = productList;
}
addProduct(
  "Mô hình: Super Saiya God Goku",
  400000,
  1,
  "../asset/anh/figure/1 1.jpg",
  "../asset/anh/figure/1 2.jpg",
  "../asset/anh/figure/1 3.jpg",
  "../asset/anh/figure/1 4.jpg",
  1
);
addProduct(
  "Mô hình: Titan Thiết Giáp",
  400000,
  1,
  "../asset/anh/figure/2 1.jpg",
  "../asset/anh/figure/2 2.jpg",
  "../asset/anh/figure/2 3.jpg",
  "../asset/anh/figure/2 4.jpg",
  2
);
addProduct(
  "Mô hình: Gray Fullbuster",
  400000,
  1,
  "../asset/anh/figure/3 1.jpg",
  "../asset/anh/figure/3 2.jpg",
  "../asset/anh/figure/3 3.jpg",
  "../asset/anh/figure/3 4.jpg",
  3
);
addProduct(
  "Mô hình: Satoru Gojo",
  400000,
  1,
  "../asset/anh/figure/4 1.jpg",
  "../asset/anh/figure/4 2.jpg",
  "../asset/anh/figure/4 3.jpg",
  "../asset/anh/figure/4 4.jpg",
  4
);
addProduct(
  "Mô hình: Huggy Wuggy",
  400000,
  1,
  "../asset/anh/figure/5 1.jpg",
  "../asset/anh/figure/5 2.jpg",
  "../asset/anh/figure/5 3.jpg",
  "../asset/anh/figure/5 4.jpg",
  5
);
addProduct(
  "Mô hình: Komi không thể nói",
  400000,
  1,
  "../asset/anh/figure/6 1.jpg",
  "../asset/anh/figure/6 2.jpg",
  "../asset/anh/figure/6 3.jpg",
  "../asset/anh/figure/6 4.jpg",
  6
);
addProduct(
  "Mô hình: SAO Kirito",
  400000,
  1,
  "../asset/anh/figure/7 1.jpg",
  "../asset/anh/figure/7 2.jpg",
  "../asset/anh/figure/7 3.jpg",
  "../asset/anh/figure/7 4.jpg",
  7
);
addProduct(
  "Mô hình: Cloud Strife cầm kiếm",
  400000,
  1,
  "../asset/anh/figure/8 1.jpg",
  "../asset/anh/figure/8 2.jpg",
  "../asset/anh/figure/8 3.jpg",
  "../asset/anh/figure/8 4.jpg",
  8
);
addProduct(
  "Mô hình: Thầy Aizawa chiến đấu",
  400000,
  1,
  "../asset/anh/figure/9 1.jpg",
  "../asset/anh/figure/9 2.jpg",
  "../asset/anh/figure/9 3.jpg",
  "../asset/anh/figure/9 4.jpg",
  9
);
addProduct(
  "Mô hình: Shoto ngồi",
  400000,
  1,
  "../asset/anh/figure/10 1.jpg",
  "../asset/anh/figure/10 2.jpg",
  "../asset/anh/figure/10 3.jpg",
  "../asset/anh/figure/10 4.jpg",
  10
);
addProduct(
  "Mô hình: North Star Kenshiro",
  400000,
  1,
  "../asset/anh/figure/11 1.jpg",
  "../asset/anh/figure/11 2.jpg",
  "../asset/anh/figure/11 3.jpg",
  "../asset/anh/figure/11 4.jpg",
  11
);
addProduct(
  "Mô hình: Kana Arima",
  400000,
  1,
  "../asset/anh/figure/12 1.jpg",
  "../asset/anh/figure/12 2.jpg",
  "../asset/anh/figure/12 3.jpg",
  "../asset/anh/figure/12 4.jpg",
  12
);
addProduct(
  "Mô hình: Hatsune Miku",
  400000,
  1,
  "../asset/anh/figure/13 1.jpg",
  "../asset/anh/figure/13 2.jpg",
  "../asset/anh/figure/13 3.jpg",
  "../asset/anh/figure/13 4.jpg",
  13
);
addProduct(
  "Mô hình: HxH Hisoka",
  400000,
  1,
  "../asset/anh/figure/14 1.jpg",
  "../asset/anh/figure/14 2.jpg",
  "../asset/anh/figure/14 3.jpg",
  "../asset/anh/figure/14 4.jpg",
  14
);
addProduct(
  "Mô hình: The Seven Deadly Sins: Dragon's Judgement King",
  400000,
  1,
  "../asset/anh/figure/15 1.jpg",
  "../asset/anh/figure/14 2.jpg",
  "../asset/anh/figure/15 3.jpg",
  "../asset/anh/figure/15 4.png",
  15
);
//--------------------------------------------------------------------------------------------------------------------
addProduct(
  "Chibi figure: Izuku Midoriya: U.A. School Uniform Ver",
  1680000,
  2,
  "../asset/anh/chibi figure/16 1.jpg",
  "../asset/anh/chibi figure/16 2.jpg",
  "../asset/anh/chibi figure/16 3.jpg",
  "../asset/anh/chibi figure/16 4.jpg",
  16
);
addProduct(
  "Chibi figure: Katsuki Bakugo: U.A. School Uniform Ver",
  1680000,
  2,
  "../asset/anh/chibi figure/17 1.jpg",
  "../asset/anh/chibi figure/17 2.jpg",
  "../asset/anh/chibi figure/17 3.jpg",
  "../asset/anh/chibi figure/17 4.jpg",
  17
);
addProduct(
  "Chibi figure: Miss Kobayashi's Dragon Maid Kobayashi-san",
  1850000,
  2,
  "../asset/anh/chibi figure/18 1.jpg",
  "../asset/anh/chibi figure/18 2.jpg",
  "../asset/anh/chibi figure/18 3.jpg",
  "../asset/anh/chibi figure/18 4.jpg",
  18
);
addProduct(
  "Chibi figure: Doll Spy x Family Loid Forger",
  2250000,
  2,
  "../asset/anh/chibi figure/19 1.jpg",
  "../asset/anh/chibi figure/19 2.jpg",
  "../asset/anh/chibi figure/19 3.jpg",
  "../asset/anh/chibi figure/19 4.jpg",
  19
);
addProduct(
  "Chibi figure: Doll Spy x Family Yor Forger: Thorn Princess Ver",
  2250000,
  2,
  "../asset/anh/chibi figure/20 1.jpg",
  "../asset/anh/chibi figure/20 2.jpg",
  "../asset/anh/chibi figure/20 3.jpg",
  "../asset/anh/chibi figure/20 4.jpg",
  20
);
addProduct(
  "Chibi figure: Yamada-kun to Lv999 no Koi wo Suru Akito Yamada",
  1700000,
  2,
  "../asset/anh/chibi figure/21 1.jpg",
  "../asset/anh/chibi figure/21 2.jpg",
  "../asset/anh/chibi figure/21 3.jpg",
  "../asset/anh/chibi figure/21 4.jpg",
  21
);
addProduct(
  "Chibi figure: AMNESIA Shin",
  1880000,
  2,
  "../asset/anh/chibi figure/22 1.jpg",
  "../asset/anh/chibi figure/22 2.jpg",
  "../asset/anh/chibi figure/22 3.jpg",
  "../asset/anh/chibi figure/22 4.jpg",
  22
);
addProduct(
  "Chibi figure: TV Anime MASHLE Lance Crown",
  1680000,
  2,
  "../asset/anh/chibi figure/23 1.jpg",
  "../asset/anh/chibi figure/23 2.jpg",
  "../asset/anh/chibi figure/23 3.jpg",
  "../asset/anh/chibi figure/23 4.jpg",
  23
);
addProduct(
  "Chibi figure: TV Anime MASHLE Mash Burnedead",
  1600000,
  2,
  "../asset/anh/chibi figure/24 1.jpg",
  "../asset/anh/chibi figure/24 2.jpg",
  "../asset/anh/chibi figure/24 3.jpg",
  "../asset/anh/chibi figure/24 4.jpg",
  24
);
addProduct(
  "Chibi figure: BOCCHI THE ROCK! Ryou Yamada",
  1550000,
  2,
  "../asset/anh/chibi figure/25 1.jpg",
  "../asset/anh/chibi figure/25 2.jpg",
  "../asset/anh/chibi figure/25 3.jpg",
  "../asset/anh/chibi figure/25 4.jpg",
  25
);
addProduct(
  "Chibi figure: Hunter x Hunter IIIumi",
  1580000,
  2,
  "../asset/anh/chibi figure/26 1.jpg",
  "../asset/anh/chibi figure/26 2.jpg",
  "../asset/anh/chibi figure/26 3.jpg",
  "../asset/anh/chibi figure/26 4.jpg",
  26
);
addProduct(
  "Chibi figure: Hunter x Hunter Leorio",
  1650000,
  2,
  "../asset/anh/chibi figure/27 1.jpg",
  "../asset/anh/chibi figure/27 2.jpg",
  "../asset/anh/chibi figure/27 3.jpg",
  "../asset/anh/chibi figure/27 4.jpg",
  27
);
addProduct(
  "Chibi figure: Overwatch 2 Sojourn",
  2150000,
  2,
  "../asset/anh/chibi figure/28 1.jpg",
  "../asset/anh/chibi figure/28 2.jpg",
  "../asset/anh/chibi figure/28 3.jpg",
  "../asset/anh/chibi figure/28 4.jpg",
  28
);
addProduct(
  "Chibi figure: Cult of the Lamb The Lamb",
  1650000,
  2,
  "../asset/anh/chibi figure/29 1.jpg",
  "../asset/anh/chibi figure/29 2.jpg",
  "../asset/anh/chibi figure/29 3.jpg",
  "../asset/anh/chibi figure/29 4.jpg",
  29
);
addProduct(
  "Chibi figure: LookUp ONE PIECE Yamato",
  1300000,
  2,
  "../asset/anh/chibi figure/30 1.jpg",
  "../asset/anh/chibi figure/30 2.jpg",
  "../asset/anh/chibi figure/30 3.jpg",
  "../asset/anh/chibi figure/30 4.jpg",
  30
);
//-----------------------------------------------------------------------------------------------------------------------------
addProduct(
  "Bộ figure: Puchirama DX ONE PIECE LOGBOX RE BIRTH 02 Luffy Special",
  2780000,
  3,
  "../asset/anh/set figure/31 1.jpg",
  "../asset/anh/set figure/31 2.jpg",
  "../asset/anh/set figure/31 3.jpg",
  "../asset/anh/set figure/31 4.jpg",
  31
);
addProduct(
  "Bộ figure: ARTFX J Persona 5: Dancing in Starlight Protagonist & Morgana",
  4380000,
  3,
  "../asset/anh/set figure/32 1.jpg",
  "../asset/anh/set figure/32 2.jpg",
  "../asset/anh/set figure/32 3.jpg",
  "../asset/anh/set figure/32 4.jpg",
  32
);
addProduct(
  "Bộ figure: Empress [Black Rock Shooter] -Teaser Visual ver.",
  13500000,
  3,
  "../asset/anh/set figure/33 1.jpg",
  "../asset/anh/set figure/33 2.jpg",
  "../asset/anh/set figure/33 3.jpg",
  "../asset/anh/set figure/33 4.jpg",
  33
);
addProduct(
  "Bộ figure: Arknights Surtr Liberte//Echec VER",
  5200000,
  3,
  "../asset/anh/set figure/34 1.jpg",
  "../asset/anh/set figure/34 2.jpg",
  "../asset/anh/set figure/34 3.jpg",
  "../asset/anh/set figure/34 4.jpg",
  34
);
addProduct(
  "Bộ figure: Hatsune Miku Birthday 2022 -Polaris ver",
  9880000,
  3,
  "../asset/anh/set figure/35 1.jpg",
  "../asset/anh/set figure/35 2.jpg",
  "../asset/anh/set figure/35 3.jpg",
  "../asset/anh/set figure/35 4.jpg",
  35
);
addProduct(
  "Bộ figure: Hatsune Miku Magical Mirai 2022 ",
  8280000,
  3,
  "../asset/anh/set figure/36 1.jpg",
  "../asset/anh/set figure/36 2.jpg",
  "../asset/anh/set figure/36 3.jpg",
  "../asset/anh/set figure/36 4.jpg",
  36
);
addProduct(
  "Bộ figure: Demon Slayer: Kimetsu no Yaiba Giyu Tomioka",
  9880000,
  3,
  "../asset/anh/set figure/37 1.jpg",
  "../asset/anh/set figure/37 2.jpg",
  "../asset/anh/set figure/37 3.jpg",
  "../asset/anh/set figure/37 4.jpg",
  37
);
addProduct(
  "Bộ figure: Precious G.E.M. Series BLEACH Ichigo Kurosaki Thousand-Year Blood War",
  11250000,
  3,
  "../asset/anh/set figure/38 1.jpg",
  "../asset/anh/set figure/38 2.jpg",
  "../asset/anh/set figure/38 3.jpg",
  "../asset/anh/set figure/38 4.jpg",
  38
);
addProduct(
  "Bộ figure: Other Animation Merchandise Roronoa Zoro LAST SLEEP",
  42124000,
  3,
  "../asset/anh/set figure/39 1.jpg",
  "../asset/anh/set figure/39 2.jpg",
  "../asset/anh/set figure/39 3.jpg",
  "../asset/anh/set figure/39 4.jpg",
  39
);
addProduct(
  "Bộ figure: Other Animation Merchandise OPM Studio One Piece Kaido Dragon VS Nika Luffy",
  40547000,
  3,
  "../asset/anh/set figure/40 1.jpg",
  "../asset/anh/set figure/40 2.jpg",
  "../asset/anh/set figure/40 3.jpg",
  "../asset/anh/set figure/40 4.jpg",
  40
);
addProduct(
  "Bộ figure: Dragon Ball Z Goku Son Gokou Statue Figure w/LED Lamp Genki Dama Spirit Bomb",
  2102000,
  3,
  "../asset/anh/set figure/41 1.jpg",
  "../asset/anh/set figure/41 2.jpg",
  "../asset/anh/set figure/41 3.jpg",
  "../asset/anh/set figure/41 4.jpg",
  41
);
addProduct(
  "Bộ figure: Figures & Statues UTS Studio Madara Susanoo",
  31358000,
  3,
  "../asset/anh/set figure/42 1.jpg",
  "../asset/anh/set figure/42 2.jpg",
  "../asset/anh/set figure/42 3.jpg",
  "../asset/anh/set figure/42 4.jpg",
  42
);
addProduct(
  "Bộ figure: Dragon Ball Shenron and Childhood Goku",
  19649000,
  3,
  "../asset/anh/set figure/43 1.jpg",
  "../asset/anh/set figure/43 2.jpg",
  "../asset/anh/set figure/43 3.jpg",
  "../asset/anh/set figure/43 4.jpg",
  43
);
addProduct(
  "Bộ figure: Belfine Demon Slayer Kyojuro Rengoku",
  12972820,
  3,
  "../asset/anh/set figure/44 1.jpg",
  "../asset/anh/set figure/44 2.jpg",
  "../asset/anh/set figure/44 3.jpg",
  "../asset/anh/set figure/44 4.jpg",
  44
);
addProduct(
  "Bộ figure: DRAGONBALL SS SON GOKU DX",
  56085500,
  3,
  "../asset/anh/set figure/45 1.jpg",
  "../asset/anh/set figure/45 2.jpg",
  "../asset/anh/set figure/45 3.jpg",
  "../asset/anh/set figure/45 4.jpg",
  45
);
//-----------------------------------------------------------------------------------------------------------------------------
addProduct(
  "Cosplay: Cyberpunk Mặt Nạ",
  871200,
  4,
  "../asset/anh/cosplay/45 1.jpg",
  "../asset/anh/cosplay/45 2.jpg",
  "../asset/anh/cosplay/45 3.jpg",
  "../asset/anh/cosplay/45 4.jpg",
  46
);
addProduct(
  "Cosplay: Mặt Nạ Người Nhện",
  7275000,
  4,
  "../asset/anh/cosplay/46 1.jpg",
  "../asset/anh/cosplay/46 2.jpg",
  "../asset/anh/cosplay/46 3.jpg",
  "../asset/anh/cosplay/46 4.jpg",
  47
);
addProduct(
  "Cosplay: Unisex Naruto Akatsuki Tobi Uchiha Obito",
  1055000,
  4,
  "../asset/anh/cosplay/47 1.jpg",
  "../asset/anh/cosplay/47 2.jpg",
  "../asset/anh/cosplay/47 3.jpg",
  "../asset/anh/cosplay/47 4.jpg",
  48
);
addProduct(
  "Cosplay: Unisex Demon Slayer Tomioka Giyuu Cosplay",
  1711000,
  4,
  "../asset/anh/cosplay/48 1.jpg",
  "../asset/anh/cosplay/48 2.jpg",
  "../asset/anh/cosplay/48 3.jpg",
  "../asset/anh/cosplay/48 4.jpg",
  49
);
addProduct(
  "Cosplay: Unisex One Piece Monkey D Luffy",
  850000,
  4,
  "../asset/anh/cosplay/49 1.jpg",
  "../asset/anh/cosplay/49 2.jpg",
  "../asset/anh/cosplay/49 3.jpg",
  "../asset/anh/cosplay/49 4.jpg",
  50
);
addProduct(
  "Cosplay: Unisex Demon Slayer Kimetsu no Yaiba",
  372000,
  4,
  "../asset/anh/cosplay/50 1.jpg",
  "../asset/anh/cosplay/50 2.jpg",
  "../asset/anh/cosplay/50 3.jpg",
  "../asset/anh/cosplay/50 4.jpg",
  51
);
saveProductList();
var productStored = localStorage.getItem("productList");
if (productStored) {
  productList = JSON.parse(productStored);
}
