export default async function getImageData() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
