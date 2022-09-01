import { deleteCookie } from "$std/http/cookie.ts";

export function handler(req: Request): Response {
  console.log(req.url);
  console.log(new URL(req.url).origin);
  const headers = new Headers({
    location: new URL(req.url).origin,
  });
  deleteCookie(headers, "test_cookie", { path: "/" });
  return new Response(null, {
    status: 302,
    headers,
  });
}
