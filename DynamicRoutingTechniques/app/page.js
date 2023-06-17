import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/blog/01">
        <h1 className="text-blue-500 underline">Blog 1</h1>
      </Link>
      <Link href="/blog/02">
        <h1 className="text-blue-500 underline">Blog 2</h1>
      </Link>
      <p>
        Here we have used{" "}
        <div className="text-green-600">
          functionName(&#123; params : &#123;id&#125;&#125;) .
        </div>
        So we dont need to use :
      </p>
      <code className="text-red-600">
        export async function generateStaticParams() &#123; return
        Album.map((photo) =&gt; (&#123; id: photo.id.toString(), &#125;));
        &#125;
      </code>
    </>
  );
}
