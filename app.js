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


// AJAX

let form = document.getElementById("my-form");
    
// async function handleSubmit(event) {
//   event.preventDefault();
//   let status = document.getElementById("status");
//   let data = new FormData(event.target);
//   fetch(event.target.action, {
//     method: form.method,
//     body: data,
//     headers: {
//         'Accept': 'application/json'
//     }
//   }).then(response => {
//     if (response.ok) {
//       status.innerHTML = "Thanks for your submission!";
//       form.reset()
//     } else {
//       response.json().then(data => {
//         if (Object.hasOwn(data, 'errors')) {
//           status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
//         } else {
//           status.innerHTML = "Oops! There was a problem submitting your form"
//         }
//       })
//     }
//   }).catch(error => {
//     status.innerHTML = "Oops! There was a problem submitting your form"
//   });
// }
// form.addEventListener("submit", handleSubmit)






