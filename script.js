const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = input.nextElementSibling;
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isValidEmail(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email.value.match(regex)) {
        showError(email, 'Email is not valid');
    }
}

/*
//Event Listener (using if else statements)
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log('submit form');
    if (username.value === '') {
        showError(username, 'Username is required');
    }
    else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Email is required');
    }
    else if (!isValidEmail(email.value)) {
        showError(email, 'Email is not valid');
    }
    else {
        showSuccess(email)
    }
})
*/

function checkRequired(inputArr) {

    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);

        } else {
            showSuccess(input);
        }
    });
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} can not be less than ${min} characters`);
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} can not be more than ${max} characters`);
    }
    else {
        showSuccess(input);
    }
}

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Password do not match');
    }
}

//Event Listener (using function)
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 5, 15);
    checkLength(password, 7, 25);

    isValidEmail(email);
    checkPasswordMatch(password, password2);
})