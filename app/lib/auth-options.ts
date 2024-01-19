import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import Email from "next-auth/providers/email";
import { env } from "./env";
import { AuthOptions, getServerSession } from 'next-auth'
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";


export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_ID,
            clientSecret: env.GOOGLE_SECRET
        }),
        GithubProvider({
            clientId: env.GITHUB_ID,
            clientSecret: env.GITHUB_SECRET
        }),
        Email({
            from: process.env.EMAIL_FROM,
            server: {
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT),
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD,
                },
            }
        }),
    ],
    callbacks: {
        session({ session, user }) {
            if (!session?.user) {
                return session
            } else {
                session.user.id = user.id
            }

            return session
        }
    },
    secret: process.env.SECRET
}

export const getAuthSession = async () => {
    const session = await getServerSession(authOptions)

    return session
}