import React from "react";
import VoucherForm from "../../UI/VoucherForm/VoucherForm";
import { useRouter } from "next/router";
import VoucherCard from "../../UI/VoucherCard/VoucherCard";
import { Grid, GridItem } from "@chakra-ui/react";
import LoadingSpinner from "../../UI/Components/Spinner/Spinner";

const BrandDetails = ({ data , loading}) => {
  const router = useRouter();

  
  async function handleValues(enteredMeetupData) {
    const response = await fetch("/api/voucher", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("responce", response)
   try {
    if (response.status === 201) {
      
      router.push("/checkout");
    }
   } catch (error) {
     console.log(error)
   }
   

   
  }

  return (
    <>
      {loading ? <LoadingSpinner/>:
        <Grid templateColumns={{ base: "repeat(1, 1fr)",md:"repeat(3, 1fr)", lg: "repeat(3, 1fr)" }} gap={{ base: 0.25,md:0.5, lg: 1}} marginLeft={[2,3,5]}>
        <GridItem colSpan={[3,2,1]}>
          <VoucherCard description={data.description} image={data.image} />
        </GridItem> 
        <GridItem colSpan={[3,2,1]}  >
          <VoucherForm handleValues={handleValues} />
          </GridItem>  
        </Grid>
      }
    </>
  );
};

export default BrandDetails;
