import Image from "next/image";
export default function Analytics() {
  return (
    <>
      <div className="w-33 h-full bg-blue-800 text-white text-2xl p-5 grid place-items-center  ">
        <h1>Analytics</h1>
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          width="300"
          height="300"
          alt="dashboard Image"
          loading="lazy"
        />
      </div>
    </>
  );
}
