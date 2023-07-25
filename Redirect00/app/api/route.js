import { redirect } from "next/navigation";

export async function GET(request) {
  console.log("redirected to homepage");
  redirect("/"); //redirect to the homepage.
}
