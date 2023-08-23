import getDataFromToken from "@/app/helpers/getDataFromToken";
import User from "@/app/model/User";
import { connectDatabase } from "@/app/dbConfig/dbConfig";
import { NextResponse } from "next/server";

connectDatabase();
export async function POST(request) {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    console.log("from userinfo: ", user);
    return NextResponse.json({ messege: "User found!", data: user });
  } catch (error) {
    return NextResponse.json({ messege: error.messege }, { status: 400 });
  }
}
