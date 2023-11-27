const userInforCont = document.querySelector("#user-infor-container"); //khung chứa bảng thông tin
const checkInfor = document.querySelector("#check-infor");//xem thông tin tài khoản bên trái
const checkBill = document.querySelector("#check-bill");//xem thông tin đơn hàng đã đặt bên trái
const altPage = document.querySelector("#alt-page");//trang thay thế khi vừa nhấn vào 
const closePage = document.querySelector("#user-infor-close");//nút đóng trang
const rightContent = document.querySelector("#user-content");//phần hiển thị nội dung bên phải
const currentUser = JSON.parse(localStorage.getItem("currentUser"));//lấy giá trị của người dùng hiện tại 
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

//thêm chức năng xem thông tin tài khoản
checkInfor.addEventListener('click', () => {
    altPage.style.display="none";
    rightContent.innerHTML='<h1 class="user-infor-title">THÔNG TIN TÀI KHOẢN</h1>' +
                           '<p><strong>Họ tên</strong>: ' + currentUser.userName+'</p>' +
                           '<p><strong>Tên đăng nhập: </strong>' + currentUser.accountName + '</p>' +
                           '<p><strong>Địa chỉ: </strong>' + currentUser.address+'</p>' +
                           '<p><strong>Địa chỉ email: </strong>' + currentUser.email+'</p>' +
                           '<p><strong>Số điện thoại: </strong>' + currentUser.phoneNumber + '</p>';
});

//thêm chức năng xem đơn hàng đã đặt
checkBill.addEventListener('click', () => {
    altPage.style.display="none";
    var orderList = JSON.parse(localStorage.getItem("orderList"));//lấy mảng giá trị đơn hàng đã đặt
    console.log(orderList);
    rightContent.innerHTML='<h1 class="user-infor-title">ĐƠN HÀNG ĐÃ ĐẶT</h1>'+
    `<table border="2" id="userBill">
        <tr>
            <td>Tên sản phẩm</td>
            <td>Thành tiền</td>
            <td>Ngày Đặt</td>
            <td>Trạng thái</td>
        </tr>
    </table>`;
    var userBillTb = document.querySelector("#userBill");
    for(var i=0;i<orderList.length;i++){
        if(orderList[i].userAccount === currentUser.accountName){ //nếu tên account của đơn hàng bằng với tên account của currentUser thì xuất ra thông tin
            console.log(orderList[i]);
            // xuất
            var row = userBillTb.insertRow(-1);
            var cell1, cell2, cell3, cell4;
            cell4 = row.insertCell(0);
            cell4.innerHTML = ''+orderList[i].trangThai+'';
            cell3 = row.insertCell(0);
            cell3.innerHTML = ''+orderList[i].ngayLap+'';
            cell2 = row.insertCell(0);
            cell2.innerHTML = ''+orderList[i].tongTien+'đ';
            cell1 = row.insertCell(0);
            cell1.innerHTML = ''+orderList[i].sanPham+'';
        }
    }
});