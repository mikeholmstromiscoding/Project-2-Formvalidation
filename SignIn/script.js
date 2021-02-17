document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('email').addEventListener('blur', validateemail);
    document.getElementById('passWord').addEventListener('blur', validatepassWord);

    document.getElementById('formReg').addEventListener('submit', function (e) {

        e.preventDefault();
        validateemail()
        validatepassWord()

    });

    function validateemail() {
        const email = document.getElementById('email');
        const regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        const value = document.getElementById('email').value;
        const error = document.getElementById('error_email');

        if (!regEx.test(value)) {
            error.innerHTML = 'Please enter a valid email address.'
            return false
        } else {
            error.innerHTML = ''
            return true
        };
    }

    function validatepassWord() {
        const passWord = document.getElementById('passWord');
        const regEx = /^([a-zA-Z]{8,32})$/;
        const value = document.getElementById('passWord').value;
        const error = document.getElementById('error_passWord');

        if (!regEx.test(value)) {
            error.innerHTML = 'Please enter a valid password of minimum 8 characters.'
            return false
        } else {
            error.innerHTML = ''
            return true
        };
    }

})