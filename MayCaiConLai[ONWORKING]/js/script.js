// localStorage.removeItem("orderList");

let userList = localStorage.getItem("userList")
  ? JSON.parse(localStorage.getItem("userList"))
  : [];

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

function displayOrderManagement(orderList) {
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
      if (status.innerHTML.localeCompare("Da Giao Hang") === 0) return;
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
      if (status.innerHTML.localeCompare("Da Huy") === 0) return;
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

function setOrderStatus(Ma, status) {
  let res = orderList.find((item) => item.maDon == Ma);
  if (res) res.trangThai = status;
  localStorage.setItem("orderList", JSON.stringify(orderList));
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
  if (condition.localeCompare("User") == 0) {
    let userSearchType = document.getElementById("userSearchType").value;
    let inputVal = document.getElementById("userSearchValue").value;
    userList.forEach((user) => {
      switch (userSearchType) {
        case "1":
          if (user.accountName == inputVal) searchOrderList.push(user);
          break;
        case "2":
          if (user.userName == inputVal) searchOrderList.push(user);
          break;
        case "3":
          if (user.email == inputVal) searchOrderList.push(user);
          break;
        default:
          break;
      }
    });
  }
  console.table(searchOrderList);
  return searchOrderList;
}

function displayUserManagement(userList) {
  content.innerHTML =
    '<ul class="userList">' +
    '<li class="user">' +
    '<div class="STT">STT' +
    "</div>" +
    '<div class="HoTen">Ho ten</div>' +
    '<div class="Email">Email</div>' +
    '<div class="TenDangNhap">Ten dang nhap</div>' +
    '<div class="matKhau">Mat khau</div>' +
    '<div class="hanhDong">HanhDong</div>' +
    "</li>" +
    "</ul>" +
    '<div class="searchBar flex-start"' +
    '<form action="" id="userSearch">' +
    '<select name="userSeach" id="userSearchType">' +
    '<option value="1">Tim theo ten dang nhap</option>' +
    '<option value="2">Tim theo ho ten</option>' +
    '<option value="3">Tim theo email</option>' +
    "</select>" +
    '<input type="text" placeholder="Tim kiem thong tin..." id="userSearchValue">' +
    "</form>" +
    '<label class="addAccount">' +
    '<div class="addUsrBtn">+</div>' +
    '<div id="addUsrTitle">Tao tai khoan</div>' +
    "</label>" +
    "</div>";

  let userElm = document.getElementsByClassName("userList")[0];
  let searchBar = document.getElementById("userSearchValue");
  searchBar.addEventListener("keypress", (e) => {
    if (e.key != "Enter") return;
    let list = conditionSearch("User");
    if (list.length == 0) {
      displayUserManagement(JSON.parse(localStorage.getItem("userList")));
      return;
    }
    displayUserManagement(list);
  });
  loadUserList(userElm, userList);
}

function loadUserList(userElm, userList) {
  userList.forEach((user, index) => {
    let li = document.createElement("li");
    li.setAttribute("class", "user");
    li.innerHTML =
      '<div class="STT">' +
      index +
      "</div>" +
      '<div class="HoTen">' +
      user.userName +
      "</div>" +
      '<div class="Email">' +
      user.email +
      "</div>" +
      '<div class="TenDangNhap">' +
      user.accountName +
      "</div>" +
      '<div class="matKhau">' +
      user.password +
      "</div>" +
      '<div class="hanhDong">' +
      '<div class="delete">X</div>' +
      "</div>";
    userElm.appendChild(li);
    li.getElementsByClassName("delete")[0].addEventListener("click", () => {
      let ans = confirm(
        "Ban chac chan muon xoa tai khoan nay? Viec xoa tai khoan se xoa toan bo thong tin ve don hang va thong tin khach hang?"
      );
      if (ans == 1) {
        userList.splice(index, 1);
        displayUserManagement(userList);
        // localStorage.setItem("userList", userList);
      }
    });
  });
}
