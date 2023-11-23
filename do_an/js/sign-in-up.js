const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector("#sign-up-in_btn");
const Iconclose = document.querySelector(".icon-close");
const usernameIput = document.querySelector("#checkaccount");
const errorSpan = document.querySelector("#error");
const passErrorSpan = document.querySelectorAll(".pass-error");
const phoneNumberErrorSpan = document.querySelector("#phonenumber-error")
const btn_yes = document.querySelector(".btn_yes");

let login = document.getElementsByClassName("dangnhap")[0];
let signup = document.getElementsByClassName("dangki")[0];

//thông tin tài khoản: lựa chọn đăng nhập đăng ký hoặc đăng nhập để sử dụng giỏ hàng
var optionBox = document.getElementById("option_box");
function openOption() {
  optionBox.style.animation = "box-in 2s forwards";
}
function closeOption() {
  optionBox.style.animation = "box-out 2s";
}

registerLink.addEventListener("click", () => {
  login.style.display = "none";
  signup.style.display = "block";
});

loginLink.addEventListener("click", () => {
  signup.style.display = "none";
  login.style.display = "block";
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
  // wrapper.style.animation = "wrapper-in 2s forwards";
});

btn_yes.addEventListener("click", () => {
  opt_box.style.animation = "box-out 2s";
  // wrapper.style.animation = "wrapper-in 2s forwards";
  wrapper.classList.add("active-popup");
});

Iconclose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

function checkInputLength(input) {
  if (input.value.length > 10) {
    input.value = input.value.slice(0, 10);
  }
}
//kiểm tra mật khẩu đăng ký
const usernameInput = document.querySelector("#checkaccount");
const passWordInput = document.querySelectorAll(".checkpasswords");

passWordInput[0].addEventListener("input",()=> {
  var passWord = passWordInput[0].value;
  if(passWord.length < 8 && passWord.length>1){
    passErrorSpan[0].textContent = "mật khẩu cần ít nhẩt 8 kí tự";
  }
  else{
    passErrorSpan[0].textContent = "";
  }
});
//kiểm tra mật khẩu được nhập lại
passWordInput[1].addEventListener("input",()=> {
  var rewritePassWord = passWordInput[1].value;
  var passWord = passWordInput[0].value;
  if(rewritePassWord === passWord){
    passErrorSpan[1].textContent = "";
  }
  else{
    passErrorSpan[1].textContent = "mật khẩu không trùng khớp";
  }
});

//kiểm tra số điện thoại đăng ký
const phoneNumber = document.getElementById("checkphonenumber");
phoneNumber.addEventListener("input",()=>{
  var number = phoneNumber.value;
  var regex = /(84|0[35789])[0-9]{8}$/;
  if(number.match(regex)){
    phoneNumberErrorSpan.textContent ="";
  }
  else{
    phoneNumberErrorSpan.textContent = "số điện thoại không hợp lệ";
  }
});
usernameInput.addEventListener("input", (event) => {
  // Lấy giá trị của input
  const username = event.target.value;

  // Cắt bỏ giá trị nếu vượt quá 8 ký tự
  if (username.length > 9) {
    event.target.value = username.substring(0, 9);
    errorSpan.textContent = "Tên đăng nhập không vượt qua 10 ký tự";
  } else {
    // Xóa nội dung của thẻ span
    errorSpan.textContent = "";
  }
});

//check đồng ý thông tin
const acptValue = document.getElementById("acpt-infor");
acptValue.addEventListener("input",() =>{
  console.log(acptValue.value);
});

// Tạo nút đăng xuất
const logoutButton = document.querySelector("#logout");

isLoggedIn = false;
// Khi đăng nhập thành công
function onLoginSuccess() {
  isLoggedIn = true;
  localStorage.setItem("isLoggedIn", isLoggedIn);
}
function changeOnLoginSuccess(){
    isLoggedIn = localStorage.getItem("isLoggedIn");
    if(isLoggedIn){
        logoutButton.style.visibility="visble";
        btnPopup.style.visibility="hidden";
        opt_box.style.visibility="hidden";
    }
}

// Khi người dùng click vào nút đăng xuất
logoutButton.addEventListener("click", () => {
    isLoggedIn = false;
    localStorage.setItem("isLoggedIn", isLoggedIn);
    btnPopup.style.visibility="visible";
    opt_bo.style.visibility="visible";
});
