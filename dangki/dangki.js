   // JavaScript để thiết lập kích thước mặc định cho trang là 75% zoom
   window.onload = function() {
    var viewportWidth = window.innerWidth;
    var zoomLevel = 110;
    document.body.style.zoom = zoomLevel / 100;
   };
    document.getElementById("log").addEventListener("click", function() {
        window.location.href = "./dangnhap/trangdangnhap.html"; // Chuyển hướng đến trang đăng nhập
    });
    document.getElementById("loginnow").addEventListener("click", function() {
        window.location.href = "./dangnhap/trangdangnhap.html"; // Chuyển hướng đến trang đăng nhập
    });

function signup(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    var emailElement = document.getElementById("email");
    var passwordElement = document.getElementById("Password");
    var agreeElement = document.getElementById("agree");
    var subscribeElement = document.getElementById("subscribe");

    var email = emailElement.value;
    var password = passwordElement.value;
    var agree = agreeElement.checked;
    var subscribe = subscribeElement.checked;

    var errorMessage = document.getElementById("error-message");

    if (password.length < 8) {
        errorMessage.textContent = "Password must be at least 8 characters long.";
        return;
    }

    if (!agree || !subscribe) {
        errorMessage.textContent = "You must agree to the terms and subscribe to the newsletter.";
        return;
    }

    var user = {
        email: email,
        password: password,
    }

    var json = JSON.stringify(user);
    localStorage.setItem(email, json);

    alert("Đăng ký thành công");
    emailElement.value = "";
    passwordElement.value = "";
    agreeElement.checked = false;
    subscribeElement.checked = false;
}
