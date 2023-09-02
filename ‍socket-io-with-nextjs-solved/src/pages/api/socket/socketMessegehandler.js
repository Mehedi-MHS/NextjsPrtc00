export default function socketMessegehandler(req, res) {
  res?.socket?.server?.io?.on("connection", (socket) => {
    console.log("backend: Socket connected");
    socket.on("sendPost", (data) => {
      console.log("backend:", data);
      socket.emit("newNotice", data);
    });
  });
}

/*
 res?.server?.on("connection", (socket) => {
    console.log("A client connected");

    socket.on("sendPost", (data) => {
      console.log(data);
      socket.emit("newNotice", data);
    });

    socket.on("disconnect", () => {
      console.log("A client disconnected.");
    });
  });
  */
