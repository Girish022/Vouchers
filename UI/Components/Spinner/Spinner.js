import React from "react";
import {Box, CircularProgress} from '@chakra-ui/react'

const LoadingSpinner = () => {
  return (
    <Box position="absolute" top="50%" left="50%" marginTop="200px">
      <CircularProgress isIndeterminate color="green.300"  size={100}/>
    </Box>
  );
};

export default LoadingSpinner;
