//We will set and then get cookies here. If found cookies, send it as response.
//cookie setting method 1.

import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function GET(request) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  //Another way of reading cookie
  // const token = request.cookies.get('token')
  if (token) {
    //if cookie is found, send it as response
    return NextResponse.json({ cookie: token });
  } else {
    //else set demo cookie
    //To set cookies, you need to return a new Response using the Set-Cookie header.
    const demoToken = "Lorem#Ipsum@dolor123";
    return new Response("Cookie Set successfully!", {
      status: 200,
      headers: { "Set-Cookie": `token=${demoToken}` },
    });
  }
}
