export default function Blog() {
  const data = fetch("https://This is an error made intensionally.com");
  return (
    <>
      <h1>
        {" "}
        {data}
        It Will Show an error! This text will not be shown. Only the error.js
        file will be rendered.
      </h1>
    </>
  );
}
