import React from "react";
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import priceGif from '../../assets/images/payb.gif'
const PriceCard = () => {
  return (
    <Box py={8} textAlign="center">
    
      <Image
        src={priceGif}
        alt="Offer on new upcoming Commercial projects in Pune"
        width="856px"
        height="auto"
        mx="auto"
      />

      
      <VStack spacing={4} mt={4}>
        <Text fontWeight="bold" fontSize="lg">
          We <strong>Harleen Realtors™</strong> are a certified real estate company dealing with New Launch, Resale, Rentals of residential projects &amp;
        </Text>
        <Text fontSize="lg">
          also Group Bookings of new upcoming Commercial projects in Pune.
        </Text>
        <Text fontSize="lg">
          Because of our relationships, performance &amp; networking with major developers, traders, investors, and stakeholders,
        </Text>
        <Text fontSize="lg">
          we get the best deals on new ongoing commercial projects in Pune.
        </Text>
      </VStack>
    </Box>
  );
};

export default PriceCard;
