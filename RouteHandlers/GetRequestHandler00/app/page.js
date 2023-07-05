import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Handling api route</h1>
      <h2>
        Visit:{" "}
        <Link className="underline text-blue-700" href="/api/hello/">
          api/hello/
        </Link>
      </h2>
    </>
  );
}
