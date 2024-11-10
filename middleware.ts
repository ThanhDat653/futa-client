"use server"
import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";

const publicRoutes = ['/dang-ky']
const authRoutes = ['/tai-khoan', '/dang-xuat']

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname
    const isPublicRoute = publicRoutes.includes(path)
    const isAuthRoute = authRoutes.includes(path)
    const token = cookies().get('access_token')?.value
    if (token && isPublicRoute) {
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }
    if (!token && isAuthRoute) {
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }
    return NextResponse.next()
}