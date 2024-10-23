// import firebase from "firebase/app";
// import "firebase/firestore";

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Handle login logic here (e.g., Firebase authentication)
    alert("Login functionality to be implemented");
  });

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Handle registration logic here (e.g., Firebase user creation)
    alert("Registration functionality to be implemented");
  });

// Show Registration Form
document
  .getElementById("showRegister")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("loginCard").style.display = "none";
    document.getElementById("registrationCard").style.display = "block";
  });

// Show Login Form
document
  .getElementById("showLogin")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("registrationCard").style.display = "none";
    document.getElementById("loginCard").style.display = "block";
  });

// Example of how to get the selected role during form submission
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const role = document.querySelector('input[name="role"]:checked').value;
    alert(`Login as ${role} functionality to be implemented`);
  });

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const role = document.querySelector('input[name="role"]:checked').value;
    alert(`Register as ${role} functionality to be implemented`);
  });

// app.js
async function addMember(name, email, phone) {
  try {
    await db.collection("members").add({
      name: name,
      email: email,
      phone: phone,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log("Member added successfully!");
  } catch (error) {
    console.error("Error adding member: ", error);
  }
}

// Attach this function to your form submission
document
  .querySelector("#addMemberForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    addMember(name, email, phone);
  });
