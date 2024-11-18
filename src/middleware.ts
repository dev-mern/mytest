import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const AuthRoutes = [
    '/login',
    '/register'
];

const commonPrivateRoutes = [
    '/dashboard',
    '/dashboard/change-password',
    '/payment',
    "/api/users",
 ];

export function middleware(request: NextRequest) {
    console.log(request);

    const {pathname} = request.nextUrl;
    const accessToken = cookies().get('accessToken')?.value;
    console.log({pathname,accessToken});

    // check authenticattion
    if (!accessToken) {
        if (AuthRoutes.includes(pathname)) {
           return NextResponse.next();
        } else {
           return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    if (accessToken && (commonPrivateRoutes.includes(pathname) || commonPrivateRoutes.some((route) => pathname.startsWith(route)))) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/', request.url))
}


// which which page/routes this middleware will trigger
export const config = {
    matcher: [
        '/login',
        '/register',
        '/dashboard/:page*',
        '/doctors/:page*',
        // "/api/:path*"
    ],
}