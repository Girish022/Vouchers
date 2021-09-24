import React from "react";
import { Formik, Form } from "formik";
import validationsForm from "../../lib/validationSchema";
import * as yup from "yup";
import FormField from "../Components/FormField/FormField";
import { Button, Box, SimpleGrid } from "@chakra-ui/react";

const VoucherForm = ({ handleValues }) => {
  const vouchersDetailsSchema = yup.object().shape(validationsForm);

  return (
    <div>
      <Formik
        initialValues={{
          denomination: "",
          quantity: "",
          firstName: "",
          email: "",
          message: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleValues(values);

          setSubmitting(false);
        }}
        validationSchema={vouchersDetailsSchema}
      >
        {({ isSubmitting ,isValid, dirty}) => (
          <Form>
            <SimpleGrid columns={[1,2,3]} spacing={[3,5,10]}>
              <FormField
                name="denomination"
                label="Enter denomination"
                variant="flushed"
              />

              <FormField
                type="TextField"
                name="quantity"
                label="Quantity"
                variant="flushed"
              />

              <FormField
                name="firstName"
                label="First Name"
                variant="flushed"
              />

              <FormField
                type="email"
                name="email"
                label="Email"
                variant="flushed"
              />

              <FormField name="message" label="Message" variant="flushed" />
            </SimpleGrid>
            
            <Box marginTop={[4,6,10]}>
              <Button disabled={!isValid||isSubmitting||!dirty} color="teal" type="submit">
                Check Out
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default VoucherForm;
