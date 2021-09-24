import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box
} from "@chakra-ui/react";

const FormField = ({ name, label, type, variant='outline', placeholder }) => {
  const [field, {error}] = useField(name);

  return (
    <>
      <Box marginTop="10px">
      <FormControl isInvalid={!!error}>
        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        <Input {...field} id={field.name} type={type} variant={variant} placeholder={placeholder}/>
        {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      </FormControl>
      </Box>
    </>
  );
};

export default FormField;
