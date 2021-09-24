import React, {useState} from "react";
import {
  Box,
  Image,
  Badge,
  Text,
  Stack,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import LoadingSpinner from "../Components/Spinner/Spinner";



export const VoucherCard = ({ image, description, id }) => {

  const router = useRouter();
  const [loading ,setLoading]=useState(true)
 
  const handleClick = () => {
    
    router.push(`/${id}`);
    setLoading(false);
    
  };

  return (
    <>
   
      <Box
        margin="10"
        rounded="20px"
        style={{backgroundColor:'tan'}}
        overflow="hidden"
        marginTop={10}
        onClick={handleClick}
        maxWidth="300px"
      >
        <Image src={image} alt="Card Image" width={400} height={200} />
        <Box p={1}>
          <Stack align="center" alignItems="center" >
            <Badge variant="solid" colorScheme="green" rounded="full" px={3}>
             <StarIcon />
             <StarIcon />
             <StarIcon />
            </Badge>
          </Stack>
          <Stack align="center">
            <Text as="h2" fontWeight="normal" my={2}>
              {description}
            </Text>
          </Stack>
   
        </Box>
      </Box>
  
    </>
   
  );
};

export default VoucherCard;
