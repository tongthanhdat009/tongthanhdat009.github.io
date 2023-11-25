const userInforCont = document.querySelector("#user-infor-container");
const checkInfor = document.querySelectorAll(".check-infor");
const checkBill = document.querySelectorAll(".check-bill");
const editInfor= document.querySelectorAll(".edit-user-infor");
const altPage = document.querySelector("#alt-page");
const closePage = document.querySelector("#user-infor-close");
// [0]: phần bên trái;
// [1]: phần bên phải;
// var currentUser = localStorage.getItem("currentUser");

// thêm hình + tiêu đề cho trang thông tin
altPage.innerHTML = '<div id="alt-page-title">Trang xem thông tin WibuStore</div>'+
                    '<div id="alt-page-img">'+
                        '<img src="../asset/logo.png"/>'+
                    '</div>';

//thêm chức năng đóng trang
closePage.addEventListener("click",() => {
    userInforCont.style.animation="user-infor-out 2s";
    altPage.style.display="initial";
});

//thêm chức năng mở trang bằng nút "thông tin tài khoản"
function openInforTb(){
    userInforCont.style.animation="user-infor-in 2s forwards";    
}
checkInfor[0].addEventListener('click', () => {
    altPage.style.display="none";
    checkInfor[1].innerHTML = '<div class="check-infor-title">Thông tin tài khoản</div>';
});
checkBill[0].addEventListener('click', () => {
    altPage.style.display="none";
    checkBill[1].innerHTML = '<div class="check-bill-title">Xem đơn hàng</div>';
});
editInfor[0].addEventListener('click', () => {
    altPage.style.display="none";
    editInfor[1].innerHTML = '<div class="edit-infor-title">Chỉnh sửa thông tin tài khoản</div>';
});
