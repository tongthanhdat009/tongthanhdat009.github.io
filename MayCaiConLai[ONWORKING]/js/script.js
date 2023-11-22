let orderNhap = [];

function addItem(madon, khach, sp, tongtien, ngaygio, trangthai) {
  let order = {
    madon: madon,
    khach: khach,
    sp: sp,
    tongtien: tongtien,
    ngaygio: ngaygio,
    trangthai: trangthai,
  };

  orderNhap.push(order);
}

for (let i = 0; i < 20; ++i) {
  addItem(
    "999",
    "Teo",
    ["sp1\n", "sp2\nsp3\nsp4"],
    50000,
    new Date().getDate(),
    "waiting"
  );
}

// localStorage.removeItem("orderList");

let orderList = localStorage.getItem("orderList")
  ? JSON.parse(localStorage.getItem("orderList"))
  : [];

let orderElm = document.getElementById("dsDonHang");
console.table(orderList);

for (let i = 0; i < orderList.length; ++i) {
  let li = document.createElement("li");
  li.setAttribute("class", "donHang");
  li.innerHTML =
    '<div class="STT">' +
    i +
    "</div>" +
    '<div class="MaDon">' +
    orderList[i].maDon +
    "</div>" +
    '<div class="Khach">' +
    orderList[i].khachHang +
    "</div>" +
    '<div class="SanPham">' +
    orderList[i].sanPham +
    "</div>" +
    '<div class="TongTien">' +
    orderList[i].tongTien +
    "</div>" +
    '<div class="Ngaygio">' +
    orderList[i].ngayLap +
    "</div>" +
    '<div class="Trangthai">' +
    orderList[i].trangThai +
    "</div>" +
    '<div class="HanhDong">' +
    '<div class="accept">Y</div>' +
    '<div class="deny">X</div>' +
    "</div>";
  orderElm.appendChild(li);
}
