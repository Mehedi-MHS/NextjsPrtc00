import Image from "next/image";

export default function Balance() {
  return (
    <>
      <div className="w-33 h-full bg-green-800 text-white text-2xl p-5 grid place-items-center ">
        <h1>Balance</h1>
        <Image
          src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80"
          alt="Money picture"
          width={300}
          height={300}
        />
      </div>
    </>
  );
}
