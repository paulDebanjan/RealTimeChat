const express = require("express");
const socket = require("socket.io");
var app = express();

var server = app.listen(3000, function() {
    console.log("Listiening to Port 4000");
});

app.use(express.static("public"));
var upgradeServer = socket(server);

upgradeServer.on("connection", function(socket) {
    socket.on("sendingMessage", function(data) {
        upgradeServer.emit("broadcastMessage", data)
    })
    console.log("Websocket connected", socket.id)
})