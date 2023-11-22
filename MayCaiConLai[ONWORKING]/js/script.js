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

localStorage.setItem("order", JSON.stringify(orderNhap));
let orderList = localStorage.getItem("order")
  ? JSON.parse(localStorage.getItem("order"))
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
    orderList[i].madon +
    "</div>" +
    '<div class="Khach">' +
    orderList[i].khach +
    "</div>" +
    '<div class="SanPham">' +
    orderList[i].sp +
    "</div>" +
    '<div class="TongTien">' +
    orderList[i].tongtien +
    "</div>" +
    '<div class="Ngaygio">' +
    orderList[i].ngaygio +
    "</div>" +
    '<div class="Trangthai">' +
    orderList[i].trangthai +
    "</div>" +
    '<div class="HanhDong">' +
    '<div class="accept">Y</div>' +
    '<div class="deny">X</div>' +
    "</div>";
  orderElm.appendChild(li);
}
