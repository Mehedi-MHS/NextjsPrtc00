import Image from "next/image";
import Album from "../../../public/album.json";

export async function generateStaticParams() {
  return Album.map((photo) => ({
    id: photo.id.toString(),
  }));
}

export default function Photopage({ params }) {
  const currentPhoto = Album.find((p) => p.id === parseInt(params.id));
  return (
    <>
      <Image
        className="mx-auto shadow-sm mb-2 mt-2"
        src={currentPhoto.url}
        width={500}
        height={500}
        alt={currentPhoto.title}
      ></Image>
      <h1 className="text-center text-slate-600">{currentPhoto.title}</h1>
    </>
  );
}
