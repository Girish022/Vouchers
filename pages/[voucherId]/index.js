import React from "react";
import BrandDetails from "../../components/BrandDetails/BrandDetails";
import { connectDb } from "../../lib/dbConnect";
import LoadingSpinner from "../../UI/Components/Spinner/Spinner";

const BrandDetail = ({ selectedbrand , loading=true}) => {
 
  return (
    <div>
     { <BrandDetails data={selectedbrand} loading={loading} /> } 
    </div>
  );
};

export const getStaticPaths = async () => {
  const client = await connectDb();
  const db = await client.db();
  const brandVoucherCollection = await db.collection("list");
  const brandsData = await brandVoucherCollection
    .find({}, { _id: 1 })
    .toArray();
  client.close();

  return {
    fallback: "blocking",
    paths: brandsData.map((brand) => ({
      params: { voucherId: brand._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  
  const voucherId = await context.params.voucherId;

  const client = await connectDb();
  const db = await client.db();
  const brandVoucherCollection = await db.collection("list");

  const selectedbrand = await brandVoucherCollection.findOne({
    _id: voucherId,
  });
 
  client.close();

  return {
    props: {
      selectedbrand: selectedbrand,
      loading:false
     
      
    },
  };
};

export default BrandDetail;
