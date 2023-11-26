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

checkBill.addEventListener('click', () => {
    altPage.style.display="none";
    var orderList = JSON.parse(localStorage.getItem("orderList"));
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
        if(orderList[i].userAccount === currentUser.accountName){
            console.log(orderList[i]);
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

// editInfor.addEventListener('click', () => {
//     altPage.style.display="none";
//     rightContent.innerHTML=`<h1 class="user-infor-title">CHỈNH SỬA THÔNG TIN TÀI KHOẢN</h1>
//     <h2> Đổi Họ Và Tên</h2>
//     <div id="nameForm">
//         <form>
//             <label for="nameInput"> Họ và tên : </label>
//             <input autocomplete="on" type="text" id="newName" placeholder="Nhập tên cần thay đổi" required>
//             <button class="all_alt_btn" type="submit" id="update-name">Cập nhật</button>
//         </form>
//     </div>
//     <h2>Đổi Mật khẩu</h2>
//     <div id="passwordForm">
//         <form>
//             <label for="currentPassword">Mật khẩu hiện tại:</label>
//             <input autocomplete="on" type="password" id="currentPassword" required placeholder="nhập mật khẩu hiện tại">
//             </br>
//             <label for="newPassword">Mật khẩu mới:</label>
//             <input autocomplete="on" type="password" id="newPassword" required placeholder="nhập mật khẩu mới">
//             </br>
//             <label for="confirmPassword">Xác nhận mật khẩu mới:</label>
//             <input autocomplete="on" type="password" id="confirmPassword" required placeholder="nhập mật khẩu để xác nhận">
//             </br>
//             <button class="all_alt_btn" type="submit">Đổi Mật khẩu</button>
//         </form>
//     </div>
//     <h2>Thông Tin Địa Chỉ</h2>
//     <div id="addressForm">
//         <form>
//             <label for="newAddress">Địa chỉ mới:</label>
//             <input autocomplete="on" type="text" id="newAddress" required placeholder="nhập địa chỉ cần thay đổi"></textarea>
//             <button class="all_alt_btn" type="submit">Thay Đổi Địa Chỉ</button>
//         </form>
//     </div>
//     <h2>Số Điện Thoại</h2>
//     <div id="phoneNumberForm">
//         <form>
//             <label for="phoneNumberForm"> Đổi số điện thoại: </label>
//             <input autocomplete="on" type="text" id="newPhoneNumber" placeholder="Nhập số điện thoại cần thay đổi" required>
//             <button class="all_alt_btn" type="submit" id="updatePhoneNumber">Cập nhật</button>
//         </form>
//     </div>
//     <h2>Địa Chỉ Email</h2>
//     <div id="emailForm">
//         <form>
//             <label for="newEmail"> Đổi email: </label>
//             <input autocomplete="on" type="text" id="newEmail" placeholder="Nhập email cần thay đổi" required>
//             <button class="all_alt_btn" type="submit" id="updateEmail">Cập nhật</button>
//         </form>
//     </div>`;

//     //đổi tên
//     var nameUpdateInput=document.querySelector("#newName");//tên cần cập nhật
//     var nameForm = document.getElementById("nameForm");
//     nameForm.addEventListener("submit", function (e) {
//         e.preventDefault();
//         console.log(nameUpdateInput.value);
//         if(nameUpdateInput.value.length > 256 || nameUpdateInput.value.length < 4){
//             alert("Họ và tên không hợp lệ");
//         }
//         else{
//             currentUser.userName=nameUpdateInput.value;
//             // setCurrentUser(currentUser.userName,
//             //                currentUser.accountName,
//             //                currentUser.password,
//             //                currentUser.email,
//             //                currentUser.phonenumber,
//             //                currentUser.status);
//         }
//     });

//     //đổi mật khẩu
//     var oldPass = document.querySelector("#currentPassword"); // nhập mật khẩu hiện tại
//     var newPass = document.querySelector("#newPassword");// nhập mật khẩu mới
//     var acptPass = document.querySelector("#confirmPassword");// nhập xác nhận mật khẩu
//     var passwordForm = document.getElementById("passwordForm");
//     passwordForm.addEventListener("submit", function (e) {
//         e.preventDefault(); 
//         console.log(oldPass.value);
//         console.log(newPass.value);
//         console.log(acptPass.value);
//     });

//     //đổi địa chỉ
//     var newAddress = document.querySelector("#newAddress");// nhập địa chỉ mới
//     var addressForm = document.getElementById("addressForm");
//     addressForm.addEventListener("submit", function (e) {
//         e.preventDefault();
//         console.log(newAddress.value);
//     });
    
//     //đổi số điện thoại
//     var newPhoneNumber = document.querySelector("#newPhoneNumber");// nhập số điện thoại mới
//     var phoneNumberForm = document.querySelector("#phoneNumberForm");
//     phoneNumberForm.addEventListener("submit",function(e) {
//         e.preventDefault();
//         console.log(newPhoneNumber.value);
//     })

//     //đổi email
//     var newEmail = document.querySelector("#newEmail"); //nhập địa chỉ email mới
//     var emailForm = document.querySelector("#emailForm");
//     emailForm.addEventListener("submit",function(e) {
//         e.preventDefault();
//         console.log(newEmail.value);
//     })
// });
// console.log(currentUser);