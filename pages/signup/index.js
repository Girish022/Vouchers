import React, {useState} from "react";
import { useRouter } from "next/router";
import VoucherForm from "../../UI/Components/Form/Form";
import {validationsCreateForm} from "../../lib/validationSchema";
import {useToast}  from "@chakra-ui/react";
import LoadingSpinner from "../../UI/Components/Spinner/Spinner";


const Signup = () => {
  const router = useRouter();
  const toast = useToast()
  const [loading, setLoading] = useState(true);

  const initialValues = {
    firstFieldName: "",
    secondFieldName: "",

  };

  async function handleValues(signupData) {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
          email:signupData.firstFieldName,
          password:signupData.secondFieldName,
        }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.status===201) {
      toast({
        title: "Account created.",
        description: "We've created your account for you.Please login to continue",
        status: "success",
        duration: 3000,
        isClosable: true,
        position:"top",
      })
    }
    console.log(data);
    router.push("/login");
    setLoading(false)
  }
  return (
     <>
      {!loading? <LoadingSpinner/> : <VoucherForm  
        handleValues={handleValues}
        firstFieldName="email"
        SecondFieldName="password"
        initialValues={initialValues}
        validationSchema={validationsCreateForm}
        buttonName="Create Account"
        signup
        />}
      
    </>
  );
};

export default Signup;
