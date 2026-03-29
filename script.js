const socket = io();

const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");
const usernameInput = document.getElementById("username");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value && usernameInput.value) {
    socket.emit("chat message", {
      user: usernameInput.value,
      text: input.value
    });
    input.value = "";
  }
});

socket.on("chat message", (msg) => {
  const item = document.createElement("li");
  item.textContent = `${msg.user}: ${msg.text}`;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});