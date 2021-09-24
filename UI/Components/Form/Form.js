import React, {useEffect} from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { Button, Box } from "@chakra-ui/react";
import FormField from "../FormField/FormField";
import Wrapper from "../Wrapper/Wrapper";
import { signIn } from "next-auth/client";


const VoucherForm = ({
  handleValues,
  validationSchema,
  initialValues,
  firstFieldName,
  SecondFieldName,
  signup,
  signupWithGoogle,

  buttonName,
}) => {
  const Schema = yup.object().shape(validationSchema);
  let redirectUrl = "http://location:3000";

  useEffect(() => {
    const url = new URL(location.href);
    redirectUrl = url.searchParams.get("callbackUrl");
  });

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <Formik
        initialValues={{ initialValues }}
        onSubmit={async (values, { setSubmitting, setFieldError }) => {
          try {
            await handleValues(values, setFieldError);
            setSubmitting(false);
          } catch (err) {
            console.log(err);
          }
        }}
        validationSchema={Schema}
      >
        {({ isSubmitting, submitForm , isValid, dirty}) => 
          <Wrapper>
            <Form>
              <FormField
                name="firstFieldName"
                label={capitalizeFirstLetter(firstFieldName)}
              />

              <FormField
                type="password"
                name="secondFieldName"
                label={capitalizeFirstLetter(SecondFieldName)}
              />

              {signup && (
                <FormField
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                />
              )}
              <>
                <Box marginTop="10px">
                  <Button
                   disabled={!isValid||isSubmitting||!dirty}
                    color="teal"
                    onClick={submitForm}
                    isFullWidth
                  >
                    {buttonName}
                  </Button>

                  {signupWithGoogle && <Button
                    onClick={() => {
                      signIn("google", {
                        callbackUrl: redirectUrl,
                      });
                    }}
                    color="teal"
                    marginTop={[2,3,5]}
                    isFullWidth
                  >
                    Sign up with Google
                  </Button> }
                </Box>
              </>
            </Form>
          </Wrapper>
        }
      </Formik>
    </div>
  );
};

export default VoucherForm;
