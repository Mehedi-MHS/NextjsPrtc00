// In this file, we can define any type of request as follows:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
//  A simple GET Example

export async function GET(request, { params }) {
  //extra {params} is used to access dynamic routes
  const username = params.user;
  return new Response("This is dynamic nested route. Username:" + username);
}
