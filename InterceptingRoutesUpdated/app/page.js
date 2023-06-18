import Link from "next/link";
import Album from "../public/album.json";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-center text-gray-900 text-2xl">The Album</h1>
      <div className="mt-5 grid grid-cols-3 grid-rows-1 w-[80%] h-[150px] p-2 gap-2">
        {Album.map((photo) => (
          <Link key={photo.id} href={`/photos/${photo.id}`}>
            <Image
              src={photo.url}
              width={500}
              height={500}
              alt={photo.title}
            ></Image>
          </Link>
        ))}
      </div>
    </>
  );
}
