import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/_next")) return NextResponse.next();

    if (pathname === "/") {
        req.nextUrl.pathname = "/hoobe_coding_exercise";
        return NextResponse.redirect(req.nextUrl);
    }

    return NextResponse.next();
}
