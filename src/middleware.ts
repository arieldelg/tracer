import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  //   console.log("currenth path", request.nextUrl.pathname);
  headers.set("custom-header", request.nextUrl.pathname);
  return NextResponse.next({ headers });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/home", "/search", "/profile"],
};
