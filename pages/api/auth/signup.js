import { connectDb } from "../../../lib/dbConnect";
import { hash } from "bcrypt";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const data = req.body;
      const { email, password } = data;
      console.log(data, "data");
      hash(password, 10, async function (err, hash) {
        if (!err) {
          const client = await connectDb();
          const db = client.db();
          const collection = db.collection("users");
         
          await collection.insertOne({ email, password: hash });
    
    
          client.close();
          res.status(201).json({ message: "data inserted" });
        } else {
          res.status(403).json({ message: "not able to add user" });
          
        }
      });
    }
  } catch (error) {
    res.status(409).json({message:error.message})
  }
  
}
