//We will send get request here and it will return the parameteres from URL
//eg: http://localhost:3000/api/?id=120
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  return NextResponse.json({ id: id });
}
