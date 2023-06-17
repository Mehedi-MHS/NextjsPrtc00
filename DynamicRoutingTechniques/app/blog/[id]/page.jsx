import Link from "next/link";
import Blogs from "../../../public/blogs.json";

export default function Blog({ params: { id } }) {
  const currentBlog = Blogs.find((p) => p.id === parseInt(id)); //parseInt(id) is important to convert the id from string to number;
  return (
    <>
      <h1 className="text-center">You have searched page : {id}</h1>
      <div className="p-3 border mx-auto shadow-md text-center w-[80%] bg-white">
        <h1 className="text-3xl text-center">{currentBlog.title}</h1>
        <p className="text-slate-600">{currentBlog.description}</p>
      </div>
      <Link href="/">Home</Link>
    </>
  );
}
