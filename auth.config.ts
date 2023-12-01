import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: '/login'
    },
    providers: [],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            if(isOnDashboard) {
                if(isLoggedIn) {
                    return true;
                };
                return false;
            } else if (isLoggedIn) {
                console.log("Logged in, redirecting...")
                return Response.redirect(new URL('/dashboard', nextUrl));
            }
            console.log("auth:", auth)
            return true;
        }
    }
} satisfies NextAuthConfig;