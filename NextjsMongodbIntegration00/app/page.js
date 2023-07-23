"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("/api/post/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>POST Data</h1>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <p>{`Likes: ${data.likes}`}</p>
    </>
  );
}

/*
{
  "_id": "64a958ed5284053f793d4d5c",
  "title": "Post Title 1",
  "body": "Body of the post",
  "category": "News",
  "likes": 2,
  "tags": [
    "news",
    "events"
  ],
  "date": "Sat Jul 08 2023 18:39:09 GMT+0600 (Bangladesh Standard Time)"
}
*/
