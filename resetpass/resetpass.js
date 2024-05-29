document.getElementById("log").addEventListener("click", function() {
    window.location.href = "../dangnhap/trangdangnhap.html"; // Chuyển hướng đến trang đăng nhập
});

document.getElementById("sig").addEventListener("click", function() {
    window.location.href = "../dangki/trangdangki.html"; // Chuyển hướng đến trang đăng ký
});

// Kiểm tra email và chuyển hướng nếu hợp lệ
function checkEmail(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    var emailElement = document.getElementById("email");
    var email = emailElement.value;
    var errorMessage = document.getElementById("error-message");

    if (!localStorage.getItem(email)) {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        localStorage.setItem("resetEmail", email); // Lưu email vào localStorage
        window.location.href = "../creatnewpass/createnewpass.html"; // Chuyển hướng đến trang tạo mật khẩu mới
    }
}

// Lắng nghe sự kiện khi người dùng nhấn nút "Send"
document.getElementById("send").addEventListener("click", checkEmail);
