"use client";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

export default function HOME() {
  const [connected, setConnected] = useState(false);
  const [socket, setSocket] = useState(null);
  const [newMessege, setNewMessege] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const newSocket = io(undefined, {
      path: "/api/socket/socketConfig",
      addTrailingSlash: false,
    });
    if (newSocket && newSocket.connected) {
      setConnected(true);
    } else {
      setConnected(false);
    }
    newSocket.on("messege", (data) => {
      console.log(data);
      setNewMessege((prev) => [...prev, data]);
    });

    setSocket(newSocket);
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  //handleSubmit
  const handleSend = async () => {
    const res = await fetch("/api/socket/socketMessegehandler", {
      method: "POST",
      body: text,
      headers: { "Content-Type": "text/plain" },
    });
    if (res.ok) {
      console.log("Messege Sent successfully");
    }
    setText("");
  };
  return (
    <>
      <h1 className=" mx-auto mt-5 ">
        {connected ? (
          <span className="bg-white inline-block shadow-sm rounded-sm text-green-600 font-extrabold">
            Server Connected
          </span>
        ) : (
          <span className="bg-white inline-block shadow-sm rounded-sm text-red-600 font-extrabold">
            Connecting server...
          </span>
        )}
      </h1>
      <br />
      <ul>
        {newMessege.map((messege, index) => (
          <li
            className="p-2 rounded-sm bg-blue-800 text-white mx-auto my-2"
            key={index}
          >
            {messege}
          </li>
        ))}
      </ul>
      <div className="p-3 rounded-md shadow-sm bg-white grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <input
          type="text"
          value={text}
          className="p-2 rounded-sm text-2xl border w-full"
          placeholder="Type messege.."
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className=" w-full p-2 bg-blue-700 text-white font-blod"
          type="submit"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </>
  );
}
