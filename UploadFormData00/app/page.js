"use client";
import { useState, useEffect } from "react";

export default function HOME() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/uploads/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    if (response.ok) {
      const data = await response.json();
      alert(JSON.stringify(data));
    }
  };

  return (
    <>
      <form
        className="p-5 shadow-sm flex flex-col gap-4 w-[35%] mx-auto my-10 bg-slate-300"
        onSubmit={handleSubmit}
      >
        <input
          className="p-3 border rounded-md"
          type="text"
          placeholder="Enter your Name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="p-3 border rounded-md"
          type="email"
          placeholder="Enter Your Email Address"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="submit"
          value="UPLOAD"
          className="p-1 bg-blue-700 text-white font-bold"
        />
      </form>
    </>
  );
}
