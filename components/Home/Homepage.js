import React, {useContext, useEffect, useState} from "react";
import { Grid } from "@chakra-ui/react";
import { VoucherCard } from "../../UI/VoucherCard/VoucherCard";
import { AppContext } from "../AppContext/AppContext";



const HomePage = ({ vouchers }) => {
  const {search}= useContext(AppContext);
  const [filterVouchers , setFilterVouchers]=useState([]);

  
  
  useEffect(()=>{
    {console.log('homepage',search)}
    const getFilteredList=vouchers.filter((option)=>{
      return option.description.toLowerCase().includes(search.toLowerCase())
    })
    console.log(getFilteredList)
    setFilterVouchers(search?getFilteredList:vouchers)
  },[search])

  return (
    <div>
      <Grid templateColumns={{ base: "repeat(2, 1fr)",md:"repeat(3, 1fr)", lg: "repeat(5, 1fr)" }} gap={{ base: 0.25,md:0.5, lg: 1}}  >
       
        {vouchers &&
          filterVouchers.map((voucher) => {
            return (
             
              <VoucherCard
                image={voucher.image}
                key={voucher.id}
                description={voucher.description}
                id={voucher.id}
              />
         
            );
          })}
      </Grid>
    </div>
  );
};

export default HomePage;
