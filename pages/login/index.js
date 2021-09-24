import React, { useState } from "react";
import { useRouter } from "next/router";
import VoucherForm from "../../UI/Components/Form/Form";
import { validationsLoginForm } from "../../lib/validationSchema";
import { useToast } from "@chakra-ui/react";
import { signIn } from "next-auth/client";
import LoadingSpinner from "../../UI/Components/Spinner/Spinner";


const Login = () => {
  const router = useRouter();
  const toast = useToast();
  const [loading, setLoading] = useState(true);

  const initialValues = {
    firstFieldName: "",
    secondFieldName: "",
  };

  async function handleValues(loginData) {
    const result = await signIn("credentials", {
      redirect: false,
      email: loginData.firstFieldName,
      password: loginData.secondFieldName,
    });

    if (!result.error) {
      toast({
        title: "Login Successful",
        position: "top",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      router.push("/");
      setLoading(false);
    } else {
      toast({
        title: "Login Failed",
        position: "top",
        description: result.error,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  }

  return (
    <>
      {!loading ? (
       <LoadingSpinner/>
      ) : (
        <VoucherForm
          handleValues={handleValues}
          firstFieldName="email"
          SecondFieldName="password"
          initialValues={initialValues}
          validationSchema={validationsLoginForm}
          buttonName="Login"
          signupWithGoogle
        />
      )}
    </>
  );
};

export default Login;
