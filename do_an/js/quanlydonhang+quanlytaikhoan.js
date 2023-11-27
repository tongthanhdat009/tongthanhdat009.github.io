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
let display_product = document.getElementsByClassName("display-product")[0];

let tkSanPham = document.getElementById("tkSanPham");
tkSanPham.addEventListener("click", () => {
  content.style.display = "none";
  display_product.style.display = "block";
});

let tkDonHang = document.getElementById("tkDonHang");
tkDonHang.addEventListener("click", () => {
  content.style.display = "block";
  display_product.style.display = "none";
  displayOrderManagement(orderList);
});

let qlTaiKhoan = document.getElementById("userManagement");
qlTaiKhoan.addEventListener("click", () => {
  content.style.display = "block";
  display_product.style.display = "none";
  displayUserManagement(userList);
});

function displayOrderManagement(orderList) {
  content.innerHTML =
    '<ul id="dsDonHang" class="dsDonHang">' +
    '<li class="donHang">' +
    '<div class="STT">STT</div>' +
    '<div class="MaDon">Mã Đơn</div>' +
    '<div class="Khach">Khách</div>' +
    '<div class="SanPham">Sản phẩm</div>' +
    '<div class="TongTien">Tổng tiền</div>' +
    '<div class="Ngaygio">Ngày giờ</div>' +
    '<div class="Trangthai">Trạng thái</div>' +
    '<div class="HanhDong">Hành động</div>' +
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
  let addUserBtn = document.getElementsByClassName("addAccount")[0];

  searchBar.addEventListener("keypress", (e) => {
    if (e.key != "Enter") return;
    let list = conditionSearch("User");
    if (list.length == 0) {
      displayUserManagement(JSON.parse(localStorage.getItem("userList")));
      return;
    }
    displayUserManagement(list);
  });

  addUserBtn.addEventListener("click", () => {
    if (document.getElementById("createAccountBox") != null) return;
    let form = document.createElement("form");
    form.setAttribute("id", "createAccountBox");
    form.innerHTML =
      '<div class="closeBtn">X</div>' +
      '<label for="name">Ho ten</label>' +
      '<label for="name" id="nameErr" style="color:red">Ho ten khong chua ky tu dac biet va toi da 128 ky tu</label>' +
      '<input type="text" id="name" placeholder="Ho va ten">' +
      '<label for="loginName">Ten dang nhap</label>' +
      '<label for="loginName" id="loginNameErr" style="color:red">Ten dang nhap khong toi da 8 ky tu va khong chua ky' +
      "tu dac biet</label>" +
      '<input type="text" id="loginName" placeholder="Ten dang nhap">' +
      '<label for="loginPassword">Mat Khau</label>' +
      '<label for="loginPassword" id="loginPasswordErr" style="color:red">Mat khau toi da 8 ky tu khong chua ky tu dac' +
      "biet</label>" +
      '<input type="password" id="loginPassword" placeholder="mat khau">' +
      '<label for="email">Email</label>' +
      '<label for="email" id="emailErr" style="color:red">Email phai tuan thu abc@email.com</label>' +
      '<input type="email" id="email" placeholder="Email">' +
      '<div class="btnWrapper">' +
      '<button type="submit" class="submitBtn">Submit</button>' +
      '<button type="reset">reset</button>' +
      "</div>";
    content.appendChild(form);
    createAccountFunc();
    addCloseBehavior(content, form);
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

function createAccountFunc() {
  let createAccountForm = document.getElementById("createAccountBox");

  let name = document.getElementById("name");
  let loginName = document.getElementById("loginName");
  let loginPass = document.getElementById("loginPassword");
  let email = document.getElementById("email");

  const nameReg = /[a-zA-Z]{3,}$/;
  const loginNameReg = /[a-zA-Z0-9]{1,128}$/;
  const loginPassReg = /[a-zA-Z0-9]{8,}$/;
  const emailReg = /([a-z]|[A-Z]|[0-9]){1,64}@([a-z]|[A-Z]|[0-9]|.){1,255}$/;

  let nameErr = document.getElementById("nameErr");
  let loginNameErr = document.getElementById("loginNameErr");
  let loginPassErr = document.getElementById("loginPasswordErr");
  let emailErr = document.getElementById("emailErr");
  nameErr.style.display = "none";
  loginNameErr.style.display = "none";
  loginPassErr.style.display = "none";
  emailErr.style.display = "none";
  createAccountForm.addEventListener("submit", (e) => {
    nameErr.style.display = "none";
    loginNameErr.style.display = "none";
    loginPassErr.style.display = "none";
    emailErr.style.display = "none";

    name.style.borderColor = "black";
    loginName.style.borderColor = "black";
    loginPass.style.borderColor = "black";
    email.style.borderColor = "black";

    e.preventDefault();

    let nameVal = name.value;
    let loginNameVal = loginName.value;
    let loginPassVal = loginPass.value;
    let emailVal = email.value;

    if (!emailReg.test(emailVal)) {
      emailErr.style.display = "block";
      email.style.borderColor = "red";
      email.focus();
    }
    if (!loginPassReg.test(loginPassVal)) {
      loginPassErr.style.display = "block";
      loginPass.style.borderColor = "red";
      loginPass.focus();
    }
    if (!loginNameReg.test(loginNameVal)) {
      loginNameErr.style.display = "block";
      loginName.style.borderColor = "red";
      loginName.focus();
    }
    if (!nameReg.test(nameVal)) {
      nameErr.style.display = "block";
      name.style.borderColor = "red";
      name.focus();
    }
    if (
      nameReg.test(nameVal) &&
      loginNameReg.test(loginNameVal) &&
      loginPassReg.test(loginPassVal) &&
      emailReg.test(emailVal)
    ) {
      alert("Tao tai khoan thanh cong");
      var newUser = {
        userName: nameVal,
        accountName: loginNameVal,
        password: loginPassVal,
        email: emailVal,
        phoneNumber: "none",
        address: "none",
        status: false, // trạng thái đăng nhập
      };
      userList.push(newUser);
      localStorage.setItem("userList", JSON.stringify(userList));
      displayUserManagement(userList);
      console.table(userList);
    }
    return false;
  });
}

function addCloseBehavior(content, form) {
  let closeBtn = form.getElementsByClassName("closeBtn")[0];
  closeBtn.addEventListener("click", () => {
    form.style.animation = "show-out 400ms ease";
    setTimeout(() => {
      content.removeChild(form);
    }, 390);
  });
}
