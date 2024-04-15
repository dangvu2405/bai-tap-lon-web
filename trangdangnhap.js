
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    var errorFields = document.getElementsByClassName('error');
    for (var i = 0; i < errorFields.length; i++) {
        errorFields[i].innerText = '';
    }

    
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var address = document.getElementById('address').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneNumberPattern = /^\d{10,}$/;

   
    var error = false;

   
    if (fullName.length < 3) {
        document.getElementById('fullNameError').innerText = 'Họ và tên phải có ít nhất 3 ký tự';
        error = true;
    }
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Email không hợp lệ';
        error = true;
    }
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Mật khẩu phải có ít nhất 6 ký tự';
        error = true;
    }
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Xác nhận mật khẩu không khớp';
        error = true;
    }
    if (address === '') {
        document.getElementById('addressError').innerText = 'Địa chỉ không được để trống';
        error = true;
    }
    if (!phoneNumberPattern.test(phoneNumber)) {
        document.getElementById('phoneNumberError').innerText = 'Số điện thoại không hợp lệ';
        error = true;
    }


    var passwordStrength = getPasswordStrength(password);
    if (passwordStrength === 'weak') {
        document.getElementById('passwordError').innerText = 'Mật khẩu yếu';
        error = true;
    } else if (passwordStrength === 'medium') {
        document.getElementById('passwordError').innerText = 'Mật khẩu trung bình';
    }

    if (!error) {
        alert('Đăng ký thành công');
        document.getElementById('registrationForm').reset();
    }
});
function getPasswordStrength(password) {
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumber = /\d/.test(password);
    if (password.length < 8 || (!hasUpperCase && !hasLowerCase && !hasNumber)) {
        return 'weak';
    } else if ((password.length >= 8 && password.length < 12) && (hasUpperCase || hasLowerCase || hasNumber)) {
        return 'medium';
    } else {
        return 'strong';
    }
}
