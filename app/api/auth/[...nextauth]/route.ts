import NextAuth, { AuthOptions, SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/mongoConnect";
import User from "@/models/User";
import bcrypt from "bcrypt";

// -- AuthOptions with types --
export const authOptions: AuthOptions = {
  session: { strategy: "jwt" as SessionStrategy }, // Type-safe!
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();
        const user = await User.findOne({ email: credentials?.email });
        if (!user) return null;

        const isValid = await bcrypt.compare(credentials!.password, user.password);
        if (!isValid) return null;

        return { id: user._id.toString(), email: user.email, name: user.name };
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  // Inside callbacks in authOptions:
callbacks: {
  async session({ session, token }) {
    if (token && session.user) {
      (session.user as any).id = token.sub;
      // Fetch role and add to session
      const dbUser = await User.findOne({ email: session.user.email });
      if (dbUser) (session.user as any).role = dbUser.role;
    }
    return session;
  },
}

};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
