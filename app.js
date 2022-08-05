let register = document.getElementById('register');
let login = document.getElementById('loginUser');
let registerBtn = document.getElementById('registerBtn');
let loginBtn = document.getElementById('loginBtn');

register.style.display = 'none';

// registerBtn.addEventListener('click', function() {
//     login.style.display = 'none';
//     register.style.display = 'block';
// });

loginBtn.addEventListener('click', function() {
    register.style.display = 'none';
    login.style.display = 'block';
});