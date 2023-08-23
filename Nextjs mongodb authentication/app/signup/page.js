"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Signup() {
  //It is better to use object to handle multiple state easily
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = user;
    setLoading(true);
    try {
      const res = await fetch("../api/users/v1/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setLoading(false);
      alert(JSON.stringify(data.messege));
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container w-[100vw] h-[100vh] bg-slate-800">
        <h2 className=" text-center font-extrabold text-3xl text-red-300">
          {loading ? "PROCESSING.." : "SIGNUP"}
        </h2>
        <form
          className=" w-[45%] h-[300px] mx-auto my-10 p-4 rounded-md bg-white shadow-md flex flex-col justify-around "
          onSubmit={handleSubmit}
        >
          <input
            className="font-extrabold p-2 rounded border"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            required
          />
          <input
            className="font-extrabold p-2 rounded border"
            type="email"
            placeholder="Enter your email address"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          <input
            className="font-extrabold p-2 rounded border"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
          <input
            className="text-2xl text-black font-extrabold bg-blue-400 py-1"
            type="submit"
            value="SIGNUP"
          />
        </form>

        <div className=" text-center text-white">
          <p>
            Already have an account ?{" "}
            <Link className=" underline font-bold " href="/login">
              LOGIN
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
