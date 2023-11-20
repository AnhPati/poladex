import GoogleProvider from "next-auth/providers/google";
import Email from "next-auth/providers/email";
import { env } from "./env";
import { AuthOptions } from 'next-auth'
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";


export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_ID,
            clientSecret: env.GOOGLE_SECRET
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
    ]
}