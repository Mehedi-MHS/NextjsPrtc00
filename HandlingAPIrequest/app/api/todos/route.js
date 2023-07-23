import { NextResponse } from "next/server";

const url = "https://jsonplaceholder.typicode.com/todos";

export async function GET() {
  const res = await fetch(url);
  const todos = await res.json();
  return NextResponse.json(todos);
}
