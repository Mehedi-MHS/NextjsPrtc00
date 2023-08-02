import { NextResponse } from "next/server";

//This function can be marked as 'async' if used 'await' inside
export function middleware(request) {
  console.log(request.method);
  console.log(request.url);
  return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: "/about/:path*",
};

/*
requested url: http://localhost:3000/about/anotherPath
-> page redirected to /home then:
output:(console)
GET
http://localhost:3000/about/anotherPath

*/
