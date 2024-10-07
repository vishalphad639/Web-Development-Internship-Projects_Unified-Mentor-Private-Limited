// Admin functionality: Add, Update, Delete teacher and approve students
let teachers = [];
let students = [];

document
  .getElementById("add-teacher-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let teacher = {
      name: document.getElementById("teacherName").value,
      department: document.getElementById("teacherDept").value,
      subject: document.getElementById("teacherSubject").value,
    };
    teachers.push(teacher);
    displayTeachers();
  });

function displayTeachers() {
  let teacherList = document.getElementById("teacher-list");
  teacherList.innerHTML = "";
  teachers.forEach((teacher, index) => {
    teacherList.innerHTML += `<div>
            <p>${teacher.name} - ${teacher.department} - ${teacher.subject}</p>
            <button onclick="deleteTeacher(${index})">Delete</button>
        </div>`;
  });
}

function deleteTeacher(index) {
  teachers.splice(index, 1);
  displayTeachers();
}

// Teacher functionality: Schedule appointments, view all appointments, and messages
let appointments = [];

document
  .getElementById("schedule-appointment-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let appointment = {
      time: document.getElementById("appointmentTime").value,
      date: document.getElementById("appointmentDate").value,
    };
    appointments.push(appointment);
    displayAppointments();
  });

function displayAppointments() {
  let appointmentList = document.getElement;
}
