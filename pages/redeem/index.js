import React, {useContext} from 'react'
import { validationsRedeemForm } from '../../lib/validationSchema'
import VoucherForm from '../../UI/Components/Form/Form'
import {useRouter} from 'next/router'
import {useToast} from '@chakra-ui/react'
import { AppContext } from '../../components/AppContext/AppContext'


const redeem= () => {
    const router=useRouter();
    const toast = useToast()
    const {setCash}=useContext(AppContext)
   
    const initialValues = {
        firstFieldName: "",
        secondFieldName: "",
      };
      async function handleValues(redeemData) {
        try {
          const response = await fetch("/api/redeem", {
            method: "POST",
            body: JSON.stringify({
              cardNumber:redeemData.firstFieldName,
              cardPin:redeemData.secondFieldName,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.status === 201) {
            setCash(1000);
            toast({
              title: "Successfully Redeemed, your wallet balance updated",
              status: "success",
              duration: 3000,
              isClosable: true,
              position:"top",
            })
          }  
          if(response.statusText==='Unauthorized') {
            router.push('/login')
          }    
          
        } catch (error) {
          console.log(error)
        }
      }
    return (
        <div>
            
            <VoucherForm
            handleValues={handleValues}
            firstFieldName="card Number"
            SecondFieldName="card Pin"
            initialValues={initialValues}
            validationSchema={validationsRedeemForm}
            buttonName="Redeem" 
            />
        </div>
    )
}

export default redeem