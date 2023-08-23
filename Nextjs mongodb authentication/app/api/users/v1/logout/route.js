import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    cookies().set({
      name: "token",
      value: "",
      httpOnly: true,
      expires: new Date(0),
    });
    return NextResponse.json({ messege: "Logout Successfull", success: true });
  } catch (error) {
    return NextResponse.json({ messege: error.messege, success: false });
  }
}
