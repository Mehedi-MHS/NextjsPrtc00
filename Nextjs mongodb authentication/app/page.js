"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <h1 className=" text-center font-extrabold text-3xl text-green-700">
        Welcome to homepage.
      </h1>
      <p> Lorem Ipsun dolor sit amet ..............</p>
      <button
        className="p-2 text-2xl text-white bg-green-600 rounded-sm shadow-sm hover:cursor-pointer"
        onClick={() => router.push("/profile")}
      >
        {" "}
        Visit Profile
      </button>
    </>
  );
}
