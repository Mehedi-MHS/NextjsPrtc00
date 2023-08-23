"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = user;
      const request = await fetch("../api/users/v1/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await request.json();
      setLoading(false);
      alert("messege:", data.messege);
      if (data.success) {
        router.push("/profile");
      }
    } catch (error) {
      alert(error.messege);
      console.error(error);
    }
  };

  return (
    <>
      <div className="container w-[100vw] h-[100vh] bg-slate-800">
        <h2 className=" text-center font-extrabold text-3xl text-green-300">
          {loading ? "PROCESSING..." : "LOGIN"}
        </h2>
        <form
          className=" w-[45%] h-[300px] mx-auto my-10 p-4 rounded-md bg-white shadow-md flex flex-col justify-around "
          onSubmit={handleSubmit}
        >
          <input
            className="font-extrabold p-2 rounded border"
            type="email"
            placeholder="Enter your email address"
            required
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            className="font-extrabold p-2 rounded border"
            type="password"
            placeholder="Enter Password"
            required
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <input
            className="text-2xl text-white font-extrabold bg-blue-700 py-1"
            type="submit"
            value="LOGIN"
          />
        </form>

        <div className=" text-center text-white">
          <p>
            Don't have an account ?{" "}
            <Link className=" underline font-bold " href="/signup">
              SIGNUP
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
