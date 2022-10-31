var socket = io.connect("http://localhost:3000/");

var messageEl = document.getElementById("message")
var sendBtn = document.getElementById("send")
var usernameEl = document.getElementById("username")
var showMessageEl = document.getElementById("show-message")

sendBtn.addEventListener("click", function() {
    socket.emit("sendingMessage", {
        message: messageEl.value,
        username: usernameEl.value
    });
});

socket.on("broadcastMessage", function(data) {
    showMessageEl.innerHTML += `<p><strong>${data.username}:</strong> ${data.message}</p>`
})