const userName = document.getElementById("user-name");
const password = document.getElementById("psw");
const register = document.getElementById("register");


// user-name and password are new identifiers, to store the values of username and password
// in local storage.
function store(event) {
    event.preventDefault();
  localStorage.setItem("user-name", userName.value);
  localStorage.setItem("password", password.value);
  alert("registered successfully!");
  window.location.href = "./sign-in.html";
}

register.addEventListener("click", store);

