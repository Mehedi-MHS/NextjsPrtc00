import Link from "next/link";
export default function HOME() {
  return (
    <>
      <p>Handling Cookie (Mehthod 1)</p>
      <span>eg:</span>
      <p className="text-blue-700 underline hover:text-blue-500">
        <Link href="http://localhost:3000/api/">
          {" "}
          visit here to set/get cookie: http://localhost:3000/api/
        </Link>
      </p>
      <p>First Output: Cookie Set successfully!</p>
      <p>
        then, Output:
        {`{
  "cookie": {
    "name": "token",
    "value": "Lorem#Ipsum@dolor123",
    "path": "/"
  }
}`}
      </p>
    </>
  );
}
