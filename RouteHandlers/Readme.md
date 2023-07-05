Good to know: Route Handlers are only available inside the app directory. They are the equivalent of API Routes inside the pages directory meaning you do not need to use API Routes and Route Handlers together

Convention:
===============
Route Handlers are defined in a route.js|ts file inside the app directory:
---app/api/route.js

Always export "async" function:
================================
export async function GET(request) {}

Function Name must be the same as request Name :
==================================================
GET, POST, PUT, DELETE, etc.
Like: export async function GET(Request){}


Extended NextRequest and NextResponse APIs

In addition to supporting native Request
and Response
. Next.js extends them with NextRequest and NextResponse to provide convenient helpers for advanced use cases.
