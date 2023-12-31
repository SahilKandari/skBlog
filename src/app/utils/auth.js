import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./connect"
import { getServerSession } from "next-auth";

export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_URL,
}

export const getAuthSession = () => getServerSession(authOptions);