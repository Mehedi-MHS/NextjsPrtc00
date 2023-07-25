import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const slug = params.slug;
  return NextResponse.json({ slug });
}

/*
http://localhost:3000/api/items/apple
result:
{
  "slug": "apple"
}
*/
