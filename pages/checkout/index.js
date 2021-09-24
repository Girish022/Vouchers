import React, {useContext} from "react";
import { SimpleGrid, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import FormField from "../../UI/Components/FormField/FormField";
import { validationCard } from "../../lib/validationSchema";
import * as yup from "yup";
import {useRouter} from "next/router";
import {useToast} from '@chakra-ui/react'
import { AppContext } from "../../components/AppContext/AppContext";



const Checkout = () => {
  const router=useRouter()
  const toast = useToast()
  const {  cash } = useContext(AppContext);
  const cardSchema = yup.object().shape(validationCard);
  

  const handleRedeem = () => {
    toast({
      title: "Successfully Purchased",
      status: "success",
      duration: 3000,
      isClosable: true,
      position:"top",
    })
    router.push('/')

  };
  
  const handlePayment=()=> {
    toast({
      title: "Successfully Purchased",
      status: "success",
      duration: 3000,
      isClosable: true,
      position:"top",
    })
    router.push('/')
  }

  return (
    <>
      <Formik
        initialValues={{
          cardnumber: "",
          name: "",
          date: "",
          cvv: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          alert(values);

          setSubmitting(false);
        }}
        validationSchema={cardSchema}
      >
        {({ isSubmitting,isValid,dirty }) => (
          <Form>
            <SimpleGrid
              columns={2}
              spacing={2}
              width="500px"
              marginX="auto"
              marginY="auto"
              bg="light green"
            >
              <FormField name="cardnumber" placeholder="Card Number" />

              <FormField name="name" placeholder="Name on the Card" />

              <FormField name="date" placeholder="MM/YY" />

              <FormField type="password" name="cvv" placeholder="CVV" />
              <Button
                type="submit"
                onClick={handlePayment}
                disabled={!isValid||isSubmitting||!dirty}
                isFullWidth
              >
                Make Payment
              </Button>
              <Button  onClick={handleRedeem} isFullWidth disabled={!cash}>
                Redeem Coins
              </Button>
            </SimpleGrid>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Checkout;
