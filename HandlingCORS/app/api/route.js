//Handling CORS (Cross Origin Resource Sharing)

export async function GET(request) {
  return new Response("Handling CORS! Don't disturb :>", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type,Authorization",
    },
  });
}
