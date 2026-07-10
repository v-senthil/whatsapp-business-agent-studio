import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const has = req.cookies.get("wabiz_session");
  if (!has) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/home", "/api-docs"],
};
