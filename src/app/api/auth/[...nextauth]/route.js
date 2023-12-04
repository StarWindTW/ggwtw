import NextAuth, { getServerSession } from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import { redirect } from "next/dist/server/api-utils";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                }
            }
        })
    ],
    serect: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/signin',
    },
    callbacks: {
        async session({ session, token, user }) {
            session.image = token.image
            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
            session.idToken = token.idToken;
            session.provider = token.provider;
            session.id = token.id;
            return session
        },
        async jwt({ token, user, account }) {
            if (account) {
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;
                token.idToken = account.id_token;
                token.provider = account.provider;
              }
              if (user) {
                token.id = user.id.toString();
              }
              return token;
        }
    }
}

// export async function loginRequiredServer(){
//     const session = await getServerSession(authOptions)
//     if(!session) return redirect("/")
// }
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }