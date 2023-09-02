import { Server } from "socket.io";

export const config = {
  api: {
    bodyParser: false,
  },
};

const ioHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log("Socket Server already running!");
    return;
  } else {
    const io = new Server(res.socket.server, {
      path: "/api/socket/socketConfig",
      addTrailingSlash: false,
    });
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("A user connected");
      socket.on("sendPost", (data) => {
        console.log(data);
        socket.emit("newNotice", data);
      });
    });
  }
  res.end();
};

export default ioHandler;
