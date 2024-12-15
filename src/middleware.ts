import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/generate'])

export default clerkMiddleware(async (auth, req) => {
    const { userId, redirectToSignIn } = await auth()

    if (!userId && isProtectedRoute(req)) {
        return redirectToSignIn() // hydratation isssues in development
    }
})

export const config = {
    matcher: ['/', '/generate', '/poem-generator', '/poem-generator/:path*', '/api/:path*', '/sitemap.xml', '/demo', '/success/:path*', '/p/:path*'], // Define your routes explicitly
}