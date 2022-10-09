import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  secret:process.env.NEXT_PUBLIC_SECRET
}

export default NextAuth(authOptions)
