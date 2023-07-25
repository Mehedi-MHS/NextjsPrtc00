import Link from "next/link";
export default function HOME() {
  return (
    <>
      <p>Dynamic route segments (slug used in dynamic path.)</p>
      <span>eg:</span>
      <p>
        visit those links and many more to see result. Can use
        ThunderClient/Postman for this.
        <Link
          className="text-blue-700 underline hover:text-blue-500"
          href="http://localhost:3000/api/items/apple"
        >
          {" "}
          http://localhost:3000/api/items/apple
        </Link>
      </p>
      <p>
        <Link
          className="text-blue-700 underline hover:text-blue-500"
          href="http://localhost:3000/api/items/banana"
        >
          {" "}
          http://localhost:3000/api/items/banana
        </Link>
      </p>
    </>
  );
}
