const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector("#sign-up-in_btn");
const Iconclose = document.querySelector(".icon-close");
const errorSpan = document.querySelector("#error");
const btn_yes = document.querySelector(".btn_yes");
var userList=[];

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
  optionBox.style.animation = "box-out 2s";
  // wrapper.style.animation = "wrapper-in 2s forwards";
  wrapper.classList.add("active-popup");
});

Iconclose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

// kiểm tra nhập tên
function checkInputLength(input) {
  if (input.value.length > 10) {
    input.value = input.value.slice(0, 10);
  }
}

//kiểm tra mật khẩu đăng ký
const userNameInput = document.querySelector("#checkusername");
const userNameError = document.querySelector("#username-error");

const accountNameInput = document.querySelector("#checkaccount");
const accountnameIput = document.querySelector("#checkaccount");

const passWordInput = document.querySelectorAll(".checkpasswords");
const passErrorSpan = document.querySelectorAll(".pass-error");

const phoneNumber = document.getElementById("checkphonenumber");
const phoneNumberErrorSpan = document.querySelector("#phonenumber-error");

const checkMail = document.querySelector("#email");
const mailError = document.querySelector("#email-error");

const acpt = document.getElementById("acpt-infor");

//kiểm tra tên người dùng trong lúc nhập
userNameInput.addEventListener("input",() =>{
  var userName = userNameInput.value;
  const regex3 = /([a-z]|[A-Z]){1,128}$/;
  if(!userName.match(regex3) && userName.length<=4) {
    userNameError.textContent = "Tên không hợp lệ";
  }
  else{
    userNameError.textContent = "";
  }
});

//kiểm tra mật khẩu trong lúc nhập
passWordInput[0].addEventListener("input",() => {
  var passWord = passWordInput[0].value;
  if(passWord.length < 8 && passWord.length>=1) {
    passErrorSpan[0].textContent = "mật khẩu cần ít nhẩt 8 kí tự";
  }
  else {
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
phoneNumber.addEventListener("input",()=>{
  var number = phoneNumber.value;
  var regex = /(84|0[35789])[0-9]{8}$/;
  if(number.match(regex)){
    phoneNumberErrorSpan.textContent ="";
  }
  else{
    phoneNumberErrorSpan.textContent = "số điện thoại không hợp lệ";
    if(number.length<=10){
      phoneNumberErrorSpan.textContent ="";
    }
  }
});

//kiểm tra tên đăng nhập
accountNameInput.addEventListener("input", (event) => {
  // Lấy giá trị của input
  const accountName = event.target.value;
  // Cắt bỏ giá trị nếu vượt quá 8 ký tự
  if (accountName.length > 9) {
    event.target.value = accountName.substring(0, 9);
    errorSpan.textContent = "Tên đăng nhập không vượt qua 10 ký tự";
  } else {
    // Xóa nội dung của thẻ span
    errorSpan.textContent = "";
  }
});


//check mail
checkMail.addEventListener("input", () => {
  var mail = checkMail.value;
  const regex = /([a-z]|[A-Z]|[0-9]){1,64}@([a-z]|[A-Z]|[0-9]|.){1,255}$/;
  if(!mail.match(regex)){
    mailError.textContent="mail không hợp lệ";
  }
  else{
    mailError.textContent="";
  }
});

// hàm lưu danh sách người dùng
function saveUserList() {
  localStorage.setItem("userList",JSON.stringify(userList));
}

// hàm lấy danh sách người dùng
function getUserList(){
  userList = JSON.parse(localStorage.getItem("userList"));
}
//hàm chạy save user 1 lần
function runSaveUserList(){
  var userHasRun = localStorage.getItem('userHasRun');
  if (!userHasRun) {
    saveUserList();
    localStorage.setItem('userHasRun', true);
  }
}

//thêm user
function addUser(userName, accountname, passWord, email, phoneNumber){
  var newUser={
    userName: userName,
    accountName: accountname,
    password: passWord,
    email: email,
    phoneNumber:phoneNumber,
    status: false // trạng thái đăng nhập
  }
  userList.push(newUser);
  saveUserList();
  getUserList();
}
//tài khoản admin
addUser(
  "Group 2",
  "admin",
  "admin",
  "wibustore@gmail.com",
  "123456789"
  );
  
//   //tài khoản user
addUser(
  "Tống Thành Đạt",
  "dat",
  "12345678",
  "a@gmail.com",
  "0395632027"
  );
  addUser(
  "Tống Thành Đạt",
  "dat2",
  "12345678",
  "a@gmail.com",
  "0395632027"
  );
// LIÊN QUAN TỚI ĐĂNG KÝ TÀI KHOẢN
// bấm submit đăng ký
var register=document.querySelector("#register");
register.addEventListener('click',function(e){
  e.preventDefault();
  var userName = userNameInput.value;
  var accountName = accountNameInput.value;
  var passWord = passWordInput[0].value;
  var rewritePassWord = passWordInput[1].value;
  var mail = checkMail.value;
  var number = phoneNumber.value;
  var acptValue = acpt.value;
  var check = true;
  const regex1 = /([a-z]|[A-Z]|[0-9]){1,64}@([a-z]|[A-Z]|[0-9]|.){1,255}$/;//biểu thức chính quy mail
  const regex2 = /(84|0[35789])[0-9]{8}$/; //biểu thức chính quy số điện thoại
  const regex3 = /([a-z]|[A-Z]){1,128}$/;
  //check mật khẩu đăng ký
  if(passWord.length < 8 && passWord.length>=1){
    check = false;
    if(!check){
      alert("Mật khẩu không hợp lệ");
    }
  }

  // check mật khẩu được nhập lại
  else if(rewritePassWord !== passWord){
    check = false;
    if(!check){
      alert("Mật khẩu không trùng khớp");
    }
  }

  // check mail
  else if(!mail.match(regex1)){
    check = false;
    if(!check){
      alert("Mail không hợp lệ");
    }
  }

  //check số điện thoại
  else if(!number.match(regex2)){
    check = false;
    if(!check){
      alert("Số điện thoại không hợp lệ");
    }
  }

  // check xác nhận thông tin
  else if(!acptValue==="on"){
    check = false;
    if(!check){
      alert("Vui lòng chọn ô tôi đồng ý với khai báo trên là đúng");
    }
  }

  //check tên người dùng
  else if(!userName.match(regex3) && userName.length){
    check = false;
    if(!check){
      alert("Họ và tên không hợp lệ");
    }
  }
  //check tài khoản
  else{
    for(var i=0; i<userList.length;i++){
      if(accountName===userList[i].accountName){
        alert("Tên đăng nhập đã tồn tại");
        check=false;
        accountNameInput.value="";
        break;
      }
    }
  }
  if(check){
    // hiển thị bảng đăng ký thành công
    var alertCustom = document.querySelector("#customalert");
    alertCustom.style.animation="complete 10s";
    addUser(userName, accountName, passWord, mail, number);
    saveUserList();
    // xóa thông tin đã nhập lúc đăng ký thành công
    userNameInput.value="";
    accountNameInput.value="";
    passWordInput[0].value="";
    passWordInput[1].value="";
    checkMail.value="";
    phoneNumber.value="";
  }
});

getUserList();

// console.log(userList);
//LIÊN QUAN TỚI ĐĂNG NHẬP/ ĐĂNG XUẤT:

// nút đăng xuất
const logoutButton = document.querySelector("#logout");

// nút xác nhận đăng nhập
const loginButton = document.querySelector("#login");

//nút admin
const adminButton = document.querySelector("#admin");
//mật khẩu tài khoản đăng nhập
const accountNameLogin = document.querySelector("#account-login");
const passWordLogin = document.querySelector("#password-login");

//thông báo nếu lỗi thông tin 
const userLoginError = document.querySelector("#username-login-error");
const passwordError = document.querySelector("#password-login-error");

//nút thanh toán giỏ hàng
const payButton = document.querySelector("#pay button");
// console.log(payButton);
// Khi đăng nhập thành công
var currentUserLogged = JSON.parse(localStorage.getItem("currentUser"));
onLoginSuccess(currentUserLogged);
function onLoginSuccess(user) {
  if(user && user.status){
    changeOnLoginSuccess();
    if(user.accountName === "admin"){
      adminButton.style.display="initial";
    }
  if(window.location.pathname === "/do_an/html/cart.html")
    payButton.setAttribute("onclick","payAll()");
  }
}
// thay đổi css khi đăng nhập
function changeOnLoginSuccess(){
  logoutButton.style.display="initial";
  btnPopup.style.display="none";
  optionBox.style.display="none";
  loginLink.style.display="none";
  wrapper.style.display="none";
}

// Khi người dùng click vào nút đăng xuất
logoutButton.addEventListener("click", (e) => {
    e.preventDefault;
    for(var i=0;i<userList.length;i++){
      if(currentUserLogged.accountName === userList[i].accountName){
        // console.log(currentUserLogged);
        setCurrentUser(userList[i].userName, userList[i].accountName, userList[i].password, userList[i].email, userList[i].phonenumber, false);
      }
    }
    btnPopup.style.display="initial";
    optionBox.style.display="initial";
    loginLink.style.display="initial";
    wrapper.style.display="initial";  
    logoutButton.style.display="none";
    adminButton.style.display="none";
    if(window.location.pathname === "/do_an/html/cart.html"){
      payButton.removeAttribute("onclick");
      payButton.setAttribute("onclick","openOption()");
    }
    deleteAll();
});
//lưu thông tin người đăng nhập hiện tại
function setCurrentUser(username, accountname, password, email, phonenumber,status){
  var currentUser={
    userName: username,
    accountName: accountname,
    password: password,
    email: email,
    phoneNumber:phonenumber,
    status: status
  }
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
}
loginButton.addEventListener("click",(e) => {
  e.preventDefault();
  var check = false;
  var i=0;
  for(i;i<userList.length;i++){
    if(accountNameLogin.value === userList[i].accountName){
      // console.log("đã tìm thấy tài khoản");
      if(userList[i].password === passWordLogin.value){
        check=true;
        // console.log("đã tìm thấy mật khẩu");
        setCurrentUser(userList[i].userName, userList[i].accountName, userList[i].password, userList[i].email, userList[i].phonenumber, true);
        onLoginSuccess(JSON.parse(localStorage.getItem("currentUser")));
        accountNameLogin.value="";
        passWordLogin.value="";
      }
    }
  }
  if(!check){
    alert("vui lòng kiểm tra tài khoản hoặc mật khẩu"); 
  }
});
console.log(userList.length);
console.log(localStorage.getItem("currentUser"));