import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Homepage..</h1>
      <Link href="/dashboard" className=" text-blue-800 underline">
        Visit dashboard page. &gt;
      </Link>
    </>
  );
}
