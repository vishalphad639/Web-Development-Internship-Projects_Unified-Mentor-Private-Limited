document.getElementById("logout").addEventListener("click", function (event) {
  event.preventDefault();
  // Implement logout functionality here
  alert("Logout functionality to be implemented");
});

// Fetch and display bill receipts
function fetchBillReceipts() {
  // Dummy data for demonstration
  const receipts = [
    { id: "1", amount: "$50", date: "2024-10-01", status: "Paid" },
    { id: "2", amount: "$30", date: "2024-09-15", status: "Paid" },
  ];

  const receiptsList = document.getElementById("receiptsList");
  receiptsList.innerHTML = receipts.length
    ? receipts
        .map(
          (receipt) =>
            `<p>Receipt ID: ${receipt.id}, Amount: ${receipt.amount}, Date: ${receipt.date}, Status: ${receipt.status}</p>`
        )
        .join("")
    : "<p>No bill receipts found.</p>";
}

// Fetch and display bill notifications
function fetchBillNotifications() {
  // Dummy data for demonstration
  const notifications = [
    { message: "Your bill of $50 is due on 2024-10-01." },
    {
      message: "Your previous bill of $30 was successfully paid on 2024-09-15.",
    },
  ];

  const notificationsList = document.getElementById("notificationsList");
  notificationsList.innerHTML = notifications.length
    ? notifications
        .map((notification) => `<p>${notification.message}</p>`)
        .join("")
    : "<p>No notifications found.</p>";
}

// Call the functions to fetch data on page load
fetchBillReceipts();
fetchBillNotifications();
