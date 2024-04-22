import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
import { connectDB } from "@utils/database";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            })

            session.user.id = sessionUser._id.toString();

            return session;
        },
    

        // every next route is a severless route -> lambda funtion ( only opens when its called)
        async signIn({ profile, user }) {
            try {
                await connectDB();

                // Check if User already exists
                const userExists = await User.findOne({
                    email: profile.email
                });

                // If not, create a new User
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.login.replace(" ", "").toLowerCase(),
                        image: profile.avatar_url,
                    });
                }
                return true;
                
            } catch (error) {
                console.log(error);
                return false
            }
        },
        }
    }
)

export { handler as GET, handler as POST };