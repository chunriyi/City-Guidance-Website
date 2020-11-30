const login = document.getElementById("login");
const loginUser = document.getElementById("login-user");
const loginPsw = document.getElementById("login-psw");
const storedName = localStorage.getItem("user-name");
const storedPsw = localStorage.getItem("password");

function check(event) {
    event.preventDefault();

  if (loginUser.value !== storedName || loginPsw.value !== storedPsw)
    alert("You haven't registered yet.");
  else {
    alert("You are logged in.");
  }

}

login.addEventListener("click", check);