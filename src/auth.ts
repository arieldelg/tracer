import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import github from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [google, github],
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ user, account, credentials, email, profile }) {
      console.log({ user, account, credentials, email, profile }, "sign");
      return true;
    },
    async jwt({ token, account, user, profile, session, trigger }) {
      console.log({ token, account, user, profile, session, trigger }, "jwt");
      return token;
    },
    async session({ session, token, user }) {
      console.log({ session, token, user }, "session");
      return session;
    },
  },
});

console.log();
