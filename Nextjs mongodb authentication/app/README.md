Middleware allows you to run code before a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.

Convention:

Use the file middleware.ts (or .js) in the root of your project to define Middleware. For example, at the same level as pages or app, or inside src if applicable.

Matcher:
matcher allows you to filter Middleware to run on specific paths.
export const config = {
matcher: '/about/:path*',
}
You can match a single path or multiple paths with an array syntax:
export const config = {
matcher: ['/about/:path*', '/dashboard/:path\*'],
}
