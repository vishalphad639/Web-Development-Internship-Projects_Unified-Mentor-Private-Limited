// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB6DSGjVPivwRJBUOL3-957PxJJWV0l87c",
  authDomain: "student-teacher-appointm-6fb0f.firebaseapp.com",
  projectId: "student-teacher-appointm-6fb0f",
});

// User Registration
document
  .getElementById("registerStudentForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("studentEmail").value;
    const password = document.getElementById("studentPassword").value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("Student registered!");
        // Add additional student info to Firestore if needed
      })
      .catch((error) => {
        console.error("Registration error: ", error);
      });
  });
// Inside user registration
firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // User registered, now save additional info to Firestore
    const userId = userCredential.user.uid;
    const additionalData = {
      name: name,
      surname: surname,
      mobile: mobile,
      uniqueId: uniqueId,
      role: currentRole,
    };

    // Save user data to Firestore
    firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .set(additionalData)
      .then(() => {
        console.log("User data saved!");
      })
      .catch((error) => {
        console.error("Error saving user data: ", error);
      });
  })
  .catch((error) => {
    console.error("Registration error: ", error);
  });

// User Login
document
  .getElementById("loginForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("User logged in!");
      })
      .catch((error) => {
        console.error("Login error: ", error);
      });
  });
// Inside user login
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("User logged in!");
        // Redirect to the appropriate dashboard based on user role
        const userId = userCredential.user.uid;
        firebase
          .firestore()
          .collection("users")
          .doc(userId)
          .get()
          .then((doc) => {
            if (doc.exists) {
              const userData = doc.data();
              // Redirect based on user role
              if (userData.role === "student") {
                window.location.href = "student.html";
              } else if (userData.role === "teacher") {
                window.location.href = "teacher.html";
              } else if (userData.role === "admin") {
                window.location.href = "admin.html";
              }
            }
          })
          .catch((error) => {
            console.error("Error fetching user data: ", error);
          });
      })
      .catch((error) => {
        console.error("Login error: ", error);
      });
  });

// Add Teacher (Admin)
document
  .getElementById("addTeacherForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const teacherData = {
      name: document.getElementById("teacherName").value,
      department: document.getElementById("teacherDepartment").value,
      subject: document.getElementById("teacherSubject").value,
    };
    addTeacher(teacherData);
  });

function addTeacher(teacherData) {
  const db = firebase.firestore();
  db.collection("teachers")
    .add(teacherData)
    .then(() => {
      console.log("Teacher added!");
    })
    .catch((error) => {
      console.error("Error adding teacher: ", error);
    });
}

// Function to search teachers
function searchTeachers() {
  const query = document.getElementById("searchTeacher").value;
  const db = firebase.firestore();
  db.collection("teachers")
    .where("name", "==", query)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.data());
        // Display teacher info
      });
    });
}
document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Password validation
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@]).{8,}$/;
    if (!passwordPattern.test(password)) {
      alert("Enter Password");
      return;
    }

    // Proceed with registration logic, e.g., Firebase auth
    console.log("Registration Data:", {
      firstName,
      lastName,
      mobile,
      email,
      password,
    });
    // Add Firebase registration code here
  });
