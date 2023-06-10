import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello World!</h1>
      <Link href="/blog">Go to Blog Page to see the error</Link>
    </>
  );
}
