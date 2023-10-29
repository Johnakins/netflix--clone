import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: '45322497079-cu71btekjmf837oe25cicknmft3g4od9.apps.googleusercontent.com',
            clientSecret: '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'
        })
    ],
    callbacks: {
        async session({ session, token, user }) {
            session.user.username = session?.user?.name.split("").join("").toLocaleLowerCase();
            session.user.uid = token.sub

            return session
        }
    },
    secret: "this_secret_key"
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }