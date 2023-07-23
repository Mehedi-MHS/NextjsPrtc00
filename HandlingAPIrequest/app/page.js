"use client";
import { MongoClient } from "mongodb";
import { useState } from "react";
export default async function Home() {
  const [data, setData] = useState("");
  const URI =
    "mongodb+srv://developerkitabpotro:mongodb1234@cluster0.f1z7gjg.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db("blog");
    const collection = db.collection("posts");
    const result = await collection.findOne();
    setData(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }

  return (
    <>
      <p>Data From Database.</p>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </>
  );
}
