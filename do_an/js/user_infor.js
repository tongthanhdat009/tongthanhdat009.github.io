const userInforCont = document.querySelector("#user-infor-container");
const checkInfor = document.querySelector("#check-infor");
const checkBill = document.querySelector("#check-bill");
const editInfor= document.querySelector("#edit-user-infor");
const altPage = document.querySelector("#alt-page");
const closePage = document.querySelector("#user-infor-close");
const rightContent = document.querySelector("#user-content");
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
// thêm hình + tiêu đề cho trang thông tin
altPage.innerHTML = '<div id="alt-page-title">Trang xem thông tin WibuStore</div>'+
                    '<div id="alt-page-img">'+
                        '<img src="../asset/logo.png"/>'+
                    '</div>';

//thêm chức năng mở trang bằng nút "thông tin tài khoản"
function openInforTb(){
    userInforCont.style.animation="user-infor-in 2s forwards";    
}
//thêm chức năng đóng trang
closePage.addEventListener("click",() => {
    userInforCont.style.animation="user-infor-out 2s";
    altPage.style.display="initial";
    rightContent.innerHTML="";
});

checkInfor.addEventListener('click', () => {
    altPage.style.display="none";
    rightContent.innerHTML='<h1 class="user-infor-title">THÔNG TIN TÀI KHOẢN</h1>' +
                           '<p><strong>Họ tên</strong>: ' + currentUser.userName+'</p>' +
                           '<p><strong>Tên đăng nhập: </strong>' + currentUser.accountName + '</p>' +
                           '<p><strong>Địa chỉ: </strong>' + currentUser.address+'</p>' +
                           '<p><strong>Địa chỉ email: </strong>' + currentUser.email+'</p>' +
                           '<p><strong>Số điện thoại: </strong>' + currentUser.phoneNumber + '</p>';
});
checkBill.addEventListener('click', () => {
    altPage.style.display="none";
});

editInfor.addEventListener('click', () => {
    altPage.style.display="none";
    rightContent.innerHTML="<h1>CHỈNH SỬA THÔNG TIN TÀI KHOẢN</h1>";
});

console.log(currentUser);