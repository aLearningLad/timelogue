import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({
    req,
    res,
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // ALREADY LOGGED IN, SO DO NOT ALLOW ON LOGIN PAGE
  if (user && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  // NOT LOGGED IN, TRYING TO ACCESS ANY OTHER PAGE EXCEPT LOGIN
  if (!user && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

// DEFINES THE PATHS I WANNA RUN THIS MIDDLEWARE ON
export const config = {
  matcher: ["/", "/all-watches", "/add-watch", "/home"],
};
