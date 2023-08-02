import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Handling Middleware in nextjs</h1>
      <h1>
        Visit to see redirect caused by middleware.
        <Link
          href="http://localhost:3000/about/anotherPath"
          className="text-blue-600 underline"
        >
          http://localhost:3000/about/anotherPath
        </Link>
      </h1>
    </>
  );
}
