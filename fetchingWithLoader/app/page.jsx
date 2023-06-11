import Image from "next/image";
import getImageData from "./api/getImageData";
export default async function Homepage() {
  const imageData = getImageData();
  const data = await imageData;
  return (
    <>
      <div className="container bg-slate-400 h-full overflow-scroll">
        {data.map((image) => (
          <div
            key={image.id}
            className="p-3 rounded-md bg-white m-3 float-left shadow-md grid place-items-center"
          >
            <h1>{image.title}</h1>
            <Image
              src={image.url}
              alt={image.title}
              loading="lazy"
              width="300"
              height="300"
            />
          </div>
        ))}
      </div>
    </>
  );
}
