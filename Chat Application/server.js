const WebSocket = require("ws");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const wss = new WebSocket.Server({ server });

let users = {};
let rooms = {};

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    const data = JSON.parse(message);

    switch (data.type) {
      case "join":
        users[ws] = data.username;
        break;
      case "joinRoom":
        const room = data.room;
        if (!rooms[room]) rooms[room] = [];
        rooms[room].push(ws);
        broadcast(room, {
          type: "message",
          username: "System",
          text: `${users[ws]} has joined the room!`,
        });
        break;
      case "message":
        const { room: currentRoom, username, text } = data;
        const timestamp = new Date().toLocaleTimeString();
        broadcast(currentRoom, { type: "message", username, text, timestamp });
        break;
    }
  });

  ws.on("close", () => {
    // Handle user disconnecting
    const username = users[ws];
    delete users[ws];
    for (const room in rooms) {
      rooms[room] = rooms[room].filter((client) => client !== ws);
    }
    // Notify others that the user has left
    broadcastToAll({
      type: "message",
      username: "System",
      text: `${username} has left the chat.`,
    });
  });
});

function broadcast(room, message) {
  if (rooms[room]) {
    rooms[room].forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  }
}

function broadcastToAll(message) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
}

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
