import Image from "next/image";
import Album from "../components/album";

export default function Home() {
  return (
    <>
      <div className="w-90 overflow-y-scroll h-full px-20 py-20 rounded-sm bg-slate-500 mx-auto mt-24 ">
        <Album />
      </div>
      <h1 className="mt-1/2 text-center text-2xl text-blue-600">Blogs</h1>
      <p>
        Lorem Ipsum Dolor Dit Msrer sldf iiehd iuu manage mango mad maridadfs
        sfhjdhj jhdkj hskj hdhfkdf skhjk
      </p>
    </>
  );
}
