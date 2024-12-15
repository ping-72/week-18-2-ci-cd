import NextAuth from "next-auth"
import { authOptions } from "../../../../lib/auth"



//ok
//@ts-ignore
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }