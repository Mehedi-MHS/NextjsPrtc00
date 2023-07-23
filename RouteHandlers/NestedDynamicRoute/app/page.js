import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Nested Dynamic route</h1>
      <h2>
        Visit:{" "}
        <Link className="underline text-blue-700" href="api/username/John Doe">
          api/username/John Doe
        </Link>
      </h2>
      <h2>
        <Link className="underline text-blue-700" href="api/username/Jennifer">
          api/username/Jennifer
        </Link>
      </h2>
      <h2>
        <Link className="underline text-blue-700" href="api/username/Tigris">
          api/username/Tigris
        </Link>
      </h2>
    </>
  );
}
