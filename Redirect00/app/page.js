import Link from "next/link";
export default function HOME() {
  return (
    <>
      <p>Redirect</p>
      <span>eg:</span>
      <p>
        visit here and you will be redirected to here(homepage):(see console
        messeges)
        <Link
          className="text-blue-700 underline hover:text-blue-500"
          href="http://localhost:3000/api/"
        >
          {" "}
          http://localhost:3000/api/
        </Link>
      </p>
    </>
  );
}
