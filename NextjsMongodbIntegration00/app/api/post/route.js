import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
export async function GET() {
  const uri = process.env.MONGO_KEY;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db("blog");
    const collection = db.collection("posts");
    const result = await collection.findOne();
    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}
