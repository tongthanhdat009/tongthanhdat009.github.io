const checkInfor = document.querySelectorAll(".check-infor");
const checkBill = document.querySelectorAll(".check-bill");
const editInfor= document.querySelectorAll(".edit-user-infor");
const altPage = document.querySelector("#alt-page");
// [0]: phần bên trái;
// [1]: phần bên phải;
// var currentUser = localStorage.getItem("currentUser");
checkInfor[1].innerHTML = '<div class="check-infor-title">Thông tin tài khoản</div>';
checkBill[1].innerHTML = '<div class="check-bill-title">Xem đơn hàng</div>';
editInfor[1].innerHTML = '<div class="edit-infor-title">Chỉnh sửa thông tin tài khoản</div>';
altPage.innerHTML = '<div id="alt-page-title">Trang xem thông tin WibuStore</div>'+
                    '<div id="alt-page-img">'+
                        '<img src="../asset/logo.png"/>'+
                    '</div>';
console.log(checkBill);