import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home sweet home!</h1>
      <h1>
        Visit to see non-UI response{" "}
        <Link
          href="http://localhost:3000/api"
          className="text-blue-600 underline"
        >
          http://localhost:3000/api
        </Link>
      </h1>
    </>
  );
}
