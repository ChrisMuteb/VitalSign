const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require('http')
const { Server } = require('socket.io');

const authRoutes = require("./routes/auth.routes");
const aiRoutes = require("./routes/ai.routes");
const appointmentRoutes = require("./routes/appointment.routes");
const userRoutes = require("./routes/user.routes");


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  }
});

app.use("/vitalsign", authRoutes);
app.use('/vitalsign', aiRoutes);
app.use("/vitalsign/appointment", appointmentRoutes);
app.use("/vitalsign/user", userRoutes);

//listion for an event with this name 'connection'
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`)
  })

  socket.on('send_message', (data) => {
    // console.log(data);
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log('User Disconnected', socket.id);
  })
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
