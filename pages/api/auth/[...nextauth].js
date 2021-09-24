import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { connectDb } from "../../../lib/dbConnect";
import { compare } from "bcrypt";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize (credentials) {
        console.log("credentials",credentials)  
        const client = await connectDb();
        const db = await client.db();
        const collection = await db.collection("users");
        const user = await collection.findOne({ email: credentials.email });
        console.log(user)
        
        if (!user) {
          throw new Error("No user found");
          
        }
        const isValid = await compare(credentials.password, user.password);

        if (!isValid) {
          throw new Error("Password is not valid ");
        }
        client.close();
        return { email: user.email }
        
      },
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      
    })
  ],
 
});
