import { NextResponse } from "next/server";
import User from "../../../../model/User";
import bcryptjs from "bcrypt";
import { connectDatabase } from "@/app/dbConfig/dbConfig";

//connect to database
connectDatabase();
export async function POST(request) {
  const { username, email, password } = await request.json();

  try {
    //Check If user Already exists or not
    const isUserExists = await User.exists({ email: email });
    console.log("isUserExists:", isUserExists);
    if (isUserExists !== null) {
      //that means user exists
      return NextResponse.json(
        { success: false, messege: "User Already exists" },
        { status: 409 }
      );
    }

    //Hashing password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    console.log("password", password, "HashedPassword: ", hashedPassword);

    //Insert newUser data with hashed password in db
    const newUser = await User.create({
      name: username,
      email: email,
      password: hashedPassword,
      registeredAT: new Date(),
    });

    console.log("NewUser Created: ", newUser);

    //disconnect database
    // disconnectDatabase();

    return NextResponse.json(
      { messege: newUser, success: true },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error from catch block: ", error);
    return NextResponse.json({ messege: "Error Occured", success: false });
  }
}
