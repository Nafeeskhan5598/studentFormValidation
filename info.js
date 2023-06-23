


document.getElementsByTagName("form")[0].onsubmit = function (e) {
    var nafees = document.getElementById('name').value
    var no = document.getElementById('Mobile').value
    var pass = document.getElementById('pwd').value
    var code = document.getElementById('pin').value
    var write = document.getElementById('txt').value
    e.preventDefault();
    if (nafees == "") {
        document.getElementById('full-name').innerHTML = ' **Please Enter Your Name';

    } else if ((nafees.length <= 4) || (nafees.length > 20)) {
        document.getElementById('full-name').innerHTML = ' **User Length Must Be Between 4 and 20';
        return false;
    } else if (!isNaN(nafees)) {
        document.getElementById('full-name').innerHTML = ' **Only Character Are Allowed';
        return false;
    }
    else {
        document.getElementById('full-name').innerHTML = '';
    }
    ///-----------------------------------now condition for number------------------
    if (nafees) {
        if (no == "") {
            document.getElementById('mobile-no').innerHTML = ' **Please Enter Your Mobile No.';
        } else if (isNaN(no)) {
            document.getElementById('mobile-no').innerHTML = ' **User Must Write Digits only Not Characters';
            return false;
        } else if ((no.length != 10)) {
            document.getElementById('mobile-no').innerHTML = ' **Mobile Number Must Be 10 Digits';
            return false;
        } else {
            document.getElementById('mobile-no').innerHTML = ' ';
        }
    }

    if (no) {
        if (pass == "") {
            document.getElementById('password').innerHTML = ' **Please Enter Password';
            return false;
        } else if (isNaN(pass)) {
            document.getElementById('password').innerHTML = '**User Must Write Digits only Not Characters '
            return false;
        } else if ((pass.length <= 5) || (pass.length > 20)) {
            document.getElementById('password').innerHTML = '**User Password Length Must Be Beetwin 5 and 20'
            return false;
        } else {
            document.getElementById('password').innerHTML = '';
        }
    }
    if (pass) {
        if (code == "") {
            document.getElementById('pin-code').innerHTML = ' **Please Enter Your Pin Code No.'
        } else if (code.length != 6) {
            document.getElementById('pin-code').innerHTML = ' **Pin Code Number Must Be 6 Digits'
            return false;
        } else if (isNaN(code)) {
            document.getElementById('pin-code').innerHTML = '**User Must Write Digit Only Not Character'
            return false;
        } else {
            document.getElementById('pin-code').innerHTML = '';
        }
    }
    if (code) {
        if (write == "") {

            document.getElementById('text-area').innerHTML = '**Please Enter Any Text'
        } else {
            document.getElementById('text-area').innerText = ""

        }
    }

    if (nafees && no && pass && code && write) {
        swal("Good job!", "Your Form Are Successfully Submited!", "success");

    }
}




// fetch('https://url.com', { method: 'GET' })
// .then(function (info) {
//     info.json()
// })
// .then(function (response) {
//     let data = response
// })
// .catch(function(error){
//     error
// })
