function showEditForm() {
    document.getElementById("nameForm").style.display = "block";
}

function cancelEdit() {
    document.getElementById("nameForm").style.display = "none";
}

function updateName(event) {
    event.preventDefault();

    var newName = document.getElementById("nameInput").value;
    document.getElementById("nameDisplay").innerText = "Họ và tên: " + newName;

    document.getElementById("nameForm").style.display = "none";
}
function changePassword(event) {
    event.preventDefault();

    var currentPassword = document.getElementById("currentPassword").value;
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var passwordStatus = document.getElementById("passwordStatus");

    if (newPassword !== confirmPassword) {
        passwordStatus.innerText = "Mật khẩu mới và xác nhận mật khẩu không khớp.";
        passwordStatus.style.color = "red";
    } else {
        // Thực hiện xác nhận mật khẩu và cập nhật logic tại đây.
        // Trong ví dụ này, chỉ in thông báo thành công.

        passwordStatus.innerText = "Đã đổi mật khẩu thành công!";
        passwordStatus.style.color = "green";

        // Đặt trạng thái của các trường input về trống
        document.getElementById("currentPassword").value = "";
        document.getElementById("newPassword").value = "";
        document.getElementById("confirmPassword").value = "";
    }
}
function showAddressForm() {
    document.getElementById("addressForm").style.display = "block";
    document.getElementById("addressDisplay").style.display = "none";
}

function changeAddress(event) {
    event.preventDefault();

    var newAddress = document.getElementById("newAddress").value;
    var addressStatus = document.getElementById("addressStatus");
    var currentAddressSpan = document.getElementById("currentAddress");

    // Thực hiện xác nhận thay đổi địa chỉ và cập nhật logic tại đây.
    // Trong ví dụ này, chỉ in thông báo thành công.

    addressStatus.innerText = "Đã thay đổi địa chỉ thành công!";
    addressStatus.style.color = "green";

    currentAddressSpan.innerText = newAddress;

    // Ẩn form chỉnh sửa và hiển thị lại thông tin địa chỉ
    document.getElementById("addressForm").style.display = "none";
    document.getElementById("addressDisplay").style.display = "block";
}
