function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Perform your login logic here

  // For now, we'll just display the entered username and password
  alert("E-mail: " + email + "\nPassword: " + password);

  // You can redirect the user to another page after successful login
  // window.location.href = "dashboard.html";
}

