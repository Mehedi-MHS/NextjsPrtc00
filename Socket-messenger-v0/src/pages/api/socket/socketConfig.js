import { Server } from "socket.io";

export const config = {
  api: {
    bodyParser: false,
  },
};

const ioHandler = (req, res) => {
  if (!res.socket.server.io) {
    console.log("Creating socket server..");
    const io = new Server(res.socket.server, {
      path: "/api/socket/socketConfig",
      addTrailingSlash: false,
    });
    res.socket.server.io = io;
  }
  res.end();
};
export default ioHandler;
