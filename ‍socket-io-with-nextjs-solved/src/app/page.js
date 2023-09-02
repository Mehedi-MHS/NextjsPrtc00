"use client";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

export default function HOME() {
  const [socket, setSocket] = useState(null);
  const [newNotice, setNewNotice] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    socketInitializer();
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  async function socketInitializer() {
    //await fetch("/api/socket/socketConfig");

    const newSocket = io(undefined, {
      path: "/api/socket/socketConfig",
    });
    newSocket.on("connection", () => {
      alert("frontend:Socket connected");
    });
    newSocket.on("newNotice", (data) => {
      console.log(data);
      setNewNotice(true);
    });
    newSocket.on("disconnect", () => {
      console.log("Socket disconnected");
    });
    setSocket(newSocket);
  }

  //handleSubmit
  const handleSubmit = () => {
    if (socket && socket.connected) {
      socket.emit("sendPost", text);
      alert("Sending user data..");
    } else {
      console.log("frontend: Socket is not defined");
    }
  };
  return (
    <>
      <button className=" mx-auto mt-5 p-2 rounded-sm shadow-sm bg-blue-700 text-white text-2xl font-extrabold">
        {newNotice ? " 1 Unread messege" : "No messege"}
      </button>
      <br />
      <div className="p-3 rounded-md shadow-sm bg-white flex flex-col justify-around">
        <input
          type="text"
          className="p-2 rounded-sm text-2xl border"
          placeholder="messege.."
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Send
        </button>
      </div>
    </>
  );
}
