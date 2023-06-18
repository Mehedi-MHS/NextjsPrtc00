"use client";
import ModalSkeleton from "../../../../components/modal/ModalSkeleton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Album from "../../../../public/album.json";
function ModalContent({ photoURL, title }) {
  return (
    <>
      <Image
        className="mx-auto"
        src={photoURL}
        width={500}
        height={500}
        alt={title}
      ></Image>
      <h1 className="text-center text-blue-600 mt-2">{title}</h1>
    </>
  );
}

/*
export async function generateStaticParams() {
  return Album.map((photo) => ({
    id: photo.id.toString(),
  }));
}
*/

export default function ModalImage({ params: { id } }) {
  const router = useRouter();
  const currentPhoto = Album.find((p) => p.id === parseInt(id));
  return (
    <>
      {
        <ModalSkeleton
          modalBody={
            <ModalContent
              photoURL={currentPhoto.url}
              title={currentPhoto.title}
            />
          }
          closeClick={() => router.back()} //router.back() is used for closing the modal
        />
      }
    </>
  );
}
