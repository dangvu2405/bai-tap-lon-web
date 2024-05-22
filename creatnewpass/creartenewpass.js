document.getElementById("log").addEventListener("click", function() {
    window.location.href = "http://127.0.0.1:5500/dangnhap/trangdangnhap.html"; // Chuyển hướng đến trang đăng nhập
});

document.getElementById("sig").addEventListener("click", function() {
    window.location.href = "http://127.0.0.1:5500/dangki/trangdangki.html"; // Chuyển hướng đến trang đăng ký
});

document.querySelector(".mail").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    var passwordElement = document.getElementById("Password");
    var confirmPasswordElement = document.getElementById("confirmpassword");
    var password = passwordElement.value;
    var confirmPassword = confirmPasswordElement.value;
    var errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
        errorMessage.style.display = "block";
        return;
    } else {
        errorMessage.style.display = "none";
    }

    // Update mật khẩu trong localStorage
    var email = localStorage.getItem("resetEmail");
    var user = JSON.parse(localStorage.getItem(email));
    user.password = password;
    localStorage.setItem(email, JSON.stringify(user));

    // Thông báo thành công và chuyển hướng
    alert("Password reset successfully!");
    window.location.href = "http://127.0.0.1:5500/dangnhap/trangdangnhap.html"; // Chuyển hướng đến trang đăng nhập
});
