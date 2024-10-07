const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const usernameInput = document.getElementById("username-input");
const joinButton = document.getElementById("join-button");
const roomList = document.getElementById("room-list");
const socket = new WebSocket("ws://localhost:3000");

let username;
let currentRoom = "General";

// Handle user joining
joinButton.addEventListener("click", () => {
  username = usernameInput.value.trim();
  if (username) {
    socket.send(JSON.stringify({ type: "join", username }));
    usernameInput.disabled = true;
    joinButton.disabled = true;
    loadRoom(currentRoom);
  }
});

// Load a chat room
function loadRoom(room) {
  currentRoom = room;
  chatBox.innerHTML = ""; // Clear previous messages
  socket.send(JSON.stringify({ type: "joinRoom", room }));
}

// Send message
sendButton.addEventListener("click", () => {
  const messageText = messageInput.value.trim();
  if (messageText) {
    const message = {
      type: "message",
      room: currentRoom,
      username,
      text: messageText,
    };
    socket.send(JSON.stringify(message));
    messageInput.value = ""; // Clear input
  }
});

// Handle incoming messages
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.type === "message") {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message");
    messageElement.textContent = `${data.timestamp} [${data.username}]: ${data.text}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
  }
};

// Example room list
const rooms = ["General", "Sports", "Technology"];
rooms.forEach((room) => {
  const roomElement = document.createElement("div");
  roomElement.textContent = room;
  roomElement.addEventListener("click", () => loadRoom(room));
  roomList.appendChild(roomElement);
});
