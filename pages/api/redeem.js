import { connectDb } from "../../lib/dbConnect";
import { getSession } from "next-auth/client";

export default (async function handler(req, res) {
  const session= await getSession({req});
  try {
    if (!session){
      res.status(401).json({message:'not authenticated'})
    }
    if (req.method === "POST" && session) {
      const data = req.body;
      const client = await connectDb();
      const db = await client.db();
      const collection = await db.collection("redeem");
        await collection.insertOne(data);
      
      client.close();
      res.status(201).json({ message: "data inserted" });
    }
  } catch (error) {
    res.status(409).json({message:error.message})
  }
 
})