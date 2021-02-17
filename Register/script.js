

    document.addEventListener("DOMContentLoaded", function () {


        document.getElementById('firstName').addEventListener('blur', validatefirstName);
        document.getElementById('lastName').addEventListener('blur', validatelastName);
        document.getElementById('email').addEventListener('blur', validateemail);
        document.getElementById('passWord').addEventListener('blur', validatepassWord);
        document.getElementById('passWord2').addEventListener('blur', validatepassWord2);
        document.getElementById('textArea').addEventListener('blur', validatetextArea);
        document.getElementById('memberShip1').addEventListener('blur', validatememberShip);
        document.getElementById('memberShip2').addEventListener('blur', validatememberShip);
        document.getElementById('memberShip3').addEventListener('blur', validatememberShip);
        document.getElementById('country').addEventListener('blur', validatecountry);
        document.getElementById('checkBox').addEventListener('blur', validatecheckBox);

        document.getElementById('formReg').addEventListener('submit', function (e) {

            e.preventDefault();

            validatefirstName()
            validatelastName()
            validateemail()
            validatepassWord()
            validatepassWord2()
            validatetextArea()
            validatecountry()
            validatememberShip()
            validatecheckBox()

            let firstnameValid = validatefirstName()
            let lastnameValid = validatelastName()
            let emailValid = validateemail()
            let passwordValid = validatepassWord()
            let password2Valid = validatepassWord2()
            let textareaValid = validatetextArea()
            let countryValid = validatecountry()
            let membershipValid = validatememberShip()
            let checkboxValid = validatecheckBox()



            if (firstnameValid == true && lastnameValid == true && emailValid == true && passwordValid && password2Valid == true && textareaValid == true && countryValid == true && membershipValid == true && checkboxValid == true) {
                window.location = '../Message/message.html';
                return true

            } else {
                return false
            }

        });

        function validatefirstName() {
            const firstName = document.getElementById('firstName');
            const regEx = /^[a-öA-Ö]{2,10}$/;
            const value = document.getElementById('firstName').value;
            const error = document.getElementById('error_firstName');

            if (!regEx.test(value)) {
                error.innerHTML = 'Please enter a name between 2 and 10 characters.'
                return false
            } else {
                error.innerHTML = ''
                return true
            };
        }

        function validatelastName() {
            const lastName = document.getElementById('lastName');
            const regEx = /^[a-öA-Ö]{2,10}$/;
            const value = document.getElementById('lastName').value;
            const error = document.getElementById('error_lastName');

            if (!regEx.test(value)) {
                error.innerHTML = 'Please enter a name between 2 and 10 characters.'
                return false
            } else {
                error.innerHTML = ''
                return true
            };
        }

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

        function validatepassWord2() {
            const passWord2 = document.getElementById('passWord2');
            const value = document.getElementById('passWord').value;
            const value2 = document.getElementById('passWord2').value;
            const error = document.getElementById('error_passWord2');

            if (value2 !== value || value2 === '') {
                error.innerHTML = 'Password is empty, or password confirmation does not match password, try again.'
                return false
            } else if (value2 === value) {
                error.innerHTML = ''
                return true
            } else {
                error.innerHTML = ''

            };
        }

        function validatetextArea() {

            const textArea = document.getElementById('textArea');
            const textLength = document.getElementById('textArea').length;
            const error = document.getElementById('error_textArea');

            if (textArea.textLength >= 140) {
                error.innerHTML = 'Text should not be more than 140 characters.'
                return false
            } else {
                error.innerHTML = ''
                return true
            };

        }

        function validatecountry() {

            const country = document.getElementById('country').value;
            const error = document.getElementById('error_country');

            if (country === 'SELECT') {
                error.innerHTML = 'Please select your country.'
                return false
            } else {
                error.innerHTML = ''
                return true
            };



        }

        function validatememberShip() {

            const memberShip1 = document.getElementById('memberShip1').checked;
            const memberShip2 = document.getElementById('memberShip2').checked;
            const memberShip3 = document.getElementById('memberShip3').checked;
            const error = document.getElementById('error_memberShip');

            if (memberShip1 == '' && memberShip2 == '' && memberShip3 == '') {
                error.innerHTML = 'Please select your bootstrap membership.'
                return false
            } else {
                error.innerHTML = ''
                return true
            };

        }

        function validatecheckBox() {

            const checkBox = document.getElementById('checkBox').checked;
            const error = document.getElementById('error_checkBox');

            if (checkBox == '') {
                error.innerHTML = 'You must agree to our terms of use & privacy.'
                return false
            } else {
                error.innerHTML = ''
                return true
            };

        }

        
    });