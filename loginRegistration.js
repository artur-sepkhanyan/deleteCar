import {english} from './english.js';
import {arm} from './arm.js';
import {rus} from './rus.js';
const registeredUsers = localStorage.getItem('users');
const users = registeredUsers ? JSON.parse(registeredUsers) : [];
const reg = document.getElementById('rgstr_btn');
const log = document.getElementById('form-login');
const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g;
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}


let changeUserName = document.getElementById('changeUserName');
let changeUserPass = document.getElementById('changePassword');
let changeLoginButton = document.getElementById('log_btn');
let changeRegButton = document.getElementById('rgstr_btn');

const languageBar = document.getElementById("language");

function changeLanguage() {
    switch (languageBar.value) {
        case "RU":
            changeUserName.textContent = rus[0].login;
            changeUserPass.textContent = rus[0].password;
            changeLoginButton.value = rus[0].loginButton;
            changeRegButton.value = rus[0].goToRegisterButton;
            break;
        case "HY":
            changeUserName.textContent = arm[0].login;
            changeUserPass.textContent = arm[0].password;
            changeLoginButton.value = arm[0].loginButton;
            changeRegButton.value = arm[0].goToRegisterButton;
            break;
        default:
            changeUserName.textContent = english[0].login;
            changeUserPass.textContent = english[0].password;
            changeLoginButton.value = english[0].loginButton;
            changeRegButton.value = english[0].goToRegisterButton;

    }
}

languageBar.addEventListener('change', changeLanguage);

let store = () => {
    let nameSurname = document.forms[0].name.value;
    let email = document.forms[0].email.value;
    let pw = document.forms[0].pw.value;
    let cpw = document.forms[0].cpw.value;
    let myUsers = new User(nameSurname, email, pw);

    if (!email || !pw || !pw.match(numbers)
        || !pw.match(upperCaseLetters) || !pw.match(lowerCaseLetters)
        || pw !== cpw) {
        alert('Please fill in all the fields')
    } else {
        users.push(myUsers);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Your account has been created');

    }
}

let check = (e) => {
    e.preventDefault()
    debugger
    let email = document.forms[0].userName.value;
    let pass = document.forms[0].userPw.value;

    debugger
    let user = users.find(el => {
        return el.email === email && el.password === pass;
    });
    if (user) {
        alert('You are logged in.');
        window.location = 'file:///Users/fastshift/Desktop/Internship/deleteCar/cars.html'
    } else {
        alert('User not found');
    }
}
reg.addEventListener('click', store);
log.addEventListener('submit', check);
