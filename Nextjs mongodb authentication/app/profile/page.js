"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    fetch("../api/users/v1/userinfo/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setUser(data.data));
  }, []);

  const logout = async () => {
    try {
      const response = await fetch("../api/users/v1/logout/", {
        method: "GET",
      });
      const data = await response.json();
      alert(data.messege);
      router.push("/login");
    } catch (error) {
      console.log("logout failed:", error);
    }
  };

  return (
    <>
      <h1 className="text-center text-blue-900 text-3xl font-extrabold">
        Welcome to Profile{" "}
        <span className="text-red-500">{user.name ? user.name : "..."}</span>
      </h1>
      <br />
      <h3>Email: {user.email ? user.email : "..."}</h3>
      <br />
      <h3>ID: {user._id ? user._id : "..."}</h3>
      <hr />

      <br />
      <h3>Registered At: {user.registeredAT ? user.registeredAT : "..."}</h3>
      <button
        onClick={logout}
        className="p-2 rounded-sm text-white bg-red-600 font-2xl"
      >
        LogOut
      </button>
    </>
  );
}
