import { NextResponse } from "next/server";
import { connectDatabase } from "@/app/dbConfig/dbConfig";
import User from "@/app/model/User";
import bcryptjs from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

connectDatabase();

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    console.log("from frontend : ", email, password);
    //Check any field is empty or not
    if (!email || !password) {
      return NextResponse.json(
        { messege: "Email or Password is empty", success: false },
        {
          headers: { "Content-Type": "application/json" },
          status: 400,
        }
      );
    } ///

    //check user in database
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { messege: "User does not exists", success: false },
        { status: 400 }
      );
    }
    console.log("User exists..");

    //Check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    console.log("validPassword: ", validPassword);
    if (!validPassword) {
      return NextResponse.json(
        { messege: "Invalid Password", success: false },
        { status: 400 }
      );
    }
    console.log(user);

    //create token data
    const tokenData = {
      id: user._id,
      username: user.name,
      email: user.email,
    };
    console.log("Tokendata: ", tokenData);
    //create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });
    console.log("token:", token);

    //set token value in cookie
    cookies().set({
      name: "token",
      value: token,
      httpOnly: false, //must use true in production mode,
      path: "/",
    });

    return NextResponse.json({ messege: "Login Successfull!", success: true });
  } catch (error) {
    return NextResponse.json(
      { messege: error.messege, success: false },
      { status: 500 }
    );
  }
}
