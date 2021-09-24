
import HomePage from "../components/Home/Homepage";
import { connectDb } from "../lib/dbConnect";

export default function Home({ brands }) {
  

  return <HomePage vouchers={brands} />
}

export const getStaticProps = async () => {
  const client = await connectDb();

  const db = await client.db();
  const brandVoucherCollection = await db.collection("list");
  const brandArray = await brandVoucherCollection.find().toArray();
  client.close();

  console.log(brandArray, "brandVouchers");

  return {
    props: {
      brands: brandArray.map((voucher) => ({
        image: voucher.image,
        description: voucher.description,
        id: voucher._id.toString(),
      })),
    },
    revalidate: 1,
  };
};
