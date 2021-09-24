import { Box } from "@chakra-ui/react";

const Wrapper = ({ children }) => {
  return (
    <Box mt={8} mx="auto" maxWidth="400px" w="100%">
      {children}
    </Box>
  );
};

export default Wrapper;
