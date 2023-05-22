var pass = document.querySelector('#user');
pass.addEventListener('keyup', function(e) {
    var u_times = document.querySelector('.u_times');
    var u_check = document.querySelector('.u_check');
    if (user.value.length == 0 || user.value.length < 6) {
        user.getElementsByClassName.border = '1px solid red';
        u_times.style.display = 'block';
        u_check.style.display = 'none';
        return false;
    } else {
       user.style.border = '1px solid green';
         u_times.style.display = 'none';
        u_check.style.display = 'block';
      
    }

})

function validate() {
    var user = document.querySelector('#user');
    var pass = document.querySelector('#pass');
    if (user.value == 'admin' && pass.value == 'vvit@123') {
        window.location = 'hm.html';
        alert('Login Successfull');
        return true;
    } else {
        alert('Login Failed!...Try Again');
        return false;
    }
}

function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === 'password') {
        x.type = 'text';
    } else {
        x.type = 'pass';
    }
}

