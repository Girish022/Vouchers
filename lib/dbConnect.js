
import { MongoClient } from "mongodb";


export const connectDb = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://meetupuser:Test@123@cluster0.rcszj.mongodb.net/BrandVouchers?retryWrites=true&w=majority"
  );
  return client;
};


