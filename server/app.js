const express = require('express');
const http = require("http");

const app = express();
const server = http.createServer(app);
const socketio = require("socket.io");

const port = 5000;

const cors = require("cors")
// const roomRoutes = require("./src/routes/roomRoutes");
const userRoutes = require("./src/routes/user-routes");
const io = socketio(server, {
    cors: {
        origin: "http://127.0.0.1:3000",
        method: ["GET", "POST", "PUT"]
    }
});

app.use(cors());
app.use(express.json());
app.use("/v1/user", userRoutes);

require('./src/database/index')

io.connect("connection", (socket) => {
    console.log("connected...")

    socket.on("disconnect", () => {
        console.log("user disconnected...")
    })
})

server.listen(port, () =>
    console.log(`App listening on port ${port}!`)
);
