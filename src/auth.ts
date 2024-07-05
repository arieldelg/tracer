import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import github from "next-auth/providers/github";
// import Credentials from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
// import { getUser } from "./auth/actions/userCreation";
// import { redirect } from "next/navigation";

export interface DataAuth {
  _id: string;
  name: string;
  email: string;
  password?: string;
  emailVerified: null;
  image: string;
  role: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    google,
    github,
    // Credentials({
    //   credentials: {
    //     email: {
    //       label: "correo electornico",
    //       type: "email",
    //       placeholder: "usuario@hotmail.com",
    //     },
    //     password: {},
    //   },
    //   authorize: async (credentials) => {
    //     // logic to salt and hash password
    //     // const pwHash = saltAndHashPassword(credentials.password)

    //     // logic to verify if user exists
    //     // const user = await getUser(credentials!.email, credentials!.password);

    //     if (!user) {
    //       // No user found, so this is their first attempt to login
    //       // meaning this is also the place you could do registration
    //       redirect("/register");
    //       // throw new Error("User not found.");
    //     }

    //     // return user object with the their profile data
    //     return user;
    //   },
    // }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async signIn() {
      return true;
    },
    async jwt({ token }) {
      const response = await fetch(
        `http://localhost:8000/api/userAuth/${token.email}`
      );

      const dataArray: DataAuth[] = await response.json();
      const data: DataAuth = dataArray[0];
      if (!data.isActive) {
        throw Error("persona bloqueada");
      }
      token.roles = data.role;
      token.id = data._id;
      return token;
    },
    async session({ session, token }) {
      session.user.roles = token.roles as string[];
      session.user.id = token.id as string;

      return session;
    },
  },
});
