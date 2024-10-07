document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulate a simple login check
    if (username === "admin" && password === "admin123") {
      // Redirect to Admin dashboard
      window.location.href = "admin.html";
    } else if (username === "member" && password === "member123") {
      // Redirect to Member dashboard
      window.location.href = "member.html";
    } else if (username === "user" && password === "user123") {
      // Redirect to User dashboard
      window.location.href = "user.html";
    } else {
      // Show error message
      document.getElementById("loginError").innerHTML =
        "Invalid Username or Password";
      document.getElementById("loginError").style.color = "red";
    }
  });
