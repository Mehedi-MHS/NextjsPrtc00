import Link from "next/link";
export default function HOME() {
  return (
    <>
      <p>
        Also can use ThunderClient/Postman to send request to
        http://localhost:3000/api/?id=[idNumberHere]
      </p>
      <span>eg:</span>
      <p className="text-blue-700 underline hover:text-blue-500">
        <Link href="http://localhost:3000/api/?id=150">
          http://localhost:3000/api/?id=150
        </Link>
      </p>
      <p className="text-blue-700 underline hover:text-blue-500">
        <Link href="http://localhost:3000/api/?id=5000">
          http://localhost:3000/api/?id=5000
        </Link>
      </p>
    </>
  );
}
