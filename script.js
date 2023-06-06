function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform your login logic here

  // For now, we'll just display the entered username and password
  alert("Username: " + username + "\nPassword: " + password);

  // You can redirect the user to another page after successful login
  // window.location.href = "dashboard.html";
}

