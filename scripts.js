const loginForm = document.getElementById('login');
const registerForm = document.getElementById('register');
const btn = document.getElementById('btn');

function showLogin() {
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    btn.style.left = "0";
}

function showRegister() {
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
    btn.style.left = "50%";
}

document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login form submitted!');
});

document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registration form submitted!');
});

window.onload = showLogin;
