import { NextResponse } from "next/server";
export async function POST(request) {
  //const formData = await request.formData();
  const { name, email } = await request.json();
  //const name = formData.get("name");
  // const email = formData.get("email");
  return NextResponse.json({ name, email });
}
