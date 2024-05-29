window.onload = function() {
    var viewportWidth = window.innerWidth;
    var zoomLevel = 110;
    document.body.style.zoom = zoomLevel / 100;
};
document.getElementById("sig").addEventListener("click", function() {
    window.location.href = "./dangki/trangdangki.html"; // Chuyển hướng đến trang đăng nhập
});
document.getElementById("haveacc").addEventListener("click", function() {
    window.location.href = "./dangki/trangdangki.html"; // Chuyển hướng đến trang đăng nhập
});
document.getElementById("signin").addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    var email = document.getElementById("email").value;
    var password = document.getElementById("Password").value;
    var errorMessage = document.getElementById("error-message");

    var user = localStorage.getItem(email);

    if (user) {
        var userObj = JSON.parse(user);
        if (userObj.password === password) {
            alert("Đăng nhập thành công");
            window.location.href = "https://www.trangchu.com";
        } else {
            alert("Mật khẩu không đúng");
        }
    } else {
        alert("Email không tồn tại");
    }
});
