localStorage.removeItem("orderList");

let orderList = localStorage.getItem("orderList")
  ? JSON.parse(localStorage.getItem("orderList"))
  : [];

orderList.push({
  maDon: "none",
  khachHang: "none",
  sanPham: "none",
  tongTien: "none",
  ngayLap: "11/23/2023",
  trangThai: "none",
});
orderList.push({
  maDon: "none",
  khachHang: "none",
  sanPham: "none",
  tongTien: "none",
  ngayLap: "11/25/2023",
  trangThai: "none",
});
let content = document.getElementById("mngContent");
// content.innerHTML = "";

let tkDonHang = document.getElementById("tkDonHang");
tkDonHang.addEventListener("click", () => {
  displayOrderManagement(orderList);
});

function displayOrderManagement(
  orderList,
  fromDate = "",
  toDate = "",
  inputVal = ""
) {
  content.innerHTML =
    '<ul id="dsDonHang" class="dsDonHang">' +
    '<li class="donHang">' +
    '<div class="STT">STT</div>' +
    '<div class="MaDon">Ma Don</div>' +
    '<div class="Khach">Khach</div>' +
    '<div class="SanPham">San Pham</div>' +
    '<div class="TongTien">Tong tien</div>' +
    '<div class="Ngaygio">Ngay gio</div>' +
    '<div class="Trangthai">Trang Thai</div>' +
    '<div class="HanhDong">Hanh Dong</div>' +
    "</li>" +
    "</ul>" +
    '<div class="searchBar">' +
    '<form action="" id="dateSearch" class="dateSearch">' +
    '<label for="fromDate">Tu cuoi ngay</label>' +
    '<input type="date" name="ngayXaNhat" id="fromDate"' +
    '<label for="toDate">Den cuoi ngay</label>' +
    '<input type="date" name="ngayXaNhat" id="toDate">' +
    '<button class="applySearch" id="dateSearchBtn">Search</button>' +
    "</form>" +
    '<form action="" id="otherSearch" class="otherSearch">' +
    '<select name="searchyype" id="searchType">' +
    '<option value="1">Tim theo ma hoa don</option>' +
    '<option value="2">Tim theo ten khach hang</option>' +
    '<option value="3">Tim theo trang thai</option>' +
    "</select>" +
    '<input type="text" id="inputValue">' +
    '<button class="applySearch" id="typeSearchBtn">Search</button>' +
    "</form>" +
    "</div>" +
    "</div>";
  let searchBtn = document.getElementsByClassName("applySearch");
  let orderElm = document.getElementById("dsDonHang");
  loadOrderList(orderElm, orderList);
  for (let i = 0; i < searchBtn.length; ++i) {
    searchBtn[i].addEventListener("click", (e) => {
      e.preventDefault();
      let list = [];
      if (i === 0) list = conditionSearch("Date");
      if (i === 1) list = conditionSearch("Value");
      if (list.length == 0)
        displayOrderManagement(JSON.parse(localStorage.getItem("orderList")));
      else displayOrderManagement(list);
    });
  }
}

function loadOrderList(orderElm, orderList) {
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
    let accept = li.getElementsByClassName("accept")[0];
    let deny = li.getElementsByClassName("deny")[0];
    let status = li.getElementsByClassName("Trangthai")[0];

    accept.addEventListener("click", () => {
      if (status.innerHTML.localeCompare("Da Giao Hang")) return;
      if (status.innerHTML.localeCompare("Da Huy") === 0)
        return alert("khong the giao don hang da huy");
      let ans = confirm("Bạn chắc chắn muốn giao hàng ?");
      if (ans == 1) {
        console.log("dcm");
        status.innerHTML = "Da Giao Hang";
        setOrderStatus(orderList[i].maDon, "Da Giao Hang");
      }
    });

    deny.addEventListener("click", () => {
      if (status.innerHTML.localeCompare("Da Huy")) return;
      if (status.innerHTML.localeCompare("Da Giao Hang") === 0)
        return alert("Khong the huy don hang da giao");
      let ans = confirm("Bạn chắc chắn muốn hủy,thao tác không thể hoàn tác!?");
      if (ans == 1) {
        status.innerHTML = "Da Huy";
        setOrderStatus(orderList[i].maDon, "Da Huy");
      }
    });
  }
}

function conditionSearch(condition) {
  let searchOrderList = [];
  if (condition.localeCompare("Date") == 0) {
    let fromDateInput = document.getElementById("fromDate").valueAsDate;
    let toDateInput = document.getElementById("toDate").valueAsDate;
    console.log(fromDateInput);
    console.log(toDateInput);
    Array.from(orderList).forEach((element) => {
      let d = new Date(element.ngayLap);
      if (d > fromDateInput && d < toDateInput) searchOrderList.push(element);
    });
  }
  if (condition.localeCompare("Value") == 0) {
    let Opt = document.getElementById("searchType");
    let inputVal = document.getElementById("inputValue").value;
    let value = Opt.value;
    console.log(inputVal);
    switch (value) {
      case "1":
        Array.from(orderList).forEach((element) => {
          if (element.maDon == inputVal) searchOrderList.push(element);
        });
        break;
      case "2":
        Array.from(orderList).forEach((element) => {
          if (element.khachHang == inputVal) searchOrderList.push(element);
        });
        break;
      case "3":
        Array.from(orderList).forEach((element) => {
          if (element.trangThai == inputVal) searchOrderList.push(element);
        });
        break;
      default:
        break;
    }
  }
  console.table(searchOrderList);
  return searchOrderList;
}

function setOrderStatus(Ma, status) {
  let res = orderList.find((item) => item.maDon == Ma);
  if (res) res.trangThai = status;
  localStorage.setItem("orderList", JSON.stringify(orderList));
}
